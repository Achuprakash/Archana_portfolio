import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import Skills from './Skills.jsx';
import './App.css';

// Define the base URL for assets if running in a production-like environment (Vite/GitHub Pages)
const BASE_URL = import.meta.env.BASE_URL || '/'; 

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
      linkedin: "https://www.linkedin.com/in/archanajayaprakash30/",
      behance: "https://www.behance.net/achuprakash",
    },
  };

  // ⭐️ FIX: skillsData is now an empty array. 
  // This removes all categorized skills from the Skills section. ⭐️
  const skillsData = [];

  // ----------------------------------------------------------------
  // UPDATED PROJECTS DATA (Retained for context)
  // ----------------------------------------------------------------
  const projects = [
    {
      title: "Mythify",
      description:
        "A mobile app prototype that enhances children’s storytelling experiences through intuitive UI and engaging features.",
      image: `${BASE_URL}/Desktop-126(1).jpg`, 
      technologies: ["Figma", "UI/UX", "Prototyping"],
      behanceLink: 'https://www.behance.net/gallery/234356697/Mythify-The-story-app', 
      link: "#",
      github: "#",
    },
    // --- POS PROJECT ---
    {
      title: "POS - Point of Sales Application UI",
      description:
        "This POS app helps restaurant staff and guests interact easily, making ordering and payments quick. It improves workflow for better customer satisfaction and business growth.",
      image: `${BASE_URL}/Desktop-20.jpg`,
      technologies: ["Figma", "UI Design", "Information Architecture"],
      behanceLink:'https://www.behance.net/gallery/235350793/POS-Point-of-sales-App',
      link: "#",
      github: "#",
    },
    //healt care app
    {
      title: "Dr.check-Healtcare and Management",
      description:
        "Dr.Check is an intuitive and reliable web-based doctor appointment booking platform designed to simplify and modernize the way patients connect with healthcareprofessionals. Whether for a routine check-up or a specialist consultation, Dr.Check ensures a seamless experience from booking to post-visit care — all in one place",
      image: `${BASE_URL}/Drcheck.jpg`,
      technologies: ["Figma", "UI Design", "Information Architecture"],
      behanceLink:'https://www.behance.net/gallery/236149405/Dr-check-Hospital-Management',
      link: "#",
      github: "#",
    },
    // ----------------------------------
    {
      title: "Betta Fish Garment Design",
      description:
        "Designed and developed garments around the theme of Betta fish, combining fashion technology with functional design.",
      technologies: ["Illustrator", "Photoshop", "Fashion Tech"],
      image: `${BASE_URL}/betta_fish.jpg`,
      behanceLink: null,
      link: "#",
      github: "#",
    },
  ];
// ----------------------------------------------------------------

  // --- Certification Data Object (Retained for context) ---
  const certificationData = {
    title: "UI/UX Design Certification – IITM GUVI",
    description: "a professional UI/UX certification, building expertise in user research, wireframing, prototyping, and design thinking. This certification provides a strong foundation for user-centric design principles.",
    image: `${BASE_URL}/GuviCertification.png`, 
    link: 'https://v2.zenclass.in/certificateDownload/SJWA0zyV9ixJkE4j?download=true', 
  }
  // --------------------------------------

  // --- General Behance Banner Data (Retained for context) ---
  const behanceBanner = {
    image: `${BASE_URL}behance-banner.jpg`, 
    link: 'YOUR_BEHANCE_PROFILE_LINK',
  };
  // ---------------------------------

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
            {[
              "Home",
              "About",
              "Projects",
              "Skills",
              "Internship",
              "Certification",
              "Resume",
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
                <span className="hero-greeting">Hi ARCHANA👋</span>
                <h1 className="hero-title">
                  I'm {resumeData.name},
                  <span className="hero-subtitle">{resumeData.title}</span>
                </h1>
                <p className="hero-summary">{resumeData.summary}</p>

                {/* Contact Links */}
                <div className="contact-links mt-4 space-y-2 text-gray-400">
                  {/* Email */}
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-amber-400" />
                    <a
                      href={`mailto:${resumeData.contact.email}`}
                      className="text-current hover:text-amber-500 transition-colors break-all"
                    >
                      {resumeData.contact.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-amber-400" />
                    <a
                      href={`tel:${resumeData.contact.phone}`}
                      className="text-current hover:text-amber-500 transition-colors"
                    >
                      {resumeData.contact.phone}
                    </a>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-amber-400" />
                    <span>{resumeData.contact.location}</span>
                  </div>

                  {/* LinkedIn */}
                  {resumeData.contact.linkedin && (
                    <div className="flex items-center space-x-2">
                      <Linkedin size={16} className="text-amber-400" />
                      <a
                        href={resumeData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-current hover:text-amber-500 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  )}

                  {/* Behance */}
                  {resumeData.contact.behance && (
                    <div className="flex items-center space-x-2">
                      <ExternalLink size={16} className="text-amber-400" />
                      <a
                        href={resumeData.contact.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-current hover:text-amber-500 transition-colors"
                      >
                        Behance
                      </a>
                    </div>
                  )}

                  {/* GitHub (optional) */}
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
              
              {/* ⭐️ Resume Actions: This structure is correct for stacking with the updated CSS. ⭐️ */}
              <section id="resume" className="section">
                {/* section-header kept for structure, but is empty */}
                <div className="section-header"></div> 

                {/* The 'hero-actions' class controls the stacking/full width on mobile. */}
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
              </section>
              {/* END OF RESUME ACTIONS FIX */}

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
                      
                    <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-list">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-item">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </section>

          {/* Skills Section - The categorized list will now be empty, but the marquee will remain (based on your Skills.jsx code) */}
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

          {/* Certification Section */}
          <section id="certification" className="section">
            <div className="section-header">
              <h2 className="section-title">Certification</h2>
            </div>
            <div className="project-card project-card-banner"> 
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
                         <div className="project-banner-overlay" style={{opacity: 0.9, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                              <span className="banner-cta" style={{color: 'white'}}>Click Image to Expand Certificate →</span>
                         </div>
                    </a>
                )}
                
                <div className="project-content">
                    <h3>{certificationData.title}</h3>
                    <p>{certificationData.description}</p>
                    
                    {/* ⭐️ FIX APPLIED: Using the .btn class on the link makes it full-width on mobile ⭐️ */}
                    <a
                        href={certificationData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary mt-4" // Use btn to get full-width style
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