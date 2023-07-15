import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import style from "./QuoteDetail.module.css"

const QuoteDetail = () => {
    const {id} = useParams()

    const quotes = useSelector((state) => state.quotes)
    // console.log(quotes)
    const {quote,author} = quotes.find((quote) => quote.id === id)
    

    return (
        <div className={style.container}>
            <div style={{display:"flex", flexDirection:"column",justifyContent:"center", padding:"5rem 0"}}>
                <div className={style.quote}>{quote}</div>
            </div>
            
            <div style={{display:"flex",justifyContent:"end"}}>
                <div className={style.author} style={{}}>{author}</div>
            </div>
        </div>
    )
}

export default QuoteDetail

