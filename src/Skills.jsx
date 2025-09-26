import React from 'react';
import './Skills.css'; 

// Fix 1: Use the Vite environment variable BASE_URL for correct asset pathing, 
// ensuring it works both locally and on GitHub Pages (Vite's default deployment target).
const BASE_URL = import.meta.env.BASE_URL || '/';

// ----------------------------------------------------------------------
// 1. Tool Data for Marquee (Internal to Skills.jsx)
// ----------------------------------------------------------------------
// IMPORTANT: Add 'name' back to the tool objects for the ToolCard component's alt tag.
// We use BASE_URL here to correctly handle the public asset path.
const marqueeTools = [
  { name: "Photoshop", image: `${BASE_URL}icon/photoshop.png` },
  { name: "Illustrator", image: `${BASE_URL}icon/Ai.png` }, // Assuming Ai.png for Illustrator
  { name: "Figma", image: `${BASE_URL}icon/Figma.png` },
  { name: "Miro", image: `${BASE_URL}icon/Miro.png` },
  { name: "Framer", image: `${BASE_URL}icon/framer.png` },
  { name: "Maze", image: `${BASE_URL}icon/maze.png` },
];

// Duplicate the array multiple times (e.g., 3x) for a seamless loop.
const marqueeContent = [...marqueeTools, ...marqueeTools, ...marqueeTools];

// ----------------------------------------------------------------------
// 2. Individual Card Component (Helper)
// ----------------------------------------------------------------------
// Fix 2: Ensure the component receives 'tool' and uses 'tool.name' in the alt tag.
const ToolCard = ({ tool }) => (
  <div className="tool-card">
    <img src={tool.image} alt={`${tool.name} Icon`} className="tool-image" />
    <p className="tool-name">{tool.name}</p> 
  </div>
);

// ----------------------------------------------------------------------
// 3. Main Skills Component (Now accepts and uses skillsData from App.jsx)
// ----------------------------------------------------------------------
// Fix 3: The component must accept the 'skillsData' prop.
const Skills = ({ skillsData }) => {
  return (
    <section id="skills" className="section"> 
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Core UI/UX, Design Software, and other relevant abilities.</p>
      </div>

      {/* MARQUEE SECTION (for visual tool icons) */}
      <div className="tools-marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-content">
              {marqueeContent.map((tool, index) => (
                <ToolCard 
                    key={`${tool.name}-${index}`} 
                    tool={tool} 
                />
              ))}
            </div>
          </div>
      </div>
      
      {/* CATEGORIZED LIST SECTION (for detailed skills list from App.jsx) */}
      <div className="categorized-skills-grid">
        {/* Fix 4: Map through the categorized data passed from App.jsx */}
        {skillsData.map((categoryData, catIndex) => (
          <div key={catIndex} className="skill-category-card">
            <h3>{categoryData.category}</h3>
            <ul className="skill-list">
              {/* Handles both objects (with images) and simple strings */}
              {categoryData.skills.map((skill, skillIndex) => {
                const name = typeof skill === 'string' ? skill : skill.name;
                // Prepend BASE_URL to the image path if it exists
                const image = typeof skill === 'object' && skill.image ? `${skill.image}` : null;
                
                return (
                  <li key={`${catIndex}-${skillIndex}`} className="skill-item">
                    {/* Render image only if it exists in the data object */}
                    {image && (
                        <img 
                            src={image} 
                            alt={name} 
                            className="skill-icon-list" 
                        />
                    )}
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;