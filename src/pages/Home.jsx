import React from 'react';
import './Home.css';
import profilePic from '../assets/kithmini.jpg';
import ColourButton from '../components/ColourButton';

function Home() {
    return (
        <div className="intro">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="intro2">
                <h2>Kithmini Joseph</h2>
                <h3 className="intro3"> software developer | computer science & AI student</h3>
                <ColourButton />
            </div>
        </div>
    );
}

export default Home;
