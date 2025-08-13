import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const fullText = `Hi! I'm Kithmini!
I'm a Computer Science and Artificial Intelligence student at the University of Bath with industry experience at IBM and Infosys. I thrive on solving challenging problems, learning and experimenting with new technologies and creatively solving real-world problems through innovative projects.

My technical background spans full stack software engineering, DevOps and machine learning, so whether it’s automating infrastructure or fine-tuning models, I’m always keen to challenge myself and learn new things.

Outside the typical tech sphere, I love blending creativity with technical skill, I’m passionate about creative pursuits like video editing, 3D modelling, baking and photography.`;

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-variable shadow-lg rounded-2xl p-6 max-w-3xl font-mono whitespace-pre-wrap border border-gray-300">
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
}

export default About;
