import React from 'react';
import './Home.css';
import profilePic from '../assets/kithmini.jpg';

function Home() {
    return (
        <div className="intro">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <h2>Kithmini</h2>
            <div className="intro2">
                <h2>Joseph</h2>
                <a></a>
            </div>
        </div>
    );
}

export default Home;
