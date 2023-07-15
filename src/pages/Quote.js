import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import QuoteDetail from "../components/QuoteDetail"
import CommentForm from "../components/CommentForm"
import Button from "../components/Button"
import MainContainer from "../components/Layout/MainContainer"
import HistoryText from "../components/HistoryText"
import styleButton from "../components/Button.module.css"


const createComments = (comments,quoteId) => {
    
    const errorMsg = <div style={{fontSize:"1.3rem"}}>No comments were yet added yet!</div>

    if (!comments) {
        return errorMsg
    }

    if (comments.length === 0) {
        return errorMsg
    }


    const refineComments = comments.map((c) => {
         const date = new Date(c.createdAt * 1000)
         
         const comment = (
            {
                id : c.id,
                createdAt: date,
                comment: c.comment
            }
         )

         return comment
    })

    const sortedComments = refineComments.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
    })
    console.log(sortedComments)
    
    return sortedComments.map((c) => {
                return <HistoryText key={c.id} comment={c.comment} 
                                    commentId={c.id} quoteId={quoteId}/>
           })
}


const Quote = () => {
    const [showComments, setShowComments] = useState(false)
    const [showCommentForm, setShowCommentForm] = useState(false)

    const { id } = useParams()
    
    const quotes = useSelector((state) => state.quotes)


    const {comments} = quotes.find((quote) => quote.id === id)
    console.log(comments)

    return (
        <MainContainer>
                <QuoteDetail/>

                {   
                   showComments === false ?
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <Button handleClick={setShowComments} >Load Comment</Button>
                        </div>
                    : ""
                }
                
                {
                    showComments && 
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <h1 style={{fontSize:"2rem", marginBottom:"2rem"}}>User comments</h1>

                            { 
                               showCommentForm === false ?
                                   <button onClick={() => setShowCommentForm(true)} className={styleButton.quoteView} style={{marginBottom:"3rem"}}>Add a comment</button>
                                : <CommentForm/>
                            }
                            
                            {createComments(comments,id)}
                            
                        </div>
                }


        </MainContainer>
    )
}


export default Quote