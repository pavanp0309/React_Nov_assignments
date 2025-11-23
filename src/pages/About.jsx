import React from "react";

const About = () => {
    return (
        <div className="p-4 shadow-sm bg-white rounded">
            <h2 className="text-primary fw-bold">About Student Info Portal</h2>

            <p className="mt-3">
                The Student Info Portal is a centralized digital platform designed to
                help colleges manage and view essential student information in a clean
                and organized way. This application allows faculty, students, and
                administrators to quickly access academic details, attendance reports,
                and personal profiles, all from a single interface.
            </p>

            <h4 className="text-secondary mt-4">📌 Why This Portal?</h4>
            <p>
                Managing student records can become difficult when information is
                scattered across spreadsheets, files, and different systems. The
                Student Info Portal solves this by providing a simple, unified platform
                that makes data accessible and easy to navigate.
            </p>

            <h4 className="text-secondary mt-4">🚀 What This App Offers</h4>
            <ul className="list-group mb-3">
                <li className="list-group-item">
                    View complete student details in one place
                </li>
                <li className="list-group-item">
                    Individual academic performance tracking (marks & attendance)
                </li>
                <li className="list-group-item">
                    Organized routing system for seamless navigation
                </li>
                <li className="list-group-item">
                    Clean and responsive interface built with Bootstrap
                </li>
            </ul>

            <h4 className="text-secondary mt-4">🛠️ Technologies Behind the Portal</h4>
            <ul className="list-group mb-3">
                <li className="list-group-item">React — Component-based UI</li>
                <li className="list-group-item">
                    React Router DOM v7 — Dynamic & nested routing
                </li>
                <li className="list-group-item">
                    Bootstrap 5 — Responsive UI design
                </li>
            </ul>

            <h4 className="text-secondary mt-4">🏫 Who Uses This Portal?</h4>
            <p>
                Although this is a demonstration project, a similar structure can be
                used by:
            </p>

            <ul className="list-group mb-3">
                <li className="list-group-item">College faculty for managing records</li>
                <li className="list-group-item">Students to check academic progress</li>
                <li className="list-group-item">Departments for verifying details</li>
            </ul>

            <div className="alert alert-info mt-4">This project is designed as a hands-on learning experience to
                understand real-world routing, component reuse, and structured UI
                development in React.
            </div>
        </div>
    );
};

export default About;
