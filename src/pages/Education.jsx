import React, { useState } from 'react';
import './Education.css';
import university from '../assets/university1.svg';

function Education() {
    return (
        <div>
             <div className="intro">
                <h>University of Bath</h>
                <p>Computer Science & Artificial Intelligence BSc (2022 - 2026) </p>
                <p> First Year: 64 %    </p>
                <p> Second Year: 67 % </p>
                <p> Third Year: Software Engineering Year Long Placement at IBM UK </p>
                <p> Fourth Year:  - </p>
                <p> Notable Achievements: - </p>
                <img src={university} alt="Profile" className="pic" />
             </div>
        </div>
    );
}

export default Education;
