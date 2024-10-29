import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="links">
                <Link to="/Home">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/education">Education</Link>
            </div>
        </nav>
    );
}

export default Navbar;
