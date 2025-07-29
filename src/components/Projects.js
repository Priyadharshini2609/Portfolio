import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Online Portfolio",
      description: "A modern, responsive portfolio website built with React featuring smooth animations, dark/light mode, and optimized performance.",
      longDescription: "This project showcases my skills and experience through an interactive portfolio. Features include routing, sidebar navigation, responsive design, and modern UI components with smooth animations.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      category: "frontend",
      image: "🌐",
      status: "Completed",
      github: "#",
      live: "#",
      features: ["Responsive Design", "Modern UI", "Fast Loading", "SEO Optimized"]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced features like real-time inventory, payment integration, and admin dashboard.",
      longDescription: "Complete e-commerce application with product management, shopping cart, secure payment processing, order tracking, and comprehensive admin panel for managing products and orders.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "fullstack",
      image: "🛒",
      status: "In Progress",
      github: "#",
      live: "#",
      features: ["Payment Integration", "Real-time Updates", "Admin Dashboard", "Order Tracking"]
    },
    {
      id: 3,
      title: "Student Management System",
      description: "A comprehensive system for managing student records, results, and notifications with role-based access control.",
      longDescription: "Advanced student management platform enabling real-time result viewing, notification system, attendance tracking, and secure user authentication with different access levels.",
      tech: ["React", "Spring Boot", "MySQL", "JWT", "Material-UI"],
      category: "fullstack",
      image: "🎓",
      status: "Completed",
      github: "#",
      live: "#",
      features: ["Role-based Access", "Real-time Notifications", "Secure Authentication", "Data Analytics"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, weather maps, and historical data visualization.",
      longDescription: "Modern weather application providing current conditions, 7-day forecasts, interactive maps, and detailed weather analytics with beautiful data visualizations.",
      tech: ["React", "Chart.js", "Weather API", "Geolocation"],
      category: "frontend",
      image: "🌤️",
      status: "Completed",
      github: "#",
      live: "#",
      features: ["Location-based", "Interactive Maps", "Data Visualization", "Offline Support"]
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management platform with team features, real-time updates, and productivity analytics.",
      longDescription: "Full-featured project management tool with team collaboration, task assignment, progress tracking, time management, and comprehensive reporting dashboard.",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      category: "fullstack",
      image: "📋",
      status: "In Progress",
      github: "#",
      live: "#",
      features: ["Team Collaboration", "Real-time Sync", "Analytics", "Mobile App"]
    },
    {
      id: 6,
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration, featuring real-time messaging and intelligent responses.",
      longDescription: "Advanced chat application with AI-powered responses, message history, file sharing, and customizable chat themes with real-time communication.",
      tech: ["React", "Socket.io", "OpenAI API", "Node.js"],
      category: "frontend",
      image: "🤖",
      status: "Completed",
      github: "#",
      live: "#",
      features: ["AI Integration", "Real-time Chat", "File Sharing", "Custom Themes"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'fullstack', name: 'Full Stack', icon: '⚡' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      {/* Header Section */}
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          Explore my latest work and creative solutions
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(category.id)}
          >
            <span className="tab-icon">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <div className="project-icon">{project.image}</div>
              <div className="project-status">
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                {project.features.map((feature, index) => (
                  <span key={index} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="project-tech">
                <h4>Technologies:</h4>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-actions">
              <a href={project.github} className="action-btn github-btn">
                <span>📁</span> Code
              </a>
              <a href={project.live} className="action-btn live-btn">
                <span>🚀</span> Live Demo
              </a>
            </div>

            <div className="project-overlay">
              <div className="overlay-content">
                <h4>Project Details</h4>
                <p>{project.longDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="projects-stats">
        <div className="stat-card">
          <div className="stat-number">{projects.length}</div>
          <div className="stat-label">Total Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{projects.filter(p => p.status === 'Completed').length}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{projects.filter(p => p.status === 'In Progress').length}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{[...new Set(projects.flatMap(p => p.tech))].length}</div>
          <div className="stat-label">Technologies</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
