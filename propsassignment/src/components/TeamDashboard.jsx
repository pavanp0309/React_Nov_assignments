import TeamCard from "./TeamCard.jsx"

function TeamDashboard(){
    return(
        <>
         <TeamCard 
          name="Ramu"
          role="Frontend Developer"
          experience={2}
          skills={["HTML", "JS", "CSS"]}
          aiScore={70}
          status="active"
          />

          <TeamCard 
          name="Pavani"
          role="Backend Developer"
          experience={1}
          skills={["Java", "SpringBoot"]}
          aiScore={87}
          status="interviewing"
          />

          <TeamCard 
          name="Rakesh"
          role="Backendend Developer"
          experience={4}
          skills={["Python", "Flask"]}
          aiScore={85}
          status="active"
          />

          <TeamCard 
          name="Likith"
          role="CLoud Developer"
          experience={3}
          skills={["AWS"]}
          aiScore={75}
          status="bench"
          />

          <TeamCard 
          name="Praba"
          role="FullStack Developer"
          experience={2}
          skills={["HTML", "JS", "CSS","React","Java","MySql"]}
          aiScore={90}
          status="interviewing"
          />
        </>
    )
}
export default TeamDashboard