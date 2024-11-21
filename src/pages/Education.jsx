import React from 'react';
import './Education.css';
import university from '../assets/university.svg';

function Education() {
    return (
        <div>
             <div className="intro">
                <h>University of Bath</h>
                <p>Computer Science & Artificial Intelligence BSc (2022 - 2026) </p>
                <p1> First Year: {"\n"} 64 %  </p1>
                <p2> Second Year: {"\n"} 67 % </p2>
                <p3> Third Year: {"\n"} Software Engineering Year Long Placement at IBM UK </p3>
                <p4> Fourth Year: {"\n"} Software Engineering Year Long Placement at IBM UK </p4>
                <img src={university} alt="Profile" className="pic" />
             </div>
        </div>
    );
}

export default Education;
