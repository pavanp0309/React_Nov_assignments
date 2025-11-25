

function Tag(props){
    let {label,type,score}=props
    return(
        <>
        <div className={`card w-25 p-3 m-3 ${score>85?"border border-success border-5":"border border-dark-subtle"}`}>
            <p>{`Name:${label}`}</p>
            <p>{`Skills:${type}`}</p>
            <p></p>
        </div>
        </>
    )
}
export default Tag