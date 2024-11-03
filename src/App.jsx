
import React, { useEffect, useState } from 'react';
import ParticlesBg from 'particles-bg';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <Routes>
      <div className="background-layer" />
        <ParticlesBg color={["#ff0000", "#ff6347", "#ff7f50", "#ffa07a", "#ffd700"]} num={10} type="circle" bg={true} />
        <Navbar setTheme={setTheme} theme={theme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
      </div>
      </Routes>
    </Router>
  );
}

export default App;
