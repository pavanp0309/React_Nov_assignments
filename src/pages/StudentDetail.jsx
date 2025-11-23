import React from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { students } from "../data/students";

const StudentDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const student = students.find((s) => s.id === id);

    if (!student) return <h3>No student found</h3>;

    return (
        <>
            <h2>{student.name}</h2>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Email:</strong> {student.email}</p>

            <button className="btn btn-secondary mb-3" onClick={() => navigate("/students")}>
                ⬅ Back to Students List
            </button>

            <hr />

            {/* Sub Navigation Buttons with state */}
            <div className="btn-group mb-3">
                <Link to="profile" state={{ student }} className="btn btn-outline-primary">Profile</Link>
                <Link to="marks" state={{ student }} className="btn btn-outline-success">Marks</Link>
                <Link to="attendance" state={{ student }} className="btn btn-outline-danger">Attendance</Link>
            </div>

            {/* Subpages */}
            <Outlet />
        </>
    );
};

export default StudentDetail;
