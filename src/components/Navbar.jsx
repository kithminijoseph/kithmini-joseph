
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/projects">projects</Link>
        <Link to="/education">education</Link>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'dark mode' : 'light mode'}
      </button>
    </nav>
  );
}

export default Navbar;
