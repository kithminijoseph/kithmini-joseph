import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: "AI Image Scanning Recycling App",
    description:(
        <div>
          <p>Image scanning model base trained on a ResNet18 architecture utilising open recycling datasets.</p>
          <p>Frontend created using Expo and React Native, storing user data in SQLite3 databases.</p>
          <p>App compliant with Bath Council Recycling guidelines.</p>
          <a href="https://github.com/SamB032/CM20314-ESP-Recycling-Backend" target="_blank" rel="noopener noreferrer">GitHub - private repository</a>
        </div>
      ),
    videoUrl: "src/assets/recyclingproject.mp4",
    thumbnail: "src/assets/recycling.png",
  },
  {
    title: "Project Two",
    description: "An innovative solution for everyday problems.",
    videoUrl: "https://path-to-your-video2.mp4",
    thumbnail: "https://path-to-thumbnail2.jpg",
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
              <video
                src={project.videoUrl}
                controls
                autoPlay
                onEnded={() => setPlayingIndex(null)} 
                className="project-video"
              />
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumbnail"
              />
            )}
          </div>
          <div className="project-details">
            <p3>{project.title}</p3>
            <p>{project.description}</p>
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
