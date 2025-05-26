"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Skill type definition
type Skill = {
  name: string;
  icon: string; // This will be a placeholder for now
};

// Skills categorized
const frontendSkills: Skill[] = [
  { name: 'JavaScript', icon: '🌐' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'jQuery', icon: '💻' },
  { name: 'HTML5/CSS3', icon: '🎨' },
  { name: 'Tailwind CSS', icon: '🎭' },
];

const backendSkills: Skill[] = [
  { name: 'Python', icon: '🐍' },
  { name: 'Django', icon: '🎸' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'Ruby on Rails', icon: '💎' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Oracle', icon: '☁️' },
  { name: 'C/C++', icon: '🔧' },
];

const toolsSkills: Skill[] = [
  { name: 'Git', icon: '📝' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Parrot OS', icon: '🦜' },
  { name: 'Plone CMS', icon: '📄' },
  { name: 'Cursor', icon: '🖱️' },
  { name: 'WindSurf', icon: '🏄' },
];

// Skill Card Component
function SkillCard({ skill }: { skill: Skill }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation values (adjust the divisor to control rotation intensity)
    setRotate({ x: y / 10, y: -x / 10 });
  };
  
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  
  return (
    <motion.div 
      className="skill-icon bg-blue-50 dark:bg-slate-800 dark:text-white transition-all cursor-pointer"
      style={{ 
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      animate={{ 
        rotateX: rotate.x, 
        rotateY: rotate.y,
        boxShadow: rotate.x !== 0 ? "0px 5px 15px rgba(0, 0, 0, 0.1)" : "none"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-3xl mb-2 transform-gpu" style={{ transform: "translateZ(20px)" }}>
        {skill.icon}
      </div>
      <span className="font-medium transform-gpu" style={{ transform: "translateZ(10px)" }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

export function Skills() {
  useEffect(() => {
    console.log('Skills section mounted');
  }, []);

  return (
    <Container id="skills" className="bg-gray-50 dark:bg-slate-900">
      <SectionHeading title="My Skills" subtitle="Technologies I work with" />
      
      <div className="space-y-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-portfolio-primary mb-6 text-center dark:text-portfolio-secondary">Frontend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-portfolio-primary mb-6 text-center dark:text-portfolio-secondary">Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-portfolio-primary mb-6 text-center dark:text-portfolio-secondary">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toolsSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl font-bold text-portfolio-primary mb-3 dark:text-portfolio-secondary">Languages</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">English, Hindi, Assamese</p>
        </motion.div>
      </div>
    </Container>
  );
}