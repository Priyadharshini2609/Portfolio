import React from 'react';
import '../pages/Biography.css';
import profileImg from '../assets/profile.jpg'; // Make sure this image exists
import 'animate.css';

function Biography() {
  return (
    <div className="biography-container animate__animated animate__fadeIn">
      <img src={profileImg} alt="Profile" className="bio-profile-pic" />
      
      <h1 className="bio-title">Hi, I'm Priyadharshini</h1>
      
      <p className="bio-description">
        I'm a passionate Fullstack Developer with experience in both frontend and backend development.
        I love building clean, interactive, and responsive websites using React and Java Spring Boot.
      </p>

      <div className="bio-section">
        <h2>🎓 Education</h2>
        <ul>
          <li>B.E.CSE - [St.joseph college of engineering]</li>
          <li>CGPA :8.272</li>
          <li>HSC - [St.Annes girls higher secondary school]</li>
          <li>percentage:96.5</li>
          <li>SSLC - [St.Annes girls higher secondary school]</li>
          <li>percentage:80.5</li>
        </ul>
      </div>

      <div className="bio-section">
        <h2>🛠️ Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML5 & CSS3</li>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
        </ul>
      </div>

      <div className="bio-section">
        <h2>💡 Interests</h2>
        <p>
          I'm interested in UI/UX design, performance optimization, and creating helpful tools for students and developers.
        </p>
      </div>
    </div>
  );
}

export default Biography;
