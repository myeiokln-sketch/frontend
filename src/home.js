  import React, { useState, useEffect } from 'react';
  import { Link,NavLink } from 'react-router-dom';
  import './home.css';
  import logoImage from '../src/eio.jpg'; // Adjust path to your logo
  import { FaMapMarkerAlt,FaPhone,FaEnvelope,FaStar,FaStarHalfAlt,FaRegStar,FaQuoteLeft,FaUser} from 'react-icons/fa';


  // Import icons
  import { 
    FiArrowRight, 
    FiArrowLeft,
    FiMenu, 
    FiX, 
    FiMail, 
    FiPhone, 
    FiCalendar,
    FiHome,
    FiBriefcase,
    FiSettings,
    FiUser,
    FiUsers,
    FiMapPin,
    FiUserX
  } from 'react-icons/fi';
  import { 
    FaLinkedin, 
    FaFacebook, 
    FaInstagram, 
    FaTwitter, 
    FaWhatsapp, 
    FaUserTie, 
    FaBriefcase,
    FaLaptopCode,
    FaMobileAlt,
    FaShoppingCart
  } from 'react-icons/fa';

  // Import images
  import portfolio1 from '../src/alumini.png';
  import portfolio2 from '../src/lms.jpeg';
  import portfolio3 from '../src/vattaram.jpg';
  import portfolio4 from '../src/aims.jpeg';
  import portfolio5 from '../src/hrms.jpeg';
  import portfolio6 from '../src/journal.jpeg';

  const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [webDev, setWebDev] = useState(0);
    const [mobileApp, setMobileApp] = useState(0);
    const [ecommerce, setEcommerce] = useState(0);

    const animateCount = (target, setter) => {
      let start = 0;
      const duration = 1500; // 1.5 seconds
      const stepTime = 16; // ~60fps
      const increment = target / (duration / stepTime);

      const counter = () => {
        start += increment;
        if (start < target) {
          setter(Math.floor(start));
          requestAnimationFrame(counter);
        } else {
          setter(target);
        }
      };
      requestAnimationFrame(counter);
    };

    useEffect(() => {
      animateCount(50, setWebDev);
      animateCount(40, setMobileApp);
      animateCount(70, setEcommerce);
    }, []);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    const portfolioItems = [
      {
        id: 1,
        title: "Alumni Portal",
        category: "Web Design",
        description: "An e-commerce site showcasing and selling unique regional products with a rich, animated user experience.",
        image: portfolio1,
        link: "/project/1"
      },
      {
        id: 2,
        title: "Learning Management System",
        category: "Mobile Development",
        description: "A centralized system for delivering, tracking, and managing educational content and student progress.",
        image: portfolio2,
        link: "/project/2"
      },
      {
        id: 3,
        title: "Vattaram (E-commerce)",
        category: "Web Development",
        description: "A scalable online store with seamless payment integration.",
        image: portfolio3,
        link: "/project/3"
      },
      {
        id: 4,
        title: 'Aims Publications',
        category: 'Publishing System',
        description: 'A digital platform for publishing academic materials, books, and research content by AIMS.',
        image: portfolio4,
        link: '/project/4'
      },
      {
        id: 5,
        title: 'HR Management System',
        category: 'Enterprise Software',
        description: 'A software solution that streamlines employee management, recruitment, payroll, and performance tracking.',
        image: portfolio5,
        link: '/project/5'
      },
      {
        id: 6,
        title: 'Journal Portal',
        category: 'Medical Software',
        description: 'An online hub for publishing, reviewing, and accessing academic journals and research articles.',
        image: portfolio6,
        link: '/project/6'
      }
    ];

    const testimonials = [
      {
        id: 1,
        quote: "Excellent service! A professional team with modern tools and great technical skills. They developed a custom ERP solution for our company, and the results were outstanding. Delivered everything faster than expected with zero issues. Thank you – Highly recommended!",
        author: "Vimal",
        location: "MADURAI",
        rating: 5,
        contact: {
          phone: "+91 9876543210",
          email: "vimal@example.com"
        }
      },
      {
        id: 2,
        quote: "Great work on our e-commerce platform. The team was responsive and delivered on time.",
        author: "Priya",
        location: "CHENNAI",
        rating: 4.5,
        contact: {
          phone: "+91 8765432109",
          email: "priya@example.com"
        }
      },
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [testimonials.length]);

    const renderStars = (rating) => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;

      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          stars.push(<FaStar key={i} className="star filled" />);
        } else if (i === fullStars + 1 && hasHalfStar) {
          stars.push(<FaStarHalfAlt key={i} className="star half-filled" />);
        } else {
          stars.push(<FaRegStar key={i} className="star" />);
        }
      }
      return stars;
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
            <div className="horizontals-line"></div>
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

          <section className="hero-banner">
    {/* Background Carousel */}
    <div className="background-carousel">
      <div className="carousel-track">
        <div 
          className="carousel-slide" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}
        ></div>
        <div 
          className="carousel-slide" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}
        ></div>
        <div 
          className="carousel-slide" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}
        ></div>
        <div 
          className="carousel-slide" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}
        ></div>
      </div>
      <div className="carousel-overlay"></div>
    </div>

    {/* Content Overlay */}
    <div className="content-wrapper">
      <div className="hero-content">
        <h1 className="main-headline">WELCOME TO MY DIGITAL PLAYGROUND.</h1>
        <span className="company-description">
          Innovative design.<br />
          Powerful code. Let's<br />
          build your vision<br />
          together.
        </span>
        <div>
          
        <Link to="/contact" className="consultation-btn" onClick={() => window.scrollTo(0,0)}><FiUser className="sidebar-icon" /> CONTACT US</Link>
        <div className="horizontal-line"></div>
        </div>
        
        
        <div className="client-logos-section">
          <p className="client-count">Trusted by 10+ Global Brands</p>
        </div>
      </div>
    </div>
  </section>

          {/* Hero Section */}
          <section className="hero-section">
    <div className="container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <span className="welcome-text">✦ Welcome To Electronic Intelligence Online ✦</span>
          <h1>EIO Team</h1>
          <p className="hero-description">
            EIO is a premier digital transformation partner that helps businesses evolve through innovative technology solutions. 
            Founded in 2025, we've grown from a small startup to a trusted partner for enterprises worldwide.
          </p>
          <h2>Digital Solutions Experts</h2>
          <p>Passionate digital experts, we create intuitive and visually appealing digital experiences. We transform ideas into seamless solutions that meet your expectations.</p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="btn primary" onClick={() => window.scrollTo(0, 0)}>Our Projects</Link>
            <Link to="/contact" className="btn secondary" onClick={() => window.scrollTo(0, 0)}><FiUser className="sidebar-icon"/>Contact Us</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/eio-team.jpg" alt="Digital transformation team working" />
        </div>
      </div>
    </div>
    <div className="floating-shapes"></div>
  </section>

  {/* list section */}
          <section className="service-list-section">

    {/* Service List Content - Stable Animated Version */}
  <div className="service-list-content-wrapper">
    <h2 className="service-list-title">
      <span className="letter" style={{ '--delay': '0.1s' }}>O</span>
      <span className="letter" style={{ '--delay': '0.2s' }}>U</span>
      <span className="letter" style={{ '--delay': '0.3s' }}>R</span>
      <span className="letter" style={{ '--delay': '0.4s' }}>&nbsp;</span>
      <span className="letter" style={{ '--delay': '0.5s' }}>S</span>
      <span className="letter" style={{ '--delay': '0.6s' }}>E</span>
      <span className="letter" style={{ '--delay': '0.7s' }}>R</span>
      <span className="letter" style={{ '--delay': '0.8s' }}>V</span>
      <span className="letter" style={{ '--delay': '0.9s' }}>I</span>
      <span className="letter" style={{ '--delay': '1.0s' }}>C</span>
      <span className="letter" style={{ '--delay': '1.1s' }}>E</span>
      <span className="letter" style={{ '--delay': '1.2s' }}>&nbsp;</span>
      <span className="letter" style={{ '--delay': '1.3s' }}>L</span>
      <span className="letter" style={{ '--delay': '1.4s' }}>I</span>
      <span className="letter" style={{ '--delay': '1.5s' }}>S</span>
      <span className="letter" style={{ '--delay': '1.6s' }}>T</span>
    </h2>
    
    <div className="service-list-content">
      <div className="service-list-text">
        <h3 className="animate-stable" style={{ '--delay': '1.7s' }}>
    Delivering <span style={{ color: 'orange' }}>End-to-End</span> IT
  </h3>
  <h2 className="animate-stable" style={{ '--delay': '1.8s' }}>
    & Tech <span style={{ color: 'orange' }}>Solutions</span>
  </h2>
  <h2 className="animate-stable" style={{ '--delay': '1.9s' }}>
    From <span style={{ color: 'orange' }}>Web & Mobile Apps</span> to IoT,
  </h2>
  <h1 className="animate-stable" style={{ '--delay': '2.0s' }}>
    PCB Design, <span style={{ color: 'orange' }}>and</span> 3D Printing
  </h1>
      </div>
    </div>

    <div className="line-row">
    <div className="line" style={{ '--delay': '0s' }}></div>
    <div className="line" style={{ '--delay': '0.2s' }}></div>
    <div className="line" style={{ '--delay': '0.4s' }}></div>
    <div className="line" style={{ '--delay': '0.6s' }}></div>
    <div className="line" style={{ '--delay': '0.8s' }}></div>
  </div>
    <div className="service-stats-section">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <span className="service-title">WEB APP DEVELOPMENT</span>
          <h2>{webDev}+</h2>
        </div>

        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <span className="service-title">MOBILE APP DEVELOPMENT</span>
          <h2>{mobileApp}+</h2>
        </div>

        <div className="service-card">
          <FaShoppingCart className="service-icon" />
          <span className="service-title">E-COMMERCE SERVICE</span>
          <h2>{ecommerce}+</h2>
        </div>
      </div>
  </div>
  </section>

  <div className="solution-section">
    <div className="solution-container">
      {/* Left side - Software Development Image */}
      <div className="solution-image">
        <img 
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Software Development" 
          className="software-img"
        />
      </div>

      {/* Right side - Content */}
      <div className="solution-content">
        <Link to="/" className="brand-logo-containers">
    <img 
      src={logoImage}
      alt="EIO Logo" 
      className="brand-logos"
    />
    <h2 className="solution-title">eio</h2>
  </Link>
        <h3 className="solution-subtitle">We Build Your Vision</h3>
        <h3 className="solution-subtitle">Just Like It's Our Own</h3>
        
        <p className="solution-text">
          At EIO Digital Solution PVT LMT, we treat every project with the same care 
          and precision as if it were our own. Whether it's a custom app, ERP system, 
          or IoT device, we ensure professional delivery, cutting-edge technology, 
          and a smooth experience from start to finish.
        </p>

        <button className="solution-contact-btn">
          <FiUser className="sidebar-icon" /> CONTACT US
        </button>
        
      </div>
    </div>
  </div>
          {/* Portfolio Section */}
          <section className="portfolio-section" id="portfolio">
            <div className="container">
              <div className="section-headers">
                <span className="section-label">Our Portfolio</span>
                <h2>Showcasing Our Best Work</h2>
                <span className="section-description">Explore our diverse range of successful projects</span>
              </div>
              
              <div className="portfolio-grid">
                {portfolioItems.map(item => (
                  <div className="portfolio-card" key={item.id}>
                    <div className="portfolio-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="portfolio-content">
                      <span className="portfolio-category">{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Link to={item.link} className="portfolio-link">View Project <FiArrowRight /></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial section*/}
          <section className="testimonials-section">
        <div className="testimonials-bg-animation"></div>
        <h2>CLIENTS TESTIMONIAL</h2>
        <span className="subtitle">What Our Clients Say About EIODigital...</span>
        <div className="line-rows">
    <div className="lines" style={{ '--delay': '0s' }}></div>
    <div className="lines" style={{ '--delay': '0.2s' }}></div>
    <div className="lines" style={{ '--delay': '0.4s' }}></div>
    <div className="lines" style={{ '--delay': '0.6s' }}></div>
    <div className="lines" style={{ '--delay': '0.8s' }}></div>
  </div>
        <div className="divider">
    <span>*</span>
    <span>*</span>
    <span>*</span>
  </div>
        
        <div className="testimonials-container">
          <div 
            className="testimonials-slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="stars">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote>{testimonial.quote}</blockquote>
                <div className="author-info">
                  <div className="author-details">
                    <FaUser className="icon" />
                    <strong>{testimonial.author}</strong>
                    <div className="location">
                      <FaMapMarkerAlt className="icon" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-item">
                      <FaPhone className="icon" />
                      <span>{testimonial.contact.phone}</span>
                    </div>
                    <div className="contact-item">
                      <FaEnvelope className="icon" />
                      <span>{testimonial.contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
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
                      <li style={{ marginLeft: '35px' }}>info@myeio.in</li>
                      <li ><FiPhone /> +91 9840624407</li>
                      <li style={{ marginLeft: '35px' }}>+91 9444224407</li>
                      <li><FiMapPin />1A/1-G9 Wavoo Centre</li>
                      <li style={{ marginLeft: '35px' }}>Madurai Road, Trunelveli-627001</li>
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

  export default Home;