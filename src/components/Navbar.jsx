import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-[var(--background-color)] bg-opacity-90 shadow-md">
      <div className="links flex gap-6 font-light text-lg">
        <ScrollLink to="home" smooth={true} duration={500} offset={-70} className="cursor-pointer">home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer">about me</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="cursor-pointer">projects</ScrollLink>
        <ScrollLink to="education" smooth={true} duration={500} offset={-70} className="cursor-pointer">experience</ScrollLink>
      </div>
      <button onClick={toggleTheme} className="theme-toggle font-light text-sm">
        {theme === 'light' ? 'dark mode' : 'light mode'}
      </button>
    </nav>
  );
}

export default Navbar;
