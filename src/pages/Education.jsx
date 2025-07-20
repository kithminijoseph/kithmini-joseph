import React, { useState } from 'react';
import './Education.css';
import university from '../assets/university1.svg';

function Education() {
    return (
        <div>
             <div className="intro">
                <h>University of Bath</h>
                <p>Computer Science & Artificial Intelligence BSc (2022 - 2026) </p>
                <p1> First Year: 64 %    </p1>
                <p2> Second Year: 67 % </p2>
                <p3> Third Year: Software Engineering Year Long Placement at IBM UK </p3>
                <p4> Fourth Year:  - </p4>
                <p5> Notable Achievements: - </p5>
                <img src={university} alt="Profile" className="pic" />
             </div>
        </div>
    );
}

export default Education;
