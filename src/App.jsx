import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Star, Code, Globe } from 'lucide-react';
import Skills from './Skills';

export default function App() {
  const resumeData = {
    name: "ARCHANA J",
    title: "UI/UX Designer | Fashion Technology Graduate",
    summary: "A passionate and creative Fashion Technology graduate transitioning into UI/UX design, eager to apply design principles and user-centric thinking to digital experiences. Skilled in wireframing, prototyping, and user research, with a keen eye for usability.",
    contact: {
      email: "jarchu54@gmail.com",
      phone: "7397505544",
      location: "Tiruppur, Tamil Nadu",
      linkedin: "archana-j", // placeholder, replace with real
      github: "archana-ux",  // placeholder
    }
  };

  const skillsData = [
    {
      category: "UI/UX & Tools",
      skills: ["Figma", "Miro", "Wireframing", "Prototyping", "A/B Testing"]
    },
    {
      category: "Design Software",
      skills: ["Adobe Illustrator", "Adobe Photoshop", "AutoCAD (Basic)"]
    },
    {
      category: "Other Skills",
      skills: ["MS Excel", "Fashion Designing", "Trend Analysis", "Merchandising"]
    },
  ];

  const projects = [
    {
      title: "Mythify",
      description: "A mobile app prototype that enhances children’s storytelling experiences through intuitive UI and engaging features.",
      technologies: ["Figma", "UI/UX", "Prototyping"],
      link: "#",
      github: "#"
    },
    {
      title: "Betta Fish Garment Design",
      description: "Designed and developed garments around the theme of Betta fish, combining fashion technology with functional design.",
      technologies: ["Illustrator", "Photoshop", "Fashion Tech"],
      link: "#",
      github: "#"
    },
  ];

  return (
    <div className="portfolio-container">
      <nav className="nav">
        <div className="nav-content">
          <a href="#" className="nav-logo">{resumeData.name}</a>
          <ul className="nav-links">
            {['Home', 'About', 'Projects', 'Skills', 'Internship', 'Certification', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
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
                <span className="hero-greeting">Hi 👋</span>
                <h1 className="hero-title">
                  I'm {resumeData.name},
                  <span className="hero-subtitle">{resumeData.title}</span>
                </h1>
                <p className="hero-summary">{resumeData.summary}</p>

                {/* Contact */}
                <div className="contact-links mt-4 space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-amber-400" />
                    <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-amber-400" />
                    <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-amber-400" />
                    <span>{resumeData.contact.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Linkedin size={16} className="text-amber-400" />
                    <a href={`https://linkedin.com/in/${resumeData.contact.linkedin}`} target="_blank">linkedin.com/in/{resumeData.contact.linkedin}</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Github size={16} className="text-amber-400" />
                    <a href={`https://github.com/${resumeData.contact.github}`} target="_blank">github.com/{resumeData.contact.github}</a>
                  </div>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <img
                    src="archana-profile.jpg"
                    alt="Archana J - UI/UX Designer"
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="section">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">Some of my key works in UI/UX and Fashion Tech.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
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
                functional design, trend analysis, and user-centered apparel development.  
                Worked with Adobe Illustrator and Photoshop to create technical sketches and product designs.
              </p>
            </div>
          </section>

          {/* Certification Section */}
          <section id="certification" className="section">
            <div className="section-header">
              <h2 className="section-title">Certification</h2>
            </div>
            <div className="project-card">
              <h3>UI/UX Design Certification – IITM GUVI</h3>
              <p>
                Currently pursuing a professional UI/UX certification, building expertise in user research, 
                wireframing, prototyping, and design thinking.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="contact-section">
            <h2 className="contact-title">Let’s Connect</h2>
            <p className="contact-subtitle">I’m open to collaborations and internship opportunities in UI/UX design.</p>
            <a href={`mailto:${resumeData.contact.email}`} className="btn btn-primary">
              Send an Email
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
