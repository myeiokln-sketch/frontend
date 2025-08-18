import React, { useState, useEffect } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { 
  FiHome, FiBriefcase, FiSettings, FiUser, 
  FiUsers, FiMenu, FiArrowLeft, 
  FiPhone, FiArrowRight, FiMail,  FiMapPin
} from 'react-icons/fi';
import { FaUserTie, FaBriefcase } from 'react-icons/fa';
import logoImage from '../src/eio.jpg';
import './Portfolio.css';

import alumniPortalImg from '../src/alumini.png';
import lmsImg from '../src/lms.jpeg';
import ecommerceImg from '../src/vattaram.jpg';
import aimsImg from '../src/aims.jpeg';
import hrmImg from '../src/hrms.jpeg';
import journalPortalImg from '../src/journal.jpeg';

const PortfolioPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'Alumni Portal',
      category: 'Web Application',
      description: 'A platform that connects former students, enabling networking, event updates, donations, and community engagement.',
      image: alumniPortalImg,
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      name: 'Learning Management System',
      category: 'Education Platform',
      description: 'A centralized system for delivering, tracking, and managing educational content and student progress.',
      image: lmsImg,
      technologies: ['Angular', 'Firebase', 'Material UI']
    },
    {
      id: 3,
      name: 'Vattaram (E-commerce)',
      category: 'E-commerce Solution',
      description: 'An e-commerce site showcasing and selling unique regional products with a rich, animated user experience.',
      image: ecommerceImg,
      technologies: ['React', 'Stripe', 'Node.js']
    },
    {
      id: 4,
      name: 'Aims Publications',
      category: 'Publishing System',
      description: 'A digital platform for publishing academic materials, books, and research content by AIMS.',
      image: aimsImg,
      technologies: ['PHP', 'MySQL', 'Bootstrap']
    },
    {
      id: 5,
      name: 'HR Management System',
      category: 'Enterprise Software',
      description: 'A software solution that streamlines employee management, recruitment, payroll, and performance tracking.',
      image: hrmImg,
      technologies: ['Java', 'Spring Boot', 'PostgreSQL']
    },
    {
      id: 6,
      name: 'Journal Portal',
      category: 'Medical Software',
      description: 'An online hub for publishing, reviewing, and accessing academic journals and research articles.',
      image: journalPortalImg,
      technologies: ['Django', 'Python', 'PostgreSQL']
    },
  ];

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
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
              <FaBriefcase className="sidebar-icon" />
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

        {/* Portfolio Section */}
        <section className="portfolio-page">
          <div className="portfolio-container">
            <div className="portfolio-header">
              <span className="portfolio-header-label">Our Work</span>
              <h2 className="portfolio-title">Portfolio</h2>
              <h2 className="portfolio-subtitle">Explore our collection of successful projects and solutions we've delivered to our clients.</h2>
            </div>
            
            <div className="portfolio-grid">
              {projects.map((project) => (
                <div className="portfolio-card" key={project.id}>
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.name} />
                    <div className="portfolio-category">{project.category}</div>
                  </div>
                  <div className="portfolio-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleViewDetails(project.id)}
                      className="portfolio-link"
                    >
                      View Details <FiArrowRight />
                    </button>
                  </div>
                </div>
              ))}
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
                  <li style={{ marginLeft: '27px' }}>Madurai Road, Trunelveli-627001</li>
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

export default PortfolioPage;