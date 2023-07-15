import { useDispatch } from "react-redux"
import { useContext, useState } from "react"

import style from "./SortButton.module.css"
import { quotesAction } from "../feature/slices/quotes"
import { context } from "../myStore/SortBtnStatProvider"

const SortButton = () => {
    const dispatch = useDispatch()

    const SortStatContext = useContext(context)
    
    const btnText = SortStatContext.sortButton === "Descending" ? "Ascending" : "Descending" 
   

    const handleClick = () => {

        if (SortStatContext.sortButton === "Descending") {
            SortStatContext.setSortButton("Ascending")
            dispatch(quotesAction.orderQuoteAscending())
        }

        if (SortStatContext.sortButton === "Ascending") {
            SortStatContext.setSortButton("Descending")
            dispatch(quotesAction.orderQuoteDescending())
        }  
    }

    return (
        <>
            <button onClick={() => handleClick()}
                    className={style.button}>{`Sort ${btnText}`}</button>
        </>
    )
}

export default SortButton