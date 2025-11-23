import React from "react";
import { Link } from "react-router-dom";
import { students } from "../data/students";

const Students = () => {
    return (
        <>
            <h2 className="mb-4 text-primary fw-bold">Students</h2>

            <div className="row">
                {students.map((stu) => (
                    <div key={stu.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card shadow-sm h-100 border-0">

                            <div className="card-body">
                                <h5 className="card-title fw-bold">{stu.name}</h5>
                                <p className="card-text mb-1">
                                    <strong>Email:</strong> {stu.email}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Department:</strong> {stu.profile.department}
                                </p>
                                <p className="card-text mb-3">
                                    <strong>Year:</strong> {stu.profile.year}
                                </p>

                                <Link
                                    to={`/students/${stu.id}`}
                                    className="btn btn-primary w-100"
                                >
                                    View Details
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Students;
