import React, { useState, useEffect, useRef } from 'react';
import thumbnailImage from '../assets/recycling.png';
import thumbnailImage2 from '../assets/arduino.png';
import thumbnailImage3 from '../assets/levelgame.png';
import thumbnailImage4 from '../assets/3dmodel.png';
import './Projects.css';


const projectData = [
  {
    title: "AI Image Scanning Recycling App",
    description: (
      <>
        <p>Image scanning model base trained on a ResNet18 architecture utilizing open recycling datasets.</p>
        <p>Frontend created using Expo and React Native, storing user data in SQLite3 databases.</p>
        <p>App compliant with Bath Council Recycling guidelines.</p>
        <a href="https://github.com/SamB032/CM20314-ESP-Recycling-Backend" target="_blank" rel="noopener noreferrer">GitHub - private repository</a>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/z94_ha8EhuA?si=jxGDkuRTUeiQhm3w",
    videoType: "youtube",
    thumbnail: thumbnailImage,
  },
  {
    title: "Arduino Motion-Controlled Travelling Bot",
    description: (
      <>
        <p>Arduino-powered bot mounted on a four-wheel DC chassis and equipped with a Grove ultrasonic sensor on an extended servo arm.</p>
        <p>The bot moves forward, left, and right using joystick controls, with built-in safety features to prevent the lid from opening while in motion.</p>
        <p>Prototype to assist elderly individuals with heavy loads, the bot is especially useful in grocery stores.</p>
        <p>Programmed in C++</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/FqdazyOi25g?si=5apmjOwW5UveZSTu",
    videoType: "youtube",
    thumbnail: thumbnailImage2,
  },
  {
    title: "Mini Platformer Game",
    description: (
      <>
        <p>A 2D platformer game built using Python and PyGame.</p>
        <p>Rewards: Collect strawberries and raspberries to boost your score.</p>
        <p>Threats: Dodge obstacles like lava pools and avoid enemy ninja frogs to survive.</p>
        <p>Levels & Challenges: Each level increases in difficulty, introducing new threats and rewards.</p>
        <p>This game demonstrates basic game physics, sprite animations, and collision detection.</p>
        <a href="https://github.com/kithminijoseph/levelgame" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
    videoUrl: "https://youtube.com/embed/HqTrC67U1Z8?si=yo-OjB5cfX9XSgem",
    videoType: "youtube",
    thumbnail: thumbnailImage3,
  },
  {
    title: "3D Modelling Fabric Simulation",
    description: (
      <>
        <p>3D modelling on Blender graphics software to simulate dynamic fabric movement</p>
        <p>Developing 2D mesh systems and controlling spring tensions.</p>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/Uu4orl8AH10?si=PaZ692U5UxY2oyDm",
    videoType: "youtube",
    thumbnail: thumbnailImage4,
  },
];

const Projects = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const carouselRef = useRef(null);

  // Optional auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePlay = (index) => setPlayingIndex(index);

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scroll-smooth" ref={carouselRef}>
      <div className="inline-flex gap-6 px-6 py-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-sm shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>"
              {playingIndex === index ? (
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                  onClick={() => handlePlay(index)}
                />
              )}
            </div>

            <div className="p-4 text-left font-mono">
              <p className="text-xl italic text-center overline mb-2">{project.title}</p>
              <div className="text-sm space-y-1">{project.description}</div>
              {playingIndex !== index && (
                <button
                  onClick={() => handlePlay(index)}
                  className="btn-variable mt-3"
                  >
                  ▶ Play Video
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
