import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-content">
        <div className="contact-info animated-fade">
          <p><strong>Email:</strong> rpriya26092004@email.com</p>
          <p><strong>Phone:</strong> +91-8778758742</p>
          <p><strong>Location:</strong> chennai,Tamil Nadu, India</p>
            <p><strong>LinkedIn:</strong>  https://www.linkedin.com/in/priyadharshini--a52549251priyadharshini-softwaredeveloper-java</p>
        </div>

        <div className="contact-form animated-slide">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
