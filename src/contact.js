import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  FiPhone, FiMail, FiMapPin, FiArrowRight, 
  FiMenu, FiArrowLeft, FiHome, FiSettings, 
  FiUser, FiUsers, FiBriefcase, FiClock
} from 'react-icons/fi';
import { 
  FaUserTie, FaBriefcase as FaBriefcaseIcon 
} from 'react-icons/fa';
import logoImage from '../src/eio.jpg';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://myeio.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'moorthyn007@gmail.com'
        }),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormErrors({});
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        const errorData = await response.json();
        console.error('Fetch error:', response.status, errorData);
        throw new Error(errorData.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-page">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button 
          className="sidebar-toggle" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FiArrowLeft size={24} /> : <FiMenu size={24} />}
        </button>
        
        <div className="sidebar-content">
          <div className="company-info">
            <h3>About EIO</h3>
            <p>EIO is a leading digital solutions provider specializing in web development, mobile applications, and digital transformation services.</p>
          </div>
          
          <div className="sidebar-menu">
            <Link to="/" className="sidebar-item">
              <FiHome className="sidebar-icon" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="sidebar-item">
              <FaUserTie className="sidebar-icon" />
              <span>About Us</span>
            </Link>
            <Link to="/services" className="sidebar-item">
              <FiSettings className="sidebar-icon" />
              <span>Services</span>
            </Link>
            <Link to="/portfolio" className="sidebar-item">
              <FiBriefcase className="sidebar-icon" />
              <span>Portfolio</span>
            </Link>
            <Link to="/team" className="sidebar-item">
              <FiUsers className="sidebar-icon" />
              <span>Teams</span>
            </Link>
            <Link to="/careers" className="sidebar-item">
              <FaBriefcaseIcon className="sidebar-icon" />
              <span>Careers</span>
            </Link>
            <Link to="/contact" className="sidebar-item">
              <FiUser className="sidebar-icon" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-brand">
              <div to="/" className="brand-logo-container">
                <img 
                  src={logoImage}
                  alt="EIO Logo" 
                  className="brand-logo"
                />
                <span className="logo-text">
                  <span className="logo-part logo-part-1">Electronic</span>
                  <span className="logo-part logo-part-2">Intelligence</span>
                  <span className="logo-part logo-part-3">Online</span>
                </span>
              </div>
            </div>
            
            <div className="navbar-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/team">Teams</NavLink>
              <NavLink to="/careers">Careers</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </nav>

        {/* Contact Section */}
        <section className="contact-us-section">
          <div className="container">
            <div className="career-header">
              <span className="career-header-label">Get in Touch</span>
              <h2 className="career-title">Contact Us</h2>
              <p className="career-subtitle">We're always available to answer your questions and guide you through our services.</p>
            </div>

            <div className="contact-us-container">
              {/* Contact Form */}
              <div className="contact-us-form">
                <h3><FiMail className="header-icon" /> Send Us a Message</h3>
                <p className="form-info">
                  Have questions or want to discuss a project? Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className={`form-field ${formErrors.name ? 'error' : ''}`}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>
                  <div className={`form-field ${formErrors.email ? 'error' : ''}`}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>
                  <div className={`form-field ${formErrors.subject ? 'error' : ''}`}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                  </div>
                  <div className={`form-field ${formErrors.message ? 'error' : ''}`}>
                    <textarea
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  </div>
                  <button 
                    type="submit" 
                    className="btn primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <FiArrowRight />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="contact-details">
                <div className="info-box">
                  {/* <div className="info-icon-wrapper">
                    <FiPhone className="info-icon" />
                  </div> */}
                  <div className="info-details">
                    <h4><FiPhone className="header-icon" /> Phone</h4>
                    <p>+91 9840624407</p>
                    <p>+91 9444224407</p>
                    <p>Available 24/7</p>
                  </div>
                </div>

                <div className="info-box">
                  {/* <div className="info-icon-wrapper">
                    <FiMail className="info-icon" />
                  </div> */}
                  <div className="info-details">
                    <h4><FiMail className="header-icon" /> Email</h4>
                    <p>myeiokln@gmail.com</p>
                    <p>info@myeio.in</p>
                    <p>Response within 24 hours</p>
                  </div>
                </div>

                <div className="info-box">
                  {/* <div className="info-icon-wrapper">
                    <FiMapPin className="info-icon" />
                  </div> */}
                  <div className="info-details">
                    <h4><FiMapPin className="header-icon" /> Office</h4>
                    <p>1A/1-G9 Wavoo Centre</p>
                    <p>Madurai Road, Tirunelveli-627001</p>
                  </div>
                </div>

                <div className="office-hours">
                  <h3><FiClock className="header-icon" /> Business Hours</h3>
                  <ul>
                    <li><FiClock className="list-icon" /><span>Monday - Friday:</span> 10:00 AM - 5:00 PM</li>
                    <li><FiClock className="list-icon" /><span>Saturday:</span> 10:00 AM - 1:00 PM</li>
                    <li><FiClock className="list-icon" /><span>Sunday:</span> Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>About EIO</h3>
                <p>We are a team of digital experts dedicated to creating innovative solutions that drive business growth and enhance user experiences.</p>
              </div>
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                  <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About us</Link></li>
                  <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
                  <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>Portfolio</Link></li>
                  <li><Link to="/team" onClick={() => window.scrollTo(0, 0)}>Teams</Link></li>
                  <li><Link to="/careers" onClick={() => window.scrollTo(0, 0)}>Careers</Link></li>
                  <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Contact Us</h3>
                <ul>
                  <li><FiMail /> myeiokln@gmail.com</li>
                  <li style={{ marginLeft: '27px' }}>info@myeio.in</li>
                  <li><FiPhone /> +91 9840624407</li>
                  <li style={{ marginLeft: '27px' }}>+91 9444224407</li>
                  <li><FiMapPin />1A/1-G9 Wavoo Centre,</li>
                  <li style={{ marginLeft: '27px' }}>Madurai Road, Tirunelveli-627001</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} EIO - Electronic Intelligence Online. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};


export default ContactPage;
