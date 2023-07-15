import style from "./QuoteCard.module.css"
import Button from "./Button"
import { Link } from "react-router-dom"
import styleButton from "./Button.module.css"


const QuoteCard = (props) => {
    
    const isQuoteLong = props.quote.length >= 14

    let counter = 0;
    let quote = [...props.quote].map((char) => {
         if (counter <= 13) {
             counter = counter + 1
             return char
         }
    })

    quote = quote.join("")
    


    return (
       <div className={style.container}>
           <div className={style.description}>
                <div className={style.quote}>{isQuoteLong ? `${quote}...` : quote}</div>
                <div className={style.author}>{props.author}</div>
           </div>
           <div className={style.btnContainer}>
                <Link className={styleButton.quoteView} to={`/AllQuote/quote/${props.id}`}>View Fullscreen</Link>
           </div>
       </div>
    )
}

export default QuoteCard