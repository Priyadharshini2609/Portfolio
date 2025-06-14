import React from 'react';
import './Certifications.css';

function Certifications() {
  const certs = [
    {
      title: "Basics of HTML,CSS",
      issuer: "OpenWeaver",
      date: "3 May 2023",
      desc: "Completed a comprehensive course on HTML,CSS from OpenWeaver."
    },
    {
      title: "Probability for Datascience",
      issuer: "Great Learning",
      date: "5 April 2023",
      desc: "Enhanced probability of data science concepts."
    },
    {
      title: "Advanced python",
      issuer: "Simplilearn",
      date: "19 Feburary 2025",
      desc: "Covered advanced Python concepts."
    },
    {
      title: "Frontend Development ",
      issuer: "Simplilearn",
      date: "23 January 2025",
      desc: "finished front-end development course."
    },
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
