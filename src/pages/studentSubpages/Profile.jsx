import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const student = state?.student;

    if (!student) return <h4>No student data found</h4>;

    return (
        <div className="card shadow-sm p-3">
            <h4 className="text-primary">Profile of {student.name}</h4>

            <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item"><strong>Father:</strong> {student.profile.father}</li>
                <li className="list-group-item"><strong>Mother:</strong> {student.profile.mother}</li>
                <li className="list-group-item"><strong>Address:</strong> {student.profile.address}</li>
                <li className="list-group-item"><strong>Department:</strong> {student.profile.department}</li>
                <li className="list-group-item"><strong>Year:</strong> {student.profile.year}</li>
                <li className="list-group-item"><strong>Blood Group:</strong> {student.profile.blood}</li>
            </ul>

            <button className="btn btn-secondary mt-3" onClick={() => navigate("/students")}>
                ⬅ Back to Students List
            </button>
        </div>
    );
};

export default Profile;
