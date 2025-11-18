import { teamData } from "../data/teamData";
import TeamCard from "./TeamCard";

export default function TeamDashboard() {

    const processedTeam = teamData.map(member => ({
        ...member,
        statusColor:
            member.status === "active"
                ? "#4caf50"
                : member.status === "bench"
                    ? "#ff9800"
                    : "#2196f3",

        highlightStyle:
            member.aiScore > 85
                ? { border: "2px solid #4caf50", boxShadow: "0 0 10px rgba(76,175,80,0.4)" }
                : {}
    }));

    return (
        <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                AI-Enabled Team Insights Panel
            </h1>

            {/* 💥 FLEXBOX RESPONSIVE WRAPPER */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center"
            }}>
                {processedTeam.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
}
