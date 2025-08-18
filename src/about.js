import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  FiHome, FiBriefcase, FiSettings, FiUser, 
  FiUsers, FiMenu, FiArrowLeft, FiX, FiCalendar, 
  FiPhone, FiArrowRight, FiMail, FiUpload, FiMapPin,
  FiAward, FiEye, FiCheckCircle, FiZap, FiGlobe, FiTarget
} from 'react-icons/fi';
import { FaLinkedin, FaFacebook, FaInstagram, 
  FaTwitter, FaWhatsapp, FaUserTie, FaBriefcase } from 'react-icons/fa';
import logoImage from '../src/eio.jpg';
import './About.css';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle('no-scroll');
  };

  const coreValues = [
    { icon: <FiZap size={24} />, title: "Innovation", description: "Constantly pushing boundaries to deliver cutting-edge solutions" },
    { icon: <FiCheckCircle size={24} />, title: "Quality", description: "Uncompromising standards in every deliverable" },
    { icon: <FiUsers size={24} />, title: "Collaboration", description: "Working together to achieve extraordinary results" },
    { icon: <FiGlobe size={24} />, title: "Integrity", description: "Ethical practices and transparency in all dealings" },
    { icon: <FiTarget size={24} />, title: "Agility", description: "Adapting quickly to changing market demands" }
  ];

  return (
    <div className="home-page">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button 
          className="sidebar-toggle" 
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FiArrowLeft size={24} /> : <FiMenu size={24} />}
        </button>
        
        <div className="sidebar-content">
          <div className="company-info">
            <h3>About EIO</h3>
            <p>EIO is a leading digital solutions provider specializing in web development, mobile applications, and digital transformation services.</p>
          </div>
          
          <div className="sidebar-menu">
            <Link to="/" className="sidebar-item" onClick={toggleSidebar}>
              <FiHome className="sidebar-icon" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="sidebar-item" onClick={toggleSidebar}>
              <FaUserTie className="sidebar-icon" />
              <span>About Us</span>
            </Link>
            <Link to="/services" className="sidebar-item" onClick={toggleSidebar}>
              <FiSettings className="sidebar-icon" />
              <span>Services</span>
            </Link>
            <Link to="/portfolio" className="sidebar-item" onClick={toggleSidebar}>
              <FiBriefcase className="sidebar-icon" />
              <span>Portfolio</span>
            </Link>
            <Link to="/team" className="sidebar-item" onClick={toggleSidebar}>
              <FiUsers className="sidebar-icon" />
              <span>Teams</span>
            </Link>
            <Link to="/careers" className="sidebar-item" onClick={toggleSidebar}>
              <FaBriefcase className="sidebar-icon" />
              <span>Careers</span>
            </Link>
            <Link to="/contact" className="sidebar-item" onClick={toggleSidebar}>
              <FiUser className="sidebar-icon" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
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

        {/* About Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero__breadcrumb">
              <Link to="/">Home</Link> / <span>About Us</span>
            </div>
            <h1 className="about-hero__title">Our Story</h1>
            <h2 className="about-hero__description">
              EIO is a premier digital transformation partner that helps businesses evolve through innovative technology solutions. 
              Founded in 2025, we've grown from a small startup to a trusted partner for enterprises worldwide.
            </h2>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-section about-section--light">
          <div className="container">
            <div className="about-section__header">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiAward className="about-section__icon" style={{ marginRight: '10px' }} />
                <h2 className="about-section__title">Our Mission</h2>
              </div>
            </div>
            <div className="about-mission__content">
              <div className="about-mission__text">
                <p>Empower our clients to emerge victoriously in the digital landscape by providing cutting-edge solutions tailored to their unique needs.</p>
                <p>We combine technical expertise with business acumen to deliver transformative results that drive growth and innovation.</p>
              </div>
              <div className="about-mission__image">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our Mission" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="about-section about-section--light">
          <div className="container">
            <div className="about-section__header">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiEye className="about-section__icon" style={{ marginRight: '10px' }} />
                <h2 className="about-section__title">Our Vision</h2>
              </div>
            </div>
            <h2 className="about-vision__statement">
              We strive to provide our clients with innovative and industry-specific solutions that will help them get a superior edge in the market. 
              Our goal is to transform and evolve your business and place you as a competitive entity that will eventually contribute to our success.
            </h2>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section about-section--light">
          <div className="container">
            <div className="about-section__header">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiCheckCircle className="about-section__icon" style={{ marginRight: '10px' }} />
                <h2 className="about-section__title">Core Values</h2>
              </div>
            </div>
            <div className="about-values__grid">
              {coreValues.map((value, index) => (
                <div key={index} className="about-value__card">
                  <div className="about-value__icon">{value.icon}</div>
                  <h3 className="about-value__title">{value.title}</h3>
                  <span className="about-value__description">{value.description}</span>
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

export default About;