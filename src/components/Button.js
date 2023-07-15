import style from "./Button.module.css"



const Button = ({children,handleClick}) => {
    

    return (
        <button onClick={() => handleClick(true)} className={style.quoteView}>{children}</button>
    )
}

export default Button