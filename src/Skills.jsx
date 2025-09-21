import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './App.css'; // Assuming you have an App.css with general styles

export default function Skills({ skillsData }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="skills" className="skills-section section">
      <div className="section-header">
        <div className="section-title-container" onClick={() => setIsOpen(!isOpen)}>
          <h2 className="section-title">My Skills</h2>
          {isOpen ? <ChevronUp size={32} className="chevron-icon" /> : <ChevronDown size={32} className="chevron-icon" />}
        </div>
        <p className="section-subtitle">
          A summary of my technical skills and competencies.
        </p>
      </div>

      <div className={`skills-grid ${isOpen ? 'expanded' : 'collapsed'}`}>
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}