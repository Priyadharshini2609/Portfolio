import React from 'react';
import './Certifications.css';

function Certifications() {
  const certs = [
    {
      title: "React Developer Certificate",
      issuer: "Coursera",
      date: "March 2025",
      desc: "Completed a comprehensive course on React.js including hooks, routing, and state management."
    },
    {
      title: "Java Full Stack Development",
      issuer: "Great Learning",
      date: "January 2025",
      desc: "Built full-stack apps using Java, Spring Boot, and MySQL with REST APIs."
    },
    {
      title: "Frontend Development Bootcamp",
      issuer: "Udemy",
      date: "November 2024",
      desc: "Covered HTML, CSS, JavaScript and responsive web design."
    }
  ];

  return (
    <div className="certifications-container">
      <h1 className="certifications-title">My Certifications</h1>
      <div className="certifications-list">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h2>{cert.title}</h2>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <p>{cert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
