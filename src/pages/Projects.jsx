import React, { useState } from 'react';
import './Projects.css';
import thumbnailImage from '../assets/recycling.png';
import thumbnailImage2 from '../assets/arduino.png';
import thumbnailImage3 from '../assets/levelgame.png';
import thumbnailImage4 from '../assets/3dmodel.png';

const projectData = [
  {
    title: "AI Image Scanning Recycling App",
    description: (
      <div>
        <p>Image scanning model base trained on a ResNet18 architecture utilizing open recycling datasets.</p>
        <p>Frontend created using Expo and React Native, storing user data in SQLite3 databases.</p>
        <p>App compliant with Bath Council Recycling guidelines.</p>
        <a href="https://github.com/SamB032/CM20314-ESP-Recycling-Backend" target="_blank" rel="noopener noreferrer">GitHub - private repository</a>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/z94_ha8EhuA?si=jxGDkuRTUeiQhm3w",
    videoType: "youtube",
    thumbnail: thumbnailImage,
  },
  {
    title: "Arduino Motion-Controlled Travelling Bot",
    description: (
      <div>
        <p>Arduino-powered bot mounted on a four-wheel DC chassis and equipped with a Grove ultrasonic sensor on an extended servo arm.</p>
        <p>The bot moves forward, left, and right using joystick controls, with built-in safety features to prevent the lid from opening while in motion.</p>
        <p>Prototype to assist elderly individuals with heavy loads, the bot is especially useful in grocery stores.</p>
        <p>Programmed in C++</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/FqdazyOi25g?si=5apmjOwW5UveZSTu",
    videoType: "youtube",
    thumbnail: thumbnailImage2,
  },
  {
    title: "Mini Platformer Game",
    description: (
      <div>
        <p>3D modelling on Blender graphics software to simulate dynamic fabric movement</p>
        <p>Rewards: Collect strawberries and raspberries to boost your score.</p>
        <p>Threats: Dodge obstacles like lava pools and avoid enemy ninja frogs to survive.</p>
        <p>Levels & Challenges: Each level increases in difficulty, introducing new threats and rewards.</p>
        <p>This game demonstrates basic game physics, sprite animations, and collision detection.</p>
        <a href="https://github.com/kithminijoseph/levelgame" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    ),
    videoUrl: "https://youtube.com/embed/HqTrC67U1Z8?si=yo-OjB5cfX9XSgem",
    videoType: "youtube",
    thumbnail: thumbnailImage3,
  },
  {
    title: "3D Modelling Fabric Simulation",
    description: (
      <div>
        <p>A 2D platformer game built using Python and PyGame.</p>
        <p>Developing 2D mesh systems and controlling spring tensions.</p>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/Uu4orl8AH10?si=PaZ692U5UxY2oyDm",
    videoType: "youtube",
    thumbnail: thumbnailImage4,
  },
];

const Projects = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          <div className="video-container">
            {playingIndex === index ? (
              project.videoType === "local" ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  onEnded={() => setPlayingIndex(null)}
                  className="project-video"
                />
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src={project.videoUrl}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="project-video"
                />
              )
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumbnail"
                onClick={() => handlePlay(index)}
              />
            )}
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <div>{project.description}</div>
            {playingIndex !== index && (
              <button onClick={() => handlePlay(index)} className="play-button">
                ▶ Play Video
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
