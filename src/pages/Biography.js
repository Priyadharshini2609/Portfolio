import React, { useState, useEffect } from 'react';
import '../pages/Biography.css';
import profileImg from '../assets/profile.jpg'; // Make sure this image exists

function Biography() {
  const [activeSection, setActiveSection] = useState('about');
  const [skillProgress, setSkillProgress] = useState({});

  const skills = [
    { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
    { name: 'JavaScript', level: 85, category: 'Frontend', icon: '🟨' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend', icon: '🎨' },
    { name: 'Java', level: 80, category: 'Backend', icon: '☕' },
    { name: 'Python', level: 75, category: 'Backend', icon: '🐍' },
    { name: 'Spring Boot', level: 70, category: 'Backend', icon: '🍃' },
    { name: 'MySQL', level: 85, category: 'Database', icon: '🗄️' },
    { name: 'MongoDB', level: 75, category: 'Database', icon: '🍃' },
    { name: 'Git', level: 80, category: 'Tools', icon: '📚' },
    { name: 'VS Code', level: 90, category: 'Tools', icon: '💻' }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering - Computer Science',
      institution: 'St. Joseph College of Engineering',
      year: '2022 - 2026',
      grade: 'CGPA: 8.272',
      icon: '🎓',
      description: 'Specialized in software development, data structures, and algorithms'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'St. Annes Girls Higher Secondary School',
      year: '2020 - 2022',
      grade: 'Percentage: 96.5%',
      icon: '📚',
      description: 'Focused on Mathematics, Physics, and Computer Science'
    },
    {
      degree: 'Secondary School Leaving Certificate',
      institution: 'St. Annes Girls Higher Secondary School',
      year: '2019 - 2020',
      grade: 'Percentage: 80.5%',
      icon: '🏫',
      description: 'Strong foundation in core subjects'
    }
  ];

  const interests = [
    { name: 'UI/UX Design', icon: '🎨', description: 'Creating beautiful and intuitive user interfaces' },
    { name: 'Web Development', icon: '💻', description: 'Building modern, responsive web applications' },
    { name: 'Performance Optimization', icon: '⚡', description: 'Making applications faster and more efficient' },
    { name: 'Open Source', icon: '🌟', description: 'Contributing to community projects' },
    { name: 'Learning New Tech', icon: '📖', description: 'Always exploring emerging technologies' },
    { name: 'Problem Solving', icon: '🧩', description: 'Tackling complex coding challenges' }
  ];

  const achievements = [
    { title: 'Full Stack Projects', count: '15+', icon: '🚀' },
    { title: 'Technologies Mastered', count: '10+', icon: '💡' },
    { title: 'Years of Learning', count: '3+', icon: '📈' },
    { title: 'Certifications', count: '8+', icon: '🏆' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const progress = {};
      skills.forEach(skill => {
        progress[skill.name] = skill.level;
      });
      setSkillProgress(progress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'about', name: 'About Me', icon: '👋' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'skills', name: 'Skills', icon: '🛠️' },
    { id: 'interests', name: 'Interests', icon: '💡' }
  ];

  return (
    <div className="biography-container">
      {/* Background Elements */}
      <div className="bio-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Header Section */}
      <div className="bio-header">
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-ring">
              <img src={profileImg} alt="Priyadharshini" className="bio-profile-pic" />
            </div>
            <div className="profile-status">
              <span className="status-dot"></span>
              Available for opportunities
            </div>
          </div>
          
          <div className="profile-info">
            <h1 className="bio-name">
              Hi, I'm <span className="highlight">Priyadharshini</span>
            </h1>
            <p className="bio-title-text">Full Stack Developer & Problem Solver</p>
            <p className="bio-description">
              Passionate about creating innovative web solutions that blend creativity with functionality. 
              I specialize in building scalable applications using modern technologies and best practices.
            </p>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-count">{achievement.count}</div>
                  <div className="achievement-title">{achievement.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bio-navigation">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="tab-icon">{section.icon}</span>
            {section.name}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="bio-content">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="content-section about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a dedicated Full Stack Developer with a passion for creating digital experiences 
                  that make a difference. My journey in technology started with curiosity and has evolved 
                  into a deep commitment to building innovative solutions.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying updated with the latest 
                  industry trends. My approach combines technical expertise with creative problem-solving 
                  to deliver exceptional results.
                </p>
                <div className="personal-traits">
                  <div className="trait-item">
                    <span className="trait-icon">🎯</span>
                    <span>Goal-Oriented</span>
                  </div>
                  <div className="trait-item">
                    <span className="trait-icon">🤝</span>
                    <span>Team Player</span>
                  </div>
                  <div className="trait-item">
                    <span className="trait-icon">💡</span>
                    <span>Creative Thinker</span>
                  </div>
                  <div className="trait-item">
                    <span className="trait-icon">📚</span>
                    <span>Continuous Learner</span>
                  </div>
                </div>
              </div>
              <div className="about-visual">
                <div className="coding-animation">
                  <div className="code-line"></div>
                  <div className="code-line short"></div>
                  <div className="code-line"></div>
                  <div className="code-line medium"></div>
                  <div className="code-line"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="content-section education-section">
            <h2 className="section-title">Educational Journey</h2>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon">{edu.icon}</div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{edu.degree}</h3>
                      <span className="timeline-year">{edu.year}</span>
                    </div>
                    <h4>{edu.institution}</h4>
                    <div className="grade-badge">{edu.grade}</div>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="content-section skills-section">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-categories">
              {['Frontend', 'Backend', 'Database', 'Tools'].map(category => (
                <div key={category} className="skill-category">
                  <h3 className="category-title">{category}</h3>
                  <div className="skills-grid">
                    {skills.filter(skill => skill.category === category).map((skill, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <div className="skill-progress">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill"
                              style={{ 
                                width: `${skillProgress[skill.name] || 0}%`,
                                transition: 'width 1.5s ease-in-out'
                              }}
                            ></div>
                          </div>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interests Section */}
        {activeSection === 'interests' && (
          <div className="content-section interests-section">
            <h2 className="section-title">What Drives Me</h2>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div key={index} className="interest-card">
                  <div className="interest-icon">{interest.icon}</div>
                  <h3>{interest.name}</h3>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
            
            <div className="passion-statement">
              <h3>My Passion</h3>
              <p>
                I'm driven by the endless possibilities that technology offers. Every line of code 
                is an opportunity to solve problems, create value, and make a positive impact. 
                I believe in the power of continuous learning and collaboration to push the 
                boundaries of what's possible in web development.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Biography;
