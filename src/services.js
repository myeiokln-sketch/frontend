import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  FiHome, FiBriefcase, FiSettings, FiUser, 
  FiUsers, FiMenu, FiArrowLeft, FiCalendar,
  FiPhone, FiMail, FiMapPin
} from 'react-icons/fi';
import { 
  FaLinkedin, FaFacebook, FaInstagram, 
  FaTwitter, FaWhatsapp, FaUserTie, FaBriefcase
} from 'react-icons/fa';
import logoImage from '../src/eio.jpg';
import './Services.css';

const Services = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { 
      name: "Web Development", 
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Custom websites and web applications tailored to your business needs with modern technologies. We use cutting-edge frameworks like React, Angular, and Vue.js for frontend development. Our backend solutions include Node.js, Django, and Laravel for robust performance."
    },
    { 
      name: "Mobile App Development", 
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "iOS and Android applications designed for optimal performance and user experience. We develop native apps using Swift for iOS and Kotlin for Android platforms. Cross-platform solutions with Flutter and React Native for cost-effective development."
    },
    { 
      name: "Customized Softwares", 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Bespoke software solutions designed specifically for your unique business requirements. Tailored solutions that integrate seamlessly with your existing systems. Custom CRM, inventory management, and workflow automation systems."
    },
    { 
      name: "ERP Solutions", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Comprehensive enterprise resource planning systems to streamline your business operations. End-to-end solutions covering finance, HR, supply chain, and customer management. Customizable modules to fit your specific industry requirements."
    },
    { 
      name: "HRM Solutions", 
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Human resource management systems to automate and optimize your HR processes. Features include payroll processing, attendance tracking, and performance management. Employee self-service portals and recruitment management tools."
    },
    { 
      name: "Digital Marketing", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Strategic online marketing solutions to boost your brand's digital presence. SEO, PPC, social media marketing, and content strategy services. Data-driven campaigns with detailed analytics and performance tracking."
    },
    { 
      name: "Hospital Management", 
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Complete hospital management systems for healthcare institutions. Patient records management, appointment scheduling, and billing solutions. Pharmacy and inventory management with integration to medical devices."
    },
    { 
      name: "LMS Softwares", 
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Learning management systems for educational institutions and corporate training. Course creation tools, student progress tracking, and assessment systems. Virtual classrooms with video conferencing and interactive whiteboards."
    },
  ];

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
          <div className="company-info1">
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

        {/* Services Section */}
        <section className="services-page1">
          <div className="services-container1">
            <div className="services-header1">
              <span className="services-header-label1">Our Expertise</span>
              <h2 className="services-title1">Services We Provide</h2>
              <h2 className="services-subtitle1">Comprehensive digital solutions tailored to your business needs</h2>
            </div>

            <div className="services-grid1">
              {services.map((service, index) => (
                <div className="service-card1" key={index}>
                  <div className="service-image1">
                    <img src={service.image} alt={service.name} />
                  </div>
                  <div className="service-content1">
                    <h3 className="service-name1">{service.name}</h3>
                    <p className="service-description1">{service.description}</p>
                    <p className="service-line">{service.line2}</p>
                    <p className="service-line">{service.line3}</p>
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

export default Services;