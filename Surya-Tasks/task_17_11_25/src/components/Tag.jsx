export default function Tag({ label, type }) {
    const styles = {
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "12px",
        marginRight: "6px",
        background: type === "skill" ? "#e3f2fd" : "#f3e5f5",
        display: "inline-block",
    };

    return <span style={styles}>{label}</span>;
}
