import React from 'react';
import './Home.css';
import profileImg from '../assets/profile.jpg'; // Ensure this image is in src/assets/

function Home() {
  return (
    <div className="home-container">
      <img src={profileImg} alt="Profile" className="home-profile" />

      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Priyadharshini</span></h1>
        <p className="home-tagline">A Passionate Full Stack Developer</p>
        <p className="home-intro">
          Welcome to my personal portfolio! Explore my journey, projects, and skills in software development.
        </p>
      </div>
    </div>
  );
}

export default Home;
