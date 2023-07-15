import Line from "./Line"
import styleButton from "./Button.module.css"
import { useDispatch } from "react-redux"
import { removeComment } from "../feature/slices/quotes"

const style = {
    borderRadius:"50%",
    marginLeft:"1rem"
}


const HistoryText = (props) => {

    const dispatch = useDispatch()

    const onClickDelete = () => {
        dispatch(removeComment({
             commentId : props.commentId,
             quoteId : props.quoteId,
            //  comment: props.commentData
        }))
    }


    return (
        <div>
            <div style={{fontSize:"1.3rem", marginBottom:"1rem"}}>
                 {props.comment} 
                 <button className={`${styleButton.btn} ${styleButton.btnRemove}`}
                         onClick={onClickDelete}
                         style={style}
                         >X</button>
            </div>
            <Line/>
        </div>
    )
}

export default HistoryText