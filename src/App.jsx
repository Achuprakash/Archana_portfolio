import React from 'react';
import { Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Award, Smartphone, Globe } from 'lucide-react';
import Skills from './Skills.jsx';
import './App.css';

const BASE_URL = import.meta.env.BASE_URL || '/';

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon-wrapper">
        <Icon size={32} className="service-icon" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="section-header">
        <h2 className="section-title">Services</h2>
      </div>

      <div className="services-grid">
        <ServiceCard
          icon={Smartphone}
          title="App Design"
          description="Designing easy-to-use and attractive mobile/web interfaces that focus on accessibility and user enjoyment."
        />
        <ServiceCard
          icon={Globe}
          title="Web Design"
          description="Building clean, responsive websites emphasizing clear navigation, visual balance, and modern layouts."
        />
      </div>
    </section>
  );
}

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
    education: {
      degree: "B.Tech in Fashion Technology",
      institution: "Kumaraguru College of Technology",
      years: "2021 - 2025",
      details:
        "Focused on garment production, textile science, and functional apparel design, developing a strong foundation in design thinking and problem-solving.",
    },
    internship: {
      title: "Internship Trainee - Technosports",
      duration: "July - Aug 2024",
      details:
        "Completed a one-month internship at Technosport, Tiruppur, focusing on performance apparel and innovation. Gained hands-on experience in fabric selection, quality analysis, and merchandising while enhancing skills in functional design, trend analysis, and user-centered apparel development. Worked with Adobe Illustrator and Photoshop to create technical sketches and product designs.",
    },
  };

  const skillsData = [];

  const projects = [
    {
      title: "Mythify",
      description:
        "A mobile app prototype that enhances children’s storytelling experiences through intuitive UI and engaging features.",
      image: `${BASE_URL}/Desktop-126(1).jpg`,
      technologies: ["Figma", "UI/UX", "Prototyping"],
      behanceLink: "https://www.behance.net/gallery/234356697/Mythify-The-story-app",
    },
    {
      title: "POS - Point of Sales Application UI",
      description:
        "This POS app helps restaurant staff and guests interact easily, making ordering and payments quick. It improves workflow for better customer satisfaction and business growth.",
      image: `${BASE_URL}/Desktop-20.jpg`,
      technologies: ["Figma", "UI Design", "Information Architecture"],
      behanceLink: "https://www.behance.net/gallery/235350793/POS-Point-of-sales-App",
    },
    {
      title: "Dr.Check - Healthcare and Management",
      description:
        "A reliable doctor appointment booking platform designed to simplify the way patients connect with healthcare professionals, from booking to post-visit care.",
      image: `${BASE_URL}/Drcheck.jpg`,
      technologies: ["Figma", "UI Design", "Information Architecture"],
      behanceLink: "https://www.behance.net/gallery/236149405/Dr-check-Hospital-Management",
    },
    {
      title: "Betta Fish Garment Design",
      description:
        "Designed and developed garments around the theme of Betta fish, combining fashion technology with functional design.",
      technologies: ["Illustrator", "Photoshop", "Fashion Tech"],
      image: `${BASE_URL}/betta_fish.jpg`,
    },
  ];

  const certificationData = {
    title: "UI/UX Design Certification – IITM GUVI",
    issuer: "IITM GUVI",
    link: "https://v2.zenclass.in/certificateDownload/SJWA0zyV9ixJkE4j?download=true",
    duration: "Dec 2024 - Feb 2025",
    description:
      "Completed a professional UI/UX certification, building expertise in user research, wireframing, prototyping, and design thinking. This certification provides a strong foundation for user-centric design principles.",
  };

  return (
    <div className="portfolio-container">
      {/* ✅ Navbar Updated */}
      <nav className="nav">
        <div className="nav-content">
          <a href="#" className="nav-logo">
            {resumeData.name}
          </a>
          <ul className="nav-links">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Skills", link: "#skills" },
              { name: "Services", link: "#services" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <a href={item.link} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}

            {/* ✅ Resume direct download link */}
            <li>
              <a
                href={`${BASE_URL}Archana_resume.pdf`}
                download="Archana_Resume.pdf"
                className="nav-link"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section id="home" className="hero-section">
            <div className="hero-grid">
              <div className="hero-content">
                <span className="hero-greeting">Hi ARCHANA 👋</span>
                <h1 className="hero-title">
                  I'm {resumeData.name},
                  <span className="hero-subtitle">{resumeData.title}</span>
                </h1>
                <p className="hero-summary">{resumeData.summary}</p>

                {/* Contact Links */}
                <div className="contact-links mt-4 space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-amber-400" />
                    <a
                      href={`mailto:${resumeData.contact.email}`}
                      className="text-current hover:text-amber-500 transition-colors break-all"
                    >
                      {resumeData.contact.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-amber-400" />
                    <a
                      href={`tel:${resumeData.contact.phone}`}
                      className="text-current hover:text-amber-500 transition-colors"
                    >
                      {resumeData.contact.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-amber-400" />
                    <span>{resumeData.contact.location}</span>
                  </div>

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

                  {resumeData.contact.behance && (
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-behance text-amber-400"
                      >
                        <path d="M19 6c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2Z" />
                        <path d="M19 12c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2Z" />
                        <path d="M19 18c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2Z" />
                        <path d="M11 12H3" />
                        <path d="M11 18H3" />
                        <path d="M11 6H3" />
                      </svg>
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
                </div>
              </div>

              {/* Profile Image */}
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <img
                    src={`${BASE_URL}archana-profile.jpg`}
                    alt="Archana J - UI/UX Designer"
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section">
            <div className="section-header">
              <h2 className="section-title">About Me & Journey</h2>
              <p className="section-subtitle">
                My background in Fashion Technology, professional training, and career shift to UI/UX design.
              </p>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <GraduationCap size={24} className="text-amber-400" />
                <div>
                  <h3>{resumeData.education.degree}</h3>
                  <p className="text-gray-400">
                    {resumeData.education.institution} | {resumeData.education.years}
                  </p>
                </div>
              </div>
              <p className="mt-2">{resumeData.education.details}</p>
            </div>

            <div className="experience-card mt-6">
              <div className="experience-header">
                <Briefcase size={24} className="text-amber-400" />
                <div>
                  <h3>{resumeData.internship.title}</h3>
                  <p className="text-gray-400">Technosport | {resumeData.internship.duration}</p>
                </div>
              </div>
              <p className="mt-2">{resumeData.internship.details}</p>
            </div>

            <div className="experience-card mt-6">
              <div className="experience-header">
                <Award size={24} className="text-amber-400" />
                <div>
                  <h3>{certificationData.title}</h3>
                  <p className="text-gray-400">
                    {certificationData.issuer} | {certificationData.duration}
                  </p>
                </div>
              </div>
              <p className="mt-2">{certificationData.description}</p>
              <a
                href={certificationData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-amber-500 hover:text-amber-400 transition-colors inline-block"
              >
                Verify Certificate →
              </a>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="section">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">Some of my key works in UI/UX and Fashion Tech.</p>
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
                      className: `project-card ${isBannerCard ? 'project-card-banner' : ''}`,
                    }
                  : { className: "project-card" };

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

          <Skills skillsData={skillsData} />
          <Services />

          {/* Contact */}
          <section id="contact" className="contact-section">
            <h2 className="contact-title">Let’s Connect</h2>
            <p className="contact-subtitle">
              I’m open to collaborations and internship opportunities in UI/UX design.
            </p>
            <a href={`mailto:${resumeData.contact.email}`} className="btn btn-primary">
              Send an Email
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
