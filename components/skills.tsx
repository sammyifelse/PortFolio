"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { motion } from 'framer-motion';
import React from 'react';

// --- SVG Icon Components ---
// I've created simple, clean SVG icons for each technology.
const ReactIcon = () => (
  <svg width="24" height="24" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextJsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="none">
    <path d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z" fill="black"/>
    <path d="M99.2821 104.949L53.959 39.5256H43.9128V88.4744H50.7077V48.4974L92.5179 104.949H99.2821Z" fill="white"/>
    <path d="M84.0872 88.4744V39.5256H77.2923V88.4744H84.0872Z" fill="white"/>
  </svg>
);

const NodeJsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.5,13.1l-3.8-2.2v-3l3.8-2.2c0.4-0.2,0.4-0.8,0-1l-8.3-4.8c-0.4-0.2-0.9,0.1-0.9,0.5v3l-3.8-2.2c-0.4-0.2-0.9,0.1-0.9,0.5v9.5c0,0.4,0.4,0.7,0.9,0.5l3.8-2.2v3l-3.8,2.2c-0.4,0.2-0.4,0.8,0,1l8.3,4.8c0.4,0.2,0.9-0.1,0.9-0.5v-3l3.8,2.2c0.4,0.2,0.9-0.1,0.9-0.5V13.6C23,13.2,22.7,12.9,22.5,13.1z M12.8,13.8v3.2L6.1,12l6.7-3.9V11l3.8,2.2L12.8,13.8z"/>
  </svg>
);

const JsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.4,14.2a2.1,2.1,0,0,1-2.1,1.3,2.4,2.4,0,0,1-1.6-.6,1.9,1.9,0,0,1-.6-1.5,1.6,1.6,0,0,1,.8-1.4,3.7,3.7,0,0,1,2.1-.5h.3v-.8a1.2,1.2,0,0,0-.8-.9,1.6,1.6,0,0,0-1.1-.3,2.2,2.2,0,0,0-1.7.7l-1-1.1a3.4,3.4,0,0,1,2.8-1.4,2.9,2.9,0,0,1,2.9,2.9v3.8Zm-6.8-.4a.7.7,0,0,1-.5.7,1.2,1.2,0,0,1-.8.2,1.6,1.6,0,0,1-1.6-1.6V11.4a1.6,1.6,0,0,1,1.6-1.6,1.5,1.5,0,0,1,1.6,1.6v.4H8.2v-.4a.7.7,0,0,0-.7-.8.7.7,0,0,0-.7.8v3.2a.7.7,0,0,0,.7.8.8.8,0,0,0,.7-.8v-.4h1.4Z"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);


// --- Skills Data with Icons ---
const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C / C++", icon: <CodeIcon /> },
      { name: "Python", icon: <span className="font-bold text-lg">Py</span> },
      { name: "JavaScript", icon: <JsIcon /> },
      { name: "TypeScript", icon: <JsIcon /> },
      { name: "Ruby", icon: <span className="font-bold text-lg">Rb</span> },
      { name: "PHP", icon: <span className="font-bold text-lg">Php</span> }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextJsIcon /> },
      { name: "HTML5/CSS3", icon: <CodeIcon /> },
      { name: "Tailwind CSS", icon: <span className="font-bold text-lg">T</span> },
      { name: "Framer Motion", icon: <span className="font-bold text-lg">F</span> }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <NodeJsIcon /> },
      { name: "Express.js", icon: <span className="font-bold text-lg">E</span> },
      { name: "Django", icon: <span className="font-bold text-lg">D</span> },
      { name: "PostgreSQL", icon: <span className="font-bold text-lg">Pg</span> },
      { name: "MongoDB", icon: <span className="font-bold text-lg">M</span> }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <span className="font-bold text-lg">G</span> },
      { name: "Docker", icon: <span className="font-bold text-lg">D</span> },
      { name: "Linux", icon: <span className="font-bold text-lg">L</span> },
      { name: "Vercel", icon: <span className="font-bold text-lg">V</span> },
      { name: "Heroku", icon: <span className="font-bold text-lg">H</span> }
    ]
  },
  {
    category: "Automation & AI",
    skills: [
      { name: "Langflow", icon: <span className="font-bold text-lg">Lf</span> },
      { name: "n8n", icon: <span className="font-bold text-lg">n8n</span> },
      { name: "Automation", icon: <span className="font-bold text-lg">A</span> }
    ]
  }
];

export function Skills() {
  return (
    <Container id="skills" className="py-24 bg-white dark:bg-slate-950"> 
      <SectionHeading 
        title="My Technical Toolkit"
        subtitle="The technologies I use to build modern web experiences"
      />
      
      <div className="max-w-5xl mx-auto space-y-16">
        {skillsData.map((group, groupIndex) => (
          <motion.div 
            key={groupIndex}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-portfolio-primary dark:text-portfolio-secondary md:text-right">
              {group.category}
            </h3>

            <div className="md:col-span-3 flex flex-wrap gap-4">
              {group.skills.map((skill, skillIndex) => (
                // --- New Skill Card Design ---
                <div 
                  key={skillIndex}
                  className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-slate-600 dark:text-slate-400">
                    {skill.icon}
                  </div>
                  <span className="text-md font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
