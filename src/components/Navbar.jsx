import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/Home">home</Link>
                <Link to="/projects">projects</Link>
                <Link to="/education">education</Link>
            </div>
        </nav>
    );
}

export default Navbar;
