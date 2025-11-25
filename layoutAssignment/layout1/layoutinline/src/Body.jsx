function Body(){
    let bodystyle={
        display:"grid",
        gridTemplateAreas:`
        "s a"
        "ar a"
        `
    }

    return(
        <div style={bodystyle}>
        <div>
            <h3 style={{gridArea:"s",backgroundColor:"pink",height:"12rem",margin:"5px 0",padding:"3px",textAlign:"center"}}>Section</h3>
            <h3 style={{gridArea:"ar",backgroundColor:"green",height:"12rem",margin:"5px 0px",padding:"3px",textAlign:"center"}}>Article</h3>
        </div>
        <div>
            <h3 style={{gridArea:"a",backgroundColor:"red",height:"24.5rem",margin:"5px",padding:"3px",textAlign:"center"}}>hi</h3>
        </div>
        </div>
    )
}
export default Body


