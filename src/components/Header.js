import { NavLink } from "react-router-dom"
import { useState } from "react"

import style from "./Header.module.css"
import styleButton from "./Button.module.css"



const Header = () => {


    const [isBtnNavBarClick, setBtnNavBarClick] = useState(false)
    const [btnActiveClass, setBtnActiveClass] = useState("")

    const navStyle = (element) => {
        return {
            fontWeight: element.isActive ? "bold" : "normal",
            backgroundColor: element.isActive ? "rgb(51 134 106 / 49%)" : "rgb(47, 164, 158)",
            padding: element.isActive ? "1rem" : "0"
        }
    }

    const handleBtnNavbar = () => {
        setBtnNavBarClick(!isBtnNavBarClick)
    }

    
    // isBtnNavBarClick ? setBtnActiveClass("active") : setBtnActiveClass("")
    // console.log(btnActiveClass)

    return (
        <div className={style.container}>
            <div className={style.navFirstLayer}>
                <NavLink className={style.logo} to="/">Great Quotes</NavLink>
                <button onClick={handleBtnNavbar} className={styleButton.btn}>🔻</button>
            </div>

            <ul className={`${style.links} ${isBtnNavBarClick ? style.active: ""}`}>
                <NavLink className={style.link} style={navStyle}to="/AllQuote">All Quote</NavLink>
                <NavLink className={style.link} style={navStyle} to="/AddQuote">Add Quote</NavLink>
            </ul>
        </div>
    )
}

export default Header