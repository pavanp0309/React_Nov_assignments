import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Marks = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const student = state?.student;

    if (!student) return <h4>No student data found</h4>;

    const total = student.marks.reduce((a, b) => a + b.score, 0);
    const percentage = (total / (student.marks.length * 100)) * 100;

    return (
        <div className="card shadow-sm p-3">
            <h4 className="text-success">Marks - {student.name}</h4>

            <table className="table mt-3">
                <thead className="table-success">
                    <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {student.marks.map((m, idx) => (
                        <tr key={idx}>
                            <td>{m.subject}</td>
                            <td>{m.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h5>Total: {total}</h5>
            <h5>Percentage: {percentage.toFixed(2)}%</h5>

            <button className="btn btn-secondary mt-3" onClick={() => navigate("/students")}>
                ⬅ Back to Students List
            </button>
        </div>
    );
};

export default Marks;
