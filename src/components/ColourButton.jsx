import React, { useState, useEffect } from 'react';
import './ColourButton.css'; 

const ColorTextButton = () => {
  const texts = ["python", "java", "c++", "sql", "groovy"];
  const colors = ["#000000"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <button
      className="color-text-button"
      style={{
        backgroundColor: colors,
      }}
    >
      {texts[index]}
    </button>
  );
};

export default ColorTextButton;
