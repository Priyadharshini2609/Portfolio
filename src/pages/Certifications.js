import React, { useState } from 'react';
import './Certifications.css';

function Certifications() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const certifications = [
    {
      id: 1,
      title: "Basics of HTML & CSS",
      issuer: "OpenWeaver",
      date: "May 3, 2023",
      description: "Completed a comprehensive course covering HTML5 semantic elements, CSS3 styling, responsive design principles, and modern web development practices.",
      category: "Frontend",
      level: "Beginner",
      skills: ["HTML5", "CSS3", "Responsive Design", "Web Standards"],
      icon: "🎨",
      color: "#e74c3c",
      credentialId: "OW-HTML-CSS-2023",
      verifyLink: "#"
    },
    {
      id: 2,
      title: "Probability for Data Science",
      issuer: "Great Learning",
      date: "April 5, 2023",
      description: "Enhanced understanding of probability theory, statistical distributions, Bayes' theorem, and their applications in data science and machine learning.",
      category: "Data Science",
      level: "Intermediate",
      skills: ["Statistics", "Probability Theory", "Data Analysis", "Machine Learning"],
      icon: "📊",
      color: "#3498db",
      credentialId: "GL-PROB-DS-2023",
      verifyLink: "#"
    },
    {
      id: 3,
      title: "Advanced Python Programming",
      issuer: "Simplilearn",
      date: "February 19, 2025",
      description: "Mastered advanced Python concepts including object-oriented programming, decorators, generators, context managers, and advanced data structures.",
      category: "Programming",
      level: "Advanced",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"],
      icon: "🐍",
      color: "#f39c12",
      credentialId: "SL-ADV-PY-2025",
      verifyLink: "#"
    },
    {
      id: 4,
      title: "Frontend Development Mastery",
      issuer: "Simplilearn",
      date: "January 23, 2025",
      description: "Comprehensive frontend development course covering React.js, modern JavaScript ES6+, state management, and building responsive web applications.",
      category: "Frontend",
      level: "Advanced",
      skills: ["React.js", "JavaScript ES6+", "State Management", "Web APIs"],
      icon: "⚛️",
      color: "#9b59b6",
      credentialId: "SL-FE-DEV-2025",
      verifyLink: "#"
    },
    {
      id: 5,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "March 15, 2024",
      description: "Complete full-stack development certification covering both frontend and backend technologies, database management, and deployment strategies.",
      category: "Full Stack",
      level: "Advanced",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      icon: "🚀",
      color: "#1abc9c",
      credentialId: "CORS-FS-2024",
      verifyLink: "#"
    },
    {
      id: 6,
      title: "Database Design & Management",
      issuer: "Oracle",
      date: "June 10, 2024",
      description: "Comprehensive database design course covering SQL, database normalization, indexing, and performance optimization techniques.",
      category: "Database",
      level: "Intermediate",
      skills: ["SQL", "Database Design", "MySQL", "Performance Tuning"],
      icon: "🗄️",
      color: "#e67e22",
      credentialId: "ORA-DB-2024",
      verifyLink: "#"
    },
    {
      id: 7,
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "August 20, 2024",
      description: "Introduction to cloud computing concepts, AWS services, deployment strategies, and cloud security best practices.",
      category: "Cloud",
      level: "Beginner",
      skills: ["AWS", "Cloud Computing", "DevOps", "Security"],
      icon: "☁️",
      color: "#34495e",
      credentialId: "AWS-FUND-2024",
      verifyLink: "#"
    },
    {
      id: 8,
      title: "UI/UX Design Principles",
      issuer: "Adobe",
      date: "September 5, 2024",
      description: "Design thinking methodology, user research, wireframing, prototyping, and creating user-centered digital experiences.",
      category: "Design",
      level: "Intermediate",
      skills: ["UI Design", "UX Research", "Prototyping", "Design Systems"],
      icon: "🎯",
      color: "#2c3e50",
      credentialId: "ADB-UIUX-2024",
      verifyLink: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', icon: '🏆', count: certifications.length },
    { id: 'Frontend', name: 'Frontend', icon: '🎨', count: certifications.filter(c => c.category === 'Frontend').length },
    { id: 'Programming', name: 'Programming', icon: '💻', count: certifications.filter(c => c.category === 'Programming').length },
    { id: 'Data Science', name: 'Data Science', icon: '📊', count: certifications.filter(c => c.category === 'Data Science').length },
    { id: 'Full Stack', name: 'Full Stack', icon: '🚀', count: certifications.filter(c => c.category === 'Full Stack').length },
    { id: 'Database', name: 'Database', icon: '🗄️', count: certifications.filter(c => c.category === 'Database').length },
    { id: 'Cloud', name: 'Cloud', icon: '☁️', count: certifications.filter(c => c.category === 'Cloud').length },
    { id: 'Design', name: 'Design', icon: '🎯', count: certifications.filter(c => c.category === 'Design').length }
  ];

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = activeCategory === 'all' || cert.category === activeCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return '#27ae60';
      case 'Intermediate': return '#f39c12';
      case 'Advanced': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const stats = [
    { label: 'Total Certifications', value: certifications.length, icon: '🏆' },
    { label: 'Completed This Year', value: certifications.filter(c => c.date.includes('2024') || c.date.includes('2025')).length, icon: '📅' },
    { label: 'Different Categories', value: [...new Set(certifications.map(c => c.category))].length, icon: '📚' },
    { label: 'Skills Acquired', value: [...new Set(certifications.flatMap(c => c.skills))].length, icon: '⚡' }
  ];

  return (
    <div className="certifications-container">
      {/* Background Elements */}
      <div className="cert-background">
        <div className="floating-cert cert-1"></div>
        <div className="floating-cert cert-2"></div>
        <div className="floating-cert cert-3"></div>
      </div>

      {/* Header Section */}
      <div className="cert-header">
        <h1 className="cert-main-title">My Certifications</h1>
        <p className="cert-subtitle">
          Continuous learning journey through professional certifications and skill development
        </p>
        
        {/* Stats Grid */}
        <div className="cert-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="cert-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search certifications, skills, or issuers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-name">{category.name}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="certifications-grid">
        {filteredCertifications.map((cert, index) => (
          <div key={cert.id} className="certification-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="cert-card-header" style={{ background: cert.color }}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-level" style={{ background: getLevelColor(cert.level) }}>
                {cert.level}
              </div>
            </div>

            <div className="cert-card-content">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">
                <span className="issuer-icon">🏢</span>
                {cert.issuer}
              </div>
              <div className="cert-date">
                <span className="date-icon">📅</span>
                {cert.date}
              </div>
              <p className="cert-description">{cert.description}</p>

              <div className="cert-skills">
                <h4>Skills Acquired:</h4>
                <div className="skills-tags">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cert-credential">
                <span className="credential-id">ID: {cert.credentialId}</span>
              </div>
            </div>

            <div className="cert-card-footer">
              <a href={cert.verifyLink} className="verify-btn">
                <span>🔗</span>
                Verify Certificate
              </a>
              <button className="details-btn">
                <span>📋</span>
                View Details
              </button>
            </div>

            <div className="cert-overlay">
              <div className="overlay-content">
                <h4>Certificate Details</h4>
                <p>Click to view the full certificate and verification details</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredCertifications.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h3>No certifications found</h3>
          <p>Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Learning Journey Timeline */}
      <div className="learning-timeline">
        <h2 className="timeline-title">Learning Journey</h2>
        <div className="timeline-container">
          {certifications
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((cert, index) => (
              <div key={cert.id} className="timeline-item">
                <div className="timeline-marker" style={{ background: cert.color }}>
                  {cert.icon}
                </div>
                <div className="timeline-content">
                  <div className="timeline-date">{cert.date}</div>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
