import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { useParams } from "react-router-dom"
import { v4 as uuidv4} from "uuid"

import style from "./CommentForm.module.css"
import styleButton from "./Button.module.css"
import { quotesAction } from "../feature/slices/quotes"
import { addCommentAction } from "../feature/slices/quotes"
import { Timestamp } from "firebase/firestore"

const CommentForm = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const [comment, setComment] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        const data = {
            payload: {
                quoteId: id,
                comment: comment,
                commentId: uuidv4(),
                createdAt: Timestamp.now()
            }
        }

        dispatch(addCommentAction(data))
        setComment("")
    }

    return (
        <div className={style.container}>
                <form onSubmit={onSubmit}>
                    <div className={style.labelDesc}>Your Comment</div>
                    <textarea className={style.textArea} value={comment} onChange={(e) => setComment(e.target.value)}/>
                    
                    <button style={{marginBottom:"2rem"}} className={styleButton.quoteView}>Add Comment</button>
                </form>
        </div>
    )
}

export default CommentForm