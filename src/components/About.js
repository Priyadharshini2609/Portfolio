import React, { useState, useEffect } from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';

function About() {
  const [activeSection, setActiveSection] = useState('intro');
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Code Artist'];
  
  useEffect(() => {
    const typeWriter = () => {
      const currentWord = roles[currentWordIndex];
      const currentLength = typedText.length;
      
      if (currentLength < currentWord.length) {
        setTypedText(currentWord.slice(0, currentLength + 1));
      } else {
        setTimeout(() => {
          setTypedText('');
          setCurrentWordIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeWriter, 150);
    return () => clearTimeout(timer);
  }, [typedText, currentWordIndex, roles]);

  const skills = [
    { name: 'Frontend Development', level: 90, icon: '🎨' },
    { name: 'Backend Development', level: 85, icon: '⚙️' },
    { name: 'Database Design', level: 80, icon: '🗄️' },
    { name: 'Problem Solving', level: 95, icon: '🧩' },
    { name: 'Team Collaboration', level: 88, icon: '🤝' },
    { name: 'Learning Agility', level: 92, icon: '📚' }
  ];

  const achievements = [
    { number: '15+', label: 'Projects Completed', icon: '🚀' },
    { number: '8+', label: 'Certifications', icon: '🏆' },
    { number: '2+', label: 'Years Learning', icon: '📅' },
    { number: '100%', label: 'Dedication', icon: '💯' }
  ];

  const interests = [
    { title: 'Web Development', desc: 'Creating responsive and interactive web applications', icon: '💻' },
    { title: 'UI/UX Design', desc: 'Designing intuitive and beautiful user interfaces', icon: '🎯' },
    { title: 'Problem Solving', desc: 'Tackling complex challenges with creative solutions', icon: '🧠' },
    { title: 'Continuous Learning', desc: 'Always exploring new technologies and frameworks', icon: '🌱' }
  ];

  const personalTraits = [
    { trait: 'Creative', icon: '🎨' },
    { trait: 'Analytical', icon: '🔍' },
    { trait: 'Collaborative', icon: '🤝' },
    { trait: 'Innovative', icon: '💡' },
    { trait: 'Persistent', icon: '🎯' },
    { trait: 'Adaptable', icon: '🔄' }
  ];

  return (
    <div className="about-container">
      {/* Background Elements */}
      <div className="about-background">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
      </div>

      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <div className="profile-ring">
                <img src={profileImg} alt="Priyadharshini" className="profile-image" />
              </div>
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
            
            <div className="hero-text">
              <h1 className="hero-title">
                Hello! I'm <span className="name-highlight">Priyadharshini</span> 👋
              </h1>
              <div className="role-container">
                <span className="role-prefix">I'm a </span>
                <span className="typed-role">{typedText}</span>
                <span className="cursor">|</span>
              </div>
              <p className="hero-description">
                Passionate about creating exceptional digital experiences through clean code, 
                innovative solutions, and user-centered design. I transform ideas into reality 
                with modern web technologies.
              </p>
              
              <div className="hero-buttons">
                <button className="cta-button primary" onClick={() => setActiveSection('skills')}>
                  <span>🚀</span>
                  Explore My Skills
                </button>
                <button className="cta-button secondary" onClick={() => setActiveSection('journey')}>
                  <span>📖</span>
                  My Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="about-navigation">
        {[
          { id: 'intro', label: 'Introduction', icon: '👋' },
          { id: 'skills', label: 'Skills', icon: '⚡' },
          { id: 'achievements', label: 'Achievements', icon: '🏆' },
          { id: 'interests', label: 'Interests', icon: '❤️' },
          { id: 'journey', label: 'My Journey', icon: '🛤️' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${activeSection === tab.id ? 'active' : ''}`}
            onClick={() => setActiveSection(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="about-content">
        {/* Introduction Section */}
        {activeSection === 'intro' && (
          <div className="content-section intro-section">
            <h2 className="section-title">About Me</h2>
            <div className="intro-grid">
              <div className="intro-text">
                <div className="text-block">
                  <h3>🎯 My Mission</h3>
                  <p>
                    I'm dedicated to creating clean, interactive, and modern web applications 
                    that deliver exceptional user experiences. My goal is to bridge the gap 
                    between beautiful design and powerful functionality.
                  </p>
                </div>
                
                <div className="text-block">
                  <h3>💡 What Drives Me</h3>
                  <p>
                    I'm passionate about solving complex problems through code, learning 
                    cutting-edge technologies, and building applications that make a real 
                    difference in people's lives. Every project is an opportunity to grow and innovate.
                  </p>
                </div>
                
                <div className="text-block">
                  <h3>🌟 My Approach</h3>
                  <p>
                    I believe in writing clean, maintainable code, following best practices, 
                    and continuously improving my skills. Collaboration, creativity, and 
                    attention to detail are at the core of everything I do.
                  </p>
                </div>
              </div>
              
              <div className="traits-grid">
                <h3>Personal Traits</h3>
                <div className="traits-container">
                  {personalTraits.map((trait, index) => (
                    <div key={index} className="trait-item" style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="trait-icon">{trait.icon}</span>
                      <span className="trait-name">{trait.trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="content-section skills-section">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <div className="content-section achievements-section">
            <h2 className="section-title">Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interests Section */}
        {activeSection === 'interests' && (
          <div className="content-section interests-section">
            <h2 className="section-title">What I Love</h2>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div key={index} className="interest-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="interest-icon">{interest.icon}</div>
                  <h3 className="interest-title">{interest.title}</h3>
                  <p className="interest-description">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Journey Section */}
        {activeSection === 'journey' && (
          <div className="content-section journey-section">
            <h2 className="section-title">My Journey</h2>
            <div className="journey-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">🌱</div>
                <div className="timeline-content">
                  <h3>The Beginning</h3>
                  <p>Started my journey into web development with curiosity and determination to create amazing digital experiences.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">📚</div>
                <div className="timeline-content">
                  <h3>Learning & Growing</h3>
                  <p>Immersed myself in learning various technologies, frameworks, and best practices through courses, projects, and hands-on experience.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">🚀</div>
                <div className="timeline-content">
                  <h3>Building & Creating</h3>
                  <p>Started building real-world projects, applying my skills to create functional and beautiful web applications.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">🎯</div>
                <div className="timeline-content">
                  <h3>Present & Future</h3>
                  <p>Continuously evolving, learning new technologies, and working on exciting projects while seeking new opportunities to make an impact.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;