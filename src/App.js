import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './components/About';
import Biography from './pages/Biography';
import Projects from './components/Projects';
import Certifications from './pages/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './components/Home.css'; // remove this line if not using it


import './App.css';
import './components/Projects.css';
import './components/Sidebar.css';
import './components/About.css';
import './components/Contact.css';
import './components/Home.css';
import './components/Certifications.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
