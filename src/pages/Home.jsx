import React, { useState, useEffect } from "react";
import profilePic from '../assets/kithmini.jpg';
import ColourButton from '../components/ColourButton';
import Projects from './Projects.jsx';
import Experience from './Education.jsx';
import About from './About.jsx';


function Home() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24">
        <img
          src={profilePic}
          alt="Profile"
          className="w-20 h-20 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
        />
        <p
          key={animationKey}
          className="typewriter text-3xl md:text-5xl lg:text-6xl font-montserrat font-thin border-r-4 border-white whitespace-nowrap overflow-hidden w-[20ch] mt-6"
        >
          Hello, I'm Kithmini
        </p>
        <p className="text-base md:text-lg font-serif font-medium italic mb-4 mt-4 text-center">
          software developer | computer science & AI student
        </p>
        <ColourButton />
      </section>


      <section id="about" className="min-h-screen flex items-center justify-center px-4 bg-transparent">
        <div className="max-w-4xl mx-auto w-full">
          <About />
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 bg-transparent">
        <div className="max-w-4xl mx-auto w-full">
          <Projects />
        </div>
      </section>

      <section id="education" className="min-h-screen flex items-center justify-center px-4 bg-transparent">
        <div className="max-w-4xl mx-auto w-full">
          <Experience />
        </div>
      </section>
    </>
  );
}

export default Home;
