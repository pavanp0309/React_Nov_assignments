import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Attendance = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const student = state?.student;

    if (!student) return <h4>No student data found</h4>;

    const overall = () => {
        let present = 0, total = 0;
        student.attendance.forEach(a => {
            present += a.present;
            total += a.total;
        });
        return ((present / total) * 100).toFixed(2);
    };

    return (
        <div className="card shadow-sm p-3">
            <h4 className="text-danger">Attendance - {student.name}</h4>

            <table className="table mt-3">
                <thead className="table-danger">
                    <tr>
                        <th>Month</th>
                        <th>Present</th>
                        <th>Total</th>
                        <th>%</th>
                    </tr>
                </thead>

                <tbody>
                    {student.attendance.map((a, idx) => (
                        <tr key={idx}>
                            <td>{a.month}</td>
                            <td>{a.present}</td>
                            <td>{a.total}</td>
                            <td>{((a.present / a.total) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="alert alert-danger">
                <strong>Overall Attendance:</strong> {overall()}%
            </div>

            <button className="btn btn-secondary mt-3" onClick={() => navigate("/students")}>
                ⬅ Back to Students List
            </button>
        </div>
    );
};

export default Attendance;
