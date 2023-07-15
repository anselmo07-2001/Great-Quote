import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4} from "uuid"
import { useContext } from "react"


import style from "./AddQuoteForm.module.css"
import styleButton from "./Button.module.css"
import { addQuote } from "../feature/slices/quotes"
import { Timestamp } from "firebase/firestore"
import { context } from "../myStore/SortBtnStatProvider"

const AddQuoteForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputAuthor, setInputAuthor] = useState("")
    const [inputQuote, setInputQuote] = useState("")
    const sortedBtnContext = useContext(context)


    const handleSubmit = (e) => {
        e.preventDefault()


        //the id should generate by firebase
        const quote = {
            payload : {
                quoteId: uuidv4(),
                quote: inputQuote,
                author: inputAuthor,
                createdAt: Timestamp.now(),
                _sortStat: sortedBtnContext.sortButton
            }
        }

        dispatch(addQuote(quote))

        
        // dispatch(quotesAction.addQuotes({
        //      id: Date.now(),
        //      quote: inputQuote,
        //      author: inputAuthor,
        //      comments: []
        // }))

        setInputAuthor("")
        setInputQuote("")

        navigate("/")
    }


    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                 <div>
                     <label htmlFor="author">Author</label><br/>
                     <input type="text" name="author" className={style.authorInput} 
                            value={inputAuthor} onChange={(e) => setInputAuthor(e.target.value)}/>
                 </div>
                 <div>
                     <label htmlFor="text">Text</label><br/>
                     <textarea name="text" row="10" style={{height:"15rem"}} className={style.authorInput}
                               value={inputQuote} onChange={(e) => setInputQuote(e.target.value)}/>
                     <div style={{display:"flex", justifyContent:"end"}}>
                       <button className={styleButton.quoteView}>Add Quote</button>
                     </div>
                 </div>
            </form>
        </div>
    )
}

export default AddQuoteForm