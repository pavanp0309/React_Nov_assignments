import Tag from "./Tag";

export default function TeamCard({
    name,
    role,
    experience,
    skills,
    aiScore,
    status,
    statusColor,
    highlightStyle
}) {
    return (
        <div
            style={{
                flex: "1 1 280px",     // 💥 RESPONSIVE CARD WIDTH
                minWidth: "280px",     // 💥 Minimum size for mobile
                maxWidth: "350px",     // 💥 Looks clean on large screens

                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "16px",
                background: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                ...highlightStyle,
            }}
        >
            <h2 style={{ margin: 0 }}>{name}</h2>
            <p style={{ margin: "4px 0", color: "#555" }}>{role}</p>
            <p>Experience: {experience}</p>

            <span
                style={{
                    padding: "5px 12px",
                    background: statusColor,
                    color: "#fff",
                    borderRadius: "20px",
                    fontSize: "12px",
                }}
            >
                {status}
            </span>

            <p style={{ marginTop: "10px" }}>AI Score: {aiScore}</p>

            <div style={{ marginTop: "10px" }}>
                {skills.map((skill, index) => (
                    <Tag key={index} label={skill} type="skill" />
                ))}
            </div>
        </div>
    );
}
