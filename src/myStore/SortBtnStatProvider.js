import React from "react";
import { useState } from "react";

export const context = React.createContext()

const SortBtnStatProvider = (props) => {

    const [sortButton, setSortButton] = useState("Descending")

    return (
        <context.Provider value={{sortButton,setSortButton}}>
            {props.children}
        </context.Provider>
    )
}

export default SortBtnStatProvider