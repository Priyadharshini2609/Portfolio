import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rpriya26092004@email.com',
      link: 'mailto:rpriya26092004@email.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91-8778758742',
      link: 'tel:+918778758742',
      description: 'Call me for quick discussions'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: '#',
      description: 'Available for local meetings'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/priyadharshini--a52549251priyadharshini-softwaredeveloper-java',
      description: 'Professional networking'
    }
  ];

  const socialLinks = [
    { icon: '🐙', name: 'GitHub', url: '#', color: '#333' },
    { icon: '💼', name: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: '🐦', name: 'Twitter', url: '#', color: '#1da1f2' },
    { icon: '📧', name: 'Email', url: 'mailto:rpriya26092004@email.com', color: '#ea4335' }
  ];

  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Let's discuss your next project or just say hello!
        </p>
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
      </div>

      <div className="contact-content">
        {/* Contact Methods */}
        <div className="contact-methods">
          <h2 className="section-title">Contact Information</h2>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-icon">{method.icon}</div>
                <div className="method-content">
                  <h3 className="method-title">{method.title}</h3>
                  <a href={method.link} className="method-value">
                    {method.value}
                  </a>
                  <p className="method-description">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2 className="section-title">Send Message</h2>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi!"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Form Side Info */}
            <div className="form-side-info">
              <div className="info-card">
                <h3>Quick Response</h3>
                <p>I typically respond within 24 hours</p>
                <div className="response-time">
                  <span className="time-indicator"></span>
                  Usually responds in a few hours
                </div>
              </div>
              
              <div className="info-card">
                <h3>Available For</h3>
                <ul className="availability-list">
                  <li>✅ Freelance Projects</li>
                  <li>✅ Full-time Opportunities</li>
                  <li>✅ Consulting</li>
                  <li>✅ Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-section">
        <h3>Connect With Me</h3>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="social-link"
              style={{ '--social-color': social.color }}
              title={social.name}
            >
              <span className="social-icon">{social.icon}</span>
              <span className="social-name">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </div>
  );
}

export default Contact;
