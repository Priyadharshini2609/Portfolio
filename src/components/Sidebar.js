import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaInfoCircle,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope
} from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">My Portfolio</h2>
      <ul className="sidebar-links">
        <li>
          <NavLink exact="true" to="/" activeclassname="active">
            <FaHome className="icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            <FaUser className="icon" /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/biography" activeclassname="active">
            <FaInfoCircle className="icon" /> Biography
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeclassname="active">
            <FaProjectDiagram className="icon" /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/certifications" activeclassname="active">
            <FaCertificate className="icon" /> Certifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            <FaEnvelope className="icon" /> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
