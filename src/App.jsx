import { useEffect, useState } from 'react';
import ParticlesBg from 'particles-bg';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <ParticlesBg
        color={["#0ea5e9", "#38bdf8", "#60a5fa", "#3b82f6", "#2563eb"]}
        num={10}
        type="circle"
        bg={true}
      />
      <Navbar setTheme={setTheme} theme={theme} />
      <Home />
    </div>
  );
}

export default App;
