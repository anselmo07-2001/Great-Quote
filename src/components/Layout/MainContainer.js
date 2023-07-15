
const style =  {
    maxWidth: "120rem",
    margin:"0 auto",
    padding:"3.5rem",
}


const MainContainer = (props) => {
    return (
        <main style={style}>
              {props.children}
        </main>
    )
}

export default MainContainer

