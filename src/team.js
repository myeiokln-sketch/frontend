import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  FiHome, FiBriefcase, FiSettings, FiUser, 
  FiUsers, FiMenu, FiArrowLeft, FiX, FiCalendar, 
  FiPhone, FiArrowRight, FiMail, FiMapPin 
} from 'react-icons/fi';
import { FaUserTie, FaBriefcase, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logoImage from '../src/eio.jpg';
import './Team.css';

import laskhmisir from '../src/lakshmi sir.jpg';
import sir from '../src/sir.jpg';
import appas from '../src/appas.jpg';
import soorya from '../src/soorya.jpg';
import moorthy1 from '../src/moorthy1.jpg';
import vikas from '../src/vikas.jpg';
import santhosh from '../src/santhosh.jpg';
import Mam from '../src/Mam.jpg';
import journalPortalImg from '../src/journal.jpeg';

const Team = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const managementTeam = [
    {
      id: 1,
      name: 'Dr. Lakshmi Narayanan K',
      role: 'Director/Manager',
      bio: 'Founder of EIO company',
      avatar: laskhmisir,
      social: {
        linkedin: 'https://www.linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        email: 'mailto:contact@example.com'
      }
    },
    {
      id: 2,
      name: 'Kumara Gurubaran',
      role: 'Director & COO',
      bio: 'Founder of EIO company',
      avatar: sir,
      social: {
        linkedin: 'https://www.linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        email: 'mailto:contact@example.com'
      }
    },
    {
      id: 3,
      name: 'Sivapriya B',
      role: 'Director',
      bio: 'Founder of EIO company',
      avatar: Mam,
      social: {
        linkedin: 'https://www.linkedin.com/in/jennifer-lee-ops',
        github: 'https://github.com/jlee-ops',
        twitter: 'https://twitter.com/jlee_operations',
        email: 'mailto:jennifer.lee@eio.com'
      }
    }   
  ];

  const technicalTeam = [
    {
      id: 1,
      name: 'Soorya Prakash M',
      role: 'Web Developer',
      bio: 'Web applications using HTML, CSS, JavaScript, PHP, and modern frameworks like React.js. I am taking on projects to deepen my knowledge and stay updated with the latest trends in web development. My goal is to contribute to innovative and impactful projects in a collaborative environment as a full stack developer—both technically and professionally.',
      avatar: soorya,
      social: {
        linkedin: 'https://www.linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        email: 'mailto:contact@example.com'
      }
    },
    {
      id: 2,
      name: 'Narasinga Moorthy A',
      role: 'MERN Stack Developer',
      bio: 'A passionate MERN stack web developer dedicated to crafting dynamic, user-friendly, and impactful web solutions that captivate users, enhance efficiency, and drive business growth through innovation and purpose-driven design.',
      avatar: moorthy1,
      social: {
        linkedin: 'https://www.linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        email: 'mailto:contact@example.com'
      }
    },
    {
      id: 3,
      name: 'Syed Abuthahir Appas B',
      role: 'Full Stack Developer',
      bio: 'A Full-Stack Developer skilled in MERN Stack (MongoDB, Express.js, React.js, Node.js) and Java Spring Boot, with a passion for building scalable, efficient, and user-friendly applications. I specialize in developing responsive front-end interfaces, creating robust RESTful APIs, and managing secure, high-performance backends. With a strong foundation in both Java and modern JavaScript frameworks, I thrive on turning ideas into functional, high-quality solutions.',
      avatar: appas,
      social: {
        linkedin: 'https://www.linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        email: 'mailto:contact@example.com'
      }
    },
    {
      id: 4,
      name: 'Santhosh.M',
      role: 'Digital Marketing',
      bio: 'I am deeply passionate about utilizing my technical and analytical skills to deliver impactful solutions. My expertise lies in web technologies, including HTML, CSS, JavaScript, React, and as well as digital marketing strategies. To bring fresh ideas, dedication, and enthusiasm to my career journey, striving for mutual growth and success.',
      avatar: santhosh,
      social: {
        linkedin: 'https://www.linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        email: 'mailto:contact@example.com'
      }
    },
    {
      id: 5,
      name: 'Vikas R',
      role: 'UI/UX Designer',
      bio: 'Creative UI/UX Designer and Web Developer who turns ideas into immersive digital experiences. Known for blending clean design with smart code, crafts interfaces that not only look stunning but feel effortless to use. Every pixel and line of code is driven by purpose — to make technology feel human.',
      avatar: vikas,
      social: {
        linkedin: 'https://www.linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        email: 'mailto:contact@example.com'
      }
    },
  ];

  const handleSocialClick = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
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

        {/* Team Page Specific Content */}
        <section className="team-page">
          <div className="team-container">
            <div className="team-header">
              <span className="team-header-label">Our Team</span>
              <h2 className="team-title">Meet The Experts</h2>
              <h2 className="team-subtitle">The talented individuals who make our digital solutions possible</h2>
            </div>

            {/* Management Team */}
            <div className="team-section">
              <h3 className="team-category">Management Team</h3>
              <div className="team-grid">
                {managementTeam.map(member => (
                  <div key={member.id} className="team-card">
                    <div className="team-card-image">
                      <img src={member.avatar} alt={member.name} />
                      {/* <div className="team-social-links">
                        <a href={member.social.linkedin} onClick={(e) => handleSocialClick(e, member.social.linkedin)}>
                          <FaLinkedin />
                        </a>
                        <a href={member.social.github} onClick={(e) => handleSocialClick(e, member.social.github)}>
                          <FiUsers />
                        </a>
                        <a href={member.social.twitter} onClick={(e) => handleSocialClick(e, member.social.twitter)}>
                          <FaTwitter />
                        </a>
                        <a href={member.social.email} onClick={(e) => handleSocialClick(e, member.social.email)}>
                          <FiMail />
                        </a>
                      </div> */}
                    </div>
                    <div className="team-card-content">
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                      <p className="team-bio">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technical Team */}
            <div className="team-section">
              <h3 className="team-category">Technical Team</h3>
              <div className="team-grid">
                {technicalTeam.map(member => (
                  <div key={member.id} className="team-card">
                    <div className="team-card-image">
                      <img src={member.avatar} alt={member.name} />
                      {/* <div className="team-social-links">
                        <a href={member.social.linkedin} onClick={(e) => handleSocialClick(e, member.social.linkedin)}>
                          <FaLinkedin />
                        </a>
                        <a href={member.social.github} onClick={(e) => handleSocialClick(e, member.social.github)}>
                          <FiUsers />
                        </a>
                        <a href={member.social.twitter} onClick={(e) => handleSocialClick(e, member.social.twitter)}>
                          <FaTwitter />
                        </a>
                        <a href={member.social.email} onClick={(e) => handleSocialClick(e, member.social.email)}>
                          <FiMail />
                        </a>
                      </div> */}
                    </div>
                    <div className="team-card-content">
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                      <p className="team-bio">{member.bio}</p>
                    </div>
                  </div>
                ))}
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
                  <li><FiPhone />+91 9840624407</li>
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

export default Team;