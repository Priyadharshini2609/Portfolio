import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Online Portfolio</h3>
        <p>This project is a personal portfolio website built using React. It includes routing, sidebar navigation, and responsive design.</p>
        <p><strong>Tech Used:</strong> React, CSS</p>
      </div>

      <div className="project-card">
        <h3>E-commerce App</h3>
        <p>A full-stack e-commerce application with features like product listing, cart, and order management. Backend built using Spring Boot.</p>
        <p><strong>Tech Used:</strong> React, Java, Spring Boot</p>
      </div>

      <div className="project-card">
        <h3>Student Result Management System</h3>
        <p>Enables students to view their results and notifications in real-time. Includes a user-friendly interface and secure backend.</p>
        <p><strong>Tech Used:</strong> React, Spring Boot, MySQL</p>
      </div>
    </div>
  );
}

export default Projects;
