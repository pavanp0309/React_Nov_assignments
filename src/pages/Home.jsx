import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center p-5 bg-light rounded shadow-sm">
            <h1 className="text-primary fw-bold">Welcome to Student Info Portal</h1>
            <p className="lead mt-3">A simple and clean portal to view student details, academic progress, and attendance.</p>

            <div className="mt-4">
                <Link to="/students" className="btn btn-primary btn-lg mx-2">View Students</Link>
                <Link to="/about" className="btn btn-outline-secondary btn-lg mx-2">About App</Link>
            </div>

            <hr className="my-5" />

            <h3 className="text-secondary">Features</h3>

            <div className="row mt-4">
                <div className="col-md-4 mb-3">
                    <div className="card p-3 shadow-sm border-0">
                        <h5 className="text-primary">👨‍🎓 Student List</h5>
                        <p>Browse students and view detailed information instantly.</p>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card p-3 shadow-sm border-0">
                        <h5 className="text-success">📚 Academic Records</h5>
                        <p>Check profile, marks, and attendance for each student.</p>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card p-3 shadow-sm border-0">
                        <h5 className="text-danger">🧭 Easy Navigation</h5>
                        <p>Uses advanced React Router DOM v7 with nested routing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
