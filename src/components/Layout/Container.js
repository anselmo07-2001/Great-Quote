const style = {
    maxWidth:"50%",
    margin:"0 auto",
}


const Container = (props) => {
    return (
        <div style={style}>
             {props.children}
        </div>
    )
}

export default Container