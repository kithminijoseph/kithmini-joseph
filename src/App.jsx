// src/App.jsx
import React from 'react';
import ParticlesBg from 'particles-bg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

<ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />

class Example extends Component {
  render () {
    return (
      <>
        <div>...</div>
        <ParticlesBg type="circle" bg={true} />
      </>
    )
  }
}