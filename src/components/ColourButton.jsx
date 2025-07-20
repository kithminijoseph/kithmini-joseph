import React, { useState, useEffect } from 'react';

const ColorTextButton = () => {
  const texts = ["python", "java", "c++", "sql", "groovy", "css", "html", "kubernetes", "ansible", "GCP", "pandas"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <button
      className="color-text-button bg-black text-white p-5 font-mono text-base rounded-full cursor-pointer transition-colors duration-300 ease-in-out"
      style={{
        backgroundColor: "#000000",
      }}
    >
      {texts[index]}
    </button>
  );
};

export default ColorTextButton;
