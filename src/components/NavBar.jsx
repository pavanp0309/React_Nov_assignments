import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
            <NavLink className="navbar-brand" to="/">Student Portal</NavLink>

            <div className="collapse navbar-collapse show">
                <ul className="navbar-nav mx-auto">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/students">Students</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
