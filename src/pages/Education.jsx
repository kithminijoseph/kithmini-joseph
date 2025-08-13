import React, { useEffect, useState } from 'react';
import university from '../assets/university1.svg';

function Education() {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">University of Bath</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1 space-y-2 text-gray-700">
            <p className="font-medium">Computer Science & Artificial Intelligence BSc (2022 - 2026)</p>
            <p>First Year: <span className="font-semibold">64%</span></p>
            <p>Second Year: <span className="font-semibold">67%</span></p>
            <p>Third Year: Software Engineering Year Long Placement at IBM UK</p>
            <p>Fourth Year: -</p>
            <p>Notable Achievements: -</p>
          </div>
          <div
            className={`transition-all duration-700 ease-out transform ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <img
              src={university}
              alt="University"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
