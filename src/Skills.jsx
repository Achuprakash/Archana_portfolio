import React from 'react';
import './Skills.css'; // Assuming you have a CSS file for your styles

// ----------------------------------------------------------------------
// 1. Tool Data
// IMPORTANT: Update the 'image' paths to where your logo files are located.
// If using the 'public' folder, paths should start from the root (e.g., /images/photoshop.png)
// ----------------------------------------------------------------------
// In Skills.js

const BASE_PATH = '/Archana-portfolio'; // Define the base path once

const tools = [
  // Append the BASE_PATH to the start of every image path
  { image: `${BASE_PATH}/icon/photoshop.png` },
  {  image: `${BASE_PATH}/icon/Ai.png` },
  { image: `${BASE_PATH}/icon/Figma.png` },
  // NOTE: I'm assuming you renamed 'M iro.png' to 'miro.png' for simplicity
  {  image: `${BASE_PATH}/icon/Miro.png` }, 
  { image: `${BASE_PATH}/icon/framer.png` },
  {  image: `${BASE_PATH}/icon/maze.png` },
];

// ... rest of your component remains the same ...

// Duplicate the array multiple times (e.g., 3x) for a seamless loop.
// The content should be long enough to fill the screen twice before it repeats.
const marqueeContent = [...tools, ...tools, ...tools];

// ----------------------------------------------------------------------
// 2. Individual Card Component (Helper)
// ----------------------------------------------------------------------
const ToolCard = ({ tool }) => (
  <div className="tool-card">
    {/* You could wrap the image in a div if you need more complex styling */}
    <img src={tool.image} alt={tool.name} className="tool-image" />
    <p className="tool-name">{tool.name}</p>
  </div>
);

// ----------------------------------------------------------------------
// 3. Main Skills Component
// ----------------------------------------------------------------------
const Skills = () => {
  return (
    <section id="skills-section">
      <h1>My Skills & Tools</h1>
      
      {/* ... your other skills (Design, Development, etc.) ... */}

      <div className="tools-sub-section">
       
        
        {/* The Marquee Container */}
        <div className="marquee-container">
          {/* The content that gets animated */}
          <div className="marquee-content">
            {marqueeContent.map((tool, index) => (
              // Use a unique key for each duplicated card
              <ToolCard key={`${tool.name}-${index}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;