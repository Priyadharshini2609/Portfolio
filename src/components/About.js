import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg'; // Make sure the path is correct
import 'animate.css';

function About() {
  return (
    <div className="about-container animate__animated animate__fadeIn">
      <div className="about-card">
        <img src={profileImg} alt="Priyadharshini" className="about-img" />
        <div className="about-content">
          <h1>Hello! I'm Priyadharshini 👋</h1>
          <p>
            I’m a dedicated and passionate Fullstack Developer skilled in both frontend and backend technologies.
            My mission is to create clean, interactive, and modern websites that offer great user experiences.
          </p>
          
          <p>
            I enjoy solving problems, learning new technologies, and building real-time applications that can help
            users and organizations. I believe in writing clean, maintainable code and continuously improving my skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
