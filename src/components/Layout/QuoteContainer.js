import { useEffect } from "react"
import { useSelector } from "react-redux"
import quotes from "../../feature/slices/quotes"

import QuoteCard from "../QuoteCard"

const style = {
    display: "flex",
    flexDirection: "column",
}

const createQuote = (quotes) => {
    return quotes.map(({quote,author,id}) => {
          return <QuoteCard key={id} id={id} quote={quote} author={author}/>
    })
}


const QuoteContainer = (props) => {
  const quotes = useSelector((state) => state.quotes)
  

  return (
     <div style={style}>
         {createQuote(quotes)}
     </div>
  )
}

export default QuoteContainer