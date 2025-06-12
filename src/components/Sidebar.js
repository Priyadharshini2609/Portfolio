import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>My Portfolio</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
