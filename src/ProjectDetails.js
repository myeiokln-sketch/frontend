import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './projectDetails.css';

// Import all project images
import alumniPortalImg from '../src/alumini.png';
import lmsImg from '../src/lms.jpeg';
import ecommerceImg from '../src/vattaram.jpg';
import aimsImg from '../src/aims.jpeg';
import hrmImg from '../src/hrms.jpeg';
import journalPortalImg from '../src/journal.jpeg';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  // Define all projects data here
  const allProjects = [
    {
      id: 1,
      name: 'Alumni Portal',
      category: 'Web Application',
      description: 'A comprehensive platform that connects former students, enabling networking, event updates, donations, and community engagement. This system facilitates lifelong connections between alumni and their alma mater.',
      image: alumniPortalImg,
      details: {
        features: [
          "✅ User registration & login for alumni",
          "📸 Batch-wise group photos and memory wall",
          "📅 Event listings for reunions and virtual meets",
          "💬 Community features for chatting and friend connections",
          "🎓 Career center for alumni job referrals and mentorship",
          "💝 Donation module for fundraising and scholarships",
          "🔍 Alumni search to find and connect with batchmates"
        ],
      }
    },
    {
      id: 2,
      name: 'Learning Management System',
      category: 'Education Platform',
      description: 'A centralized system for delivering, tracking, and managing educational content and student progress across multiple institutions.',
      image: lmsImg,
      details: {
        client: 'National Education Board',
        duration: '6 months',
        technologies: ['Angular', 'Firebase', 'Material UI', 'Python'],
        features: [
          "📚 Course management with rich content editor",
          "📊 Student progress tracking and analytics",
          "🖥️ Interactive learning modules and quizzes",
          "👨‍🏫 Instructor dashboard with grading tools",
          "📱 Mobile-responsive design for all devices"
        ],
        challenge: "Ensuring accessibility for students with varying technical capabilities.",
        solution: "Developed an intuitive interface with comprehensive training materials and tiered access levels."
      }
    },
    {
      id: 3,
      name: 'Vattaram (E-commerce)',
      category: 'E-commerce Solution',
      description: 'An e-commerce platform showcasing and selling unique regional products with a rich, animated user experience that highlights local craftsmanship.',
      image: ecommerceImg,
      details: {
        client: 'Vattaram Handicrafts',
        duration: '3 months',
        technologies: ['React', 'Redux', 'Stripe API', 'Node.js'],
        features: [
          "🛍️ Product catalog with high-quality images",
          "🛒 Shopping cart with saved items functionality",
          "💳 Secure payment gateway integration",
          "🌟 Customer reviews and ratings system",
          "🚚 Real-time order tracking"
        ],
        challenge: "Showcasing products authentically while maintaining fast load times.",
        solution: "Implemented optimized media loading with lazy loading and CDN distribution."
      }
    },
    {
      id: 4,
      name: 'Aims Publications',
      category: 'Publishing System',
      description: 'A digital platform for publishing academic materials, books, and research content with advanced distribution and reading features.',
      image: aimsImg,
      details: {
        client: 'AIMS Publishing House',
        duration: '5 months',
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'AWS'],
        features: [
          "📖 Digital reading interface with bookmarking",
          "✍️ Author dashboard for content submission",
          "🔍 Advanced search with citation tools",
          "📱 Responsive design for all devices",
          "📊 Analytics for publisher insights"
        ],
        challenge: "Handling complex academic formatting requirements.",
        solution: "Developed a custom markup language converter for academic content."
      }
    },
    {
      id: 5,
      name: 'HR Management System',
      category: 'Enterprise Software',
      description: 'A comprehensive solution that streamlines employee management, recruitment, payroll, and performance tracking for large organizations.',
      image: hrmImg,
      details: {
        client: 'Global Tech Solutions',
        duration: '8 months',
        technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
        features: [
          "👥 Employee database with document management",
          "💰 Automated payroll processing",
          "📝 Recruitment tools with applicant tracking",
          "📈 Performance analytics and reporting",
          "🔐 Role-based access control"
        ],
        challenge: "Ensuring data security while maintaining accessibility.",
        solution: "Implemented multi-factor authentication and granular permission controls."
      }
    },
    {
      id: 6,
      name: 'Journal Portal',
      category: 'Medical Software',
      description: 'An online hub for publishing, reviewing, and accessing academic journals and research articles with advanced search and citation tools.',
      image: journalPortalImg,
      details: {
        client: 'Medical Research Foundation',
        duration: '6 months',
        technologies: ['Python', 'Django', 'SQLite', 'Elasticsearch'],
        features: [
          "📝 Journal submission system with version control",
          "👨‍⚕️ Peer review workflow management",
          "🔎 Advanced article search with filters",
          "📑 Citation tools with multiple format support",
          "📊 Usage analytics for authors"
        ],
        challenge: "Managing complex peer review workflows.",
        solution: "Created a customizable workflow engine that adapts to different review processes."
      }
    }
  ];

  // Find the project with the matching ID
  const project = allProjects.find(proj => proj.id === parseInt(id));

  useEffect(() => {
    // Simulate loading if needed
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="project-details-page">
        <button onClick={() => navigate(-1)} className="back-button">
          <FiArrowLeft /> Back to Portfolio
        </button>
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <button onClick={() => navigate(-1)} className="back-button">
        <FiArrowLeft /> Back to Portfolio
      </button>
      
      <div className="project-header">
        <h1>{project.name}</h1>
        <h2 className="project-category">{project.category}</h2>
      </div>
      
      <div className="project-content">
        <div className="project-image-container">
          <img src={project.image} alt={project.name} className="project-image" />
        </div>
        
        <div className="project-info">
          <div className="project-description">
            <h2>Project Overview:</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-features">
            <h2>Key Features:</h2>
            <ul className="features-list">
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;