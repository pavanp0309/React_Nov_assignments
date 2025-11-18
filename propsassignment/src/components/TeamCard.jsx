import Tag from "./Tag.jsx"

function TeamCard(props){
    let {name,role,experience,skills,aiScore,status}=props
    return(
        <>
        <div className={`card m-3 p-3 ${status=="active"?"text-bg-success": status=="bench"?"text-bg-primary":"text-bg-warning"}
        ${aiScore > 85 ? "border border-3 shadow" : "border border-0" }`}>
            <p>{`Name: ${name}`}</p>
            <p>{`Role: ${role}`}</p>
            <p>{`Experience: ${experience}`}</p>
            <p>{`AI Score: ${aiScore}`}</p>
            <p>{`Skills: ${skills}`}</p>
        </div>
        <Tag label={name} type={skills} />
        </>
    )
}
export default TeamCard