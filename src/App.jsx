// src/App.jsx
import React from 'react';
import ParticlesBg from 'particles-bg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import './App.css';

function App() {
  return (
    <Router>
      <ParticlesBg color={["#ff0000", "#ff6347", "#ff7f50", "#ffa07a", "#ffd700"]} num={200} type="circle" bg={true} />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
