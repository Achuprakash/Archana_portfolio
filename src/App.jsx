import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'; // Added ExternalLink icon
import Skills from './Skills.jsx';
import './App.css';

// Define the base URL for assets if running in a production-like environment (Vite/GitHub Pages)
const BASE_URL = import.meta.env.BASE_URL || '/'; 

// Component for a Project Card Link/Button
const ProjectLink = ({ href, children }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-link"
    >
        {children}
        <ExternalLink size={16} />
    </a>
);


export default function App() {
  const resumeData = {
    name: "ARCHANA J",
    title: "UI/UX Designer | Fashion Technology Graduate",
    summary:
      "A passionate and creative Fashion Technology graduate transitioning into UI/UX design, eager to apply design principles and user-centric thinking to digital experiences. Skilled in wireframing, prototyping, and user research, with a keen eye for usability.",
    contact: {
      email: "jarchu54@gmail.com",
      phone: "7397505544",
      location: "Tiruppur, Tamil Nadu",
      linkedin: "archana-j",
      github: "archana-ux",
    },
  };

  // Skills data remains empty for now
  const skillsData = [];

  // ----------------------------------------------------------------
  // UPDATED PROJECTS DATA (Using consistent link structure)
  // ----------------------------------------------------------------
  const projects = [
    {
      title: "Mythify",
      description:
        "A mobile app prototype that enhances children’s storytelling experiences through intuitive UI and engaging features.",
      image: `${BASE_URL}/Desktop-126(1).jpg`, 
      technologies: ["Figma", "UI/UX", "Prototyping"],
      behanceLink: 'https://www.behance.net/gallery/234356697/Mythify-The-story-app', 
      github: "#", // Add relevant link if needed
    },
    // --- POS PROJECT ---
    {
      title: "POS - Point of Sales Application UI",
      description:
        "This POS app helps restaurant staff and guests interact easily, making ordering and payments quick. It improves workflow for better customer satisfaction and business growth.",
      image: `${BASE_URL}/Desktop-20.jpg`,
      technologies: ["Figma", "UI Design", "Information Architecture"],
      behanceLink:'https://www.behance.net/gallery/235350793/POS-Point-of-sales-App',
      github: "#", // Add relevant link if needed
    },
    //healt care app
    {
      title: "Dr.check-Healthcare and Management",
      description:
        "Dr.Check is an intuitive and reliable web-based doctor appointment booking platform designed to simplify and modernize the way patients connect with healthcare professionals.",
      image: `${BASE_URL}/Drcheck.jpg`,
      technologies: ["Figma", "UI Design", "Information Architecture"],
      behanceLink:'https://www.behance.net/gallery/236149405/Dr-check-Hospital-Management',
      github: "#", // Add relevant link if needed
    },
    // ----------------------------------
    {
      title: "Betta Fish Garment Design",
      description:
        "Designed and developed garments around the theme of Betta fish, combining fashion technology with functional design. This card has no image/banner.",
      technologies: ["Illustrator", "Photoshop", "Fashion Tech"],
      image: null, 
      behanceLink: null,
      github: "#",
    },
  ];
// ----------------------------------------------------------------

  // --- Certification Data Object ---
  const certificationData = {
    title: "UI/UX Design Certification – IITM GUVI",
    description: "A professional UI/UX certification, building expertise in user research, wireframing, prototyping, and design thinking. This provides a strong foundation for user-centric design principles.",
    image: `${BASE_URL}/GuviCertification.png`, 
    link: 'https://v2.zenclass.in/certificateDownload/SJWA0zyV9ixJkE4j?download=true', 
  }
  // --------------------------------------

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="nav">
        {/* ... (Navbar content remains the same) ... */}
        <div className="nav-content">
          <a href="#" className="nav-logo">
            {resumeData.name}
          </a>
          <ul className="nav-links">
            {/* ... (Navigation links remain the same) ... */}
            {[
              "Home",
              "Projects",
              "Skills",
              "Internship",
              "Certification",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section id="home" className="hero-section">
            <div className="hero-grid">
              <div className="hero-content">
                {/* ... (Hero content, title, summary) ... */}
                <span className="hero-greeting">Hi ARCHANA👋</span>
                <h1 className="hero-title">
                  I'm {resumeData.name},
                  <span className="hero-subtitle">{resumeData.title}</span>
                </h1>
                <p className="hero-summary">{resumeData.summary}</p>

                {/* Contact Links (Moved into hero section as per previous CSS structure) */}
                <div className="contact-links mt-4 space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-amber-400" />
                    <a href={`mailto:${resumeData.contact.email}`} className="text-current hover:text-amber-500 transition-colors">
                      {resumeData.contact.email}
                    </a>
                  </div>
                  {/* ... (Other contact links) ... */}
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-amber-400" />
                    <a href={`tel:${resumeData.contact.phone}`} className="text-current hover:text-amber-500 transition-colors">
                      {resumeData.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-amber-400" />
                    <span>{resumeData.contact.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Linkedin size={16} className="text-amber-400" />
                    <a
                      href={`https://linkedin.com/in/${resumeData.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-current hover:text-amber-500 transition-colors"
                    >
                      linkedin.com/in/{resumeData.contact.linkedin}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Github size={16} className="text-amber-400" />
                    <a
                      href={`https://github.com/${resumeData.contact.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-current hover:text-amber-500 transition-colors"
                    >
                      github.com/{resumeData.contact.github}
                    </a>
                  </div>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <img
                    src={`${BASE_URL}archana-profile.jpg`} 
                    alt="Archana J - UI/UX Designer"
                    className="hero-image"
                  />
                </div>
              </div>

              {/* Resume Actions (Now positioned outside of hero-content/grid to be full width below it) */}
              <div className="hero-actions"> 
                <a
                  href={`${BASE_URL}archana-resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View Resume
                </a>

                <a
                  href={`${BASE_URL}archana-resume.pdf`}
                  download="Archana_J_Resume.pdf"
                  className="btn btn-primary"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">
                Some of my key works in UI/UX and Fashion Tech.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => {
                const isBannerCard = project.image && project.behanceLink;
                const Wrapper = isBannerCard ? 'a' : 'div';
                const wrapperProps = isBannerCard
                  ? {
                      href: project.behanceLink,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: `project-card ${isBannerCard ? 'project-card-banner' : ''}`
                    }
                  : { 
                      className: "project-card" 
                    };

                return (
                  <Wrapper key={index} {...wrapperProps}>
                    {project.image && (
                      <div className="project-banner">
                        <img 
                          src={project.image} 
                          alt={`${project.title} Banner`} 
                          className="project-banner-img"
                        />
                        {isBannerCard && (
                          <div className="project-banner-overlay">
                            <span className="banner-cta">View Case Study →</span>
                          </div>
                        )}
                      </div>
                    )}
                      
                    <div className={isBannerCard ? "project-content" : undefined}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-list">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-item">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* Render links only for non-banner cards (Betta Fish) */}
                        {!isBannerCard && (
                            <div className="project-links">
                                <ProjectLink href={project.github}>GitHub</ProjectLink>
                            </div>
                        )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </section>

          {/* Skills Section - Now using the Skills component */}
          <Skills skillsData={skillsData} />

          {/* Internship Section */}
          <section id="internship" className="section">
            <div className="section-header">
              <h2 className="section-title">Internship</h2>
            </div>
            <div className="project-card">
              <h3>Internship Trainee - Technosports (July - Aug 2024)</h3>
              <p>
                Completed a one-month internship at Technosport, Tiruppur, focusing on performance apparel and innovation.
                Gained hands-on experience in fabric selection, quality analysis, and merchandising while enhancing skills in
                functional design, trend analysis, and user-centered apparel development. Worked with Adobe Illustrator and
                Photoshop to create technical sketches and product designs.
              </p>
            </div>
          </section>

          {/* Certification Section - Modified to use the CSS banner class */}
          <section id="certification" className="section">
            <div className="section-header">
              <h2 className="section-title">Certification</h2>
            </div>
            <div className="project-card-banner"> {/* Use the dedicated class */}
                {certificationData.image && (
                    <a 
                        href={certificationData.image} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-banner"
                        role="img" 
                        aria-label={`Click to view full image of ${certificationData.title}`}
                    >
                        <img 
                            src={certificationData.image} 
                            alt={`${certificationData.title} Certificate`} 
                            className="project-banner-img"
                        />
                         <div className="project-banner-overlay cert-overlay" style={{opacity: 0.9}}>
                              <span className="banner-cta">Click Image to Expand Certificate →</span>
                         </div>
                    </a>
                )}
                
                <div className="project-content">
                    <h3>{certificationData.title}</h3>
                    <p>{certificationData.description}</p>
                    <a
                        href={certificationData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary mt-4 inline-block"
                    >
                        Verify Certificate Externally
                    </a>
                </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="contact-section">
            <h2 className="contact-title">Let’s Connect</h2>
            <p className="contact-subtitle">
              I’m open to collaborations and internship opportunities in UI/UX design.
            </p>
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="btn btn-primary"
            >
              Send an Email
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}