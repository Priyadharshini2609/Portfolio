import React from 'react';
import './Home.css';
import profileImg from '../assets/profile.jpg'; // Ensure this image is in src/assets/

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="profile-frame">
            <div className="profile-ring">
              <img src={profileImg} alt="Profile" className="home-profile" />
            </div>
          </div>

          <div className="intro-card">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Priyadharshini</span>
            </h1>
            <p className="hero-tagline">Full Stack Developer & UI/UX Enthusiast</p>
            <p className="hero-description">
              Crafting digital experiences with modern technologies and creative solutions
            </p>
            
            <div className="cta-buttons">
              <button className="btn-primary">View My Work</button>
              <button className="btn-secondary">Get In Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="skills-preview">
        <h2 className="section-title">What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>Frontend Development</h3>
            <p>Creating responsive and interactive user interfaces</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend Development</h3>
            <p>Building robust server-side applications and APIs</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Developing cross-platform mobile applications</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>Deploying and managing applications in the cloud</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
