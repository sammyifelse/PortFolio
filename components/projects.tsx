"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Project type definition
type Project = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  videoPreviewUrl: string;
};

// Projects data
const projects: Project[] = [
  {
    title: 'Healthcare SaaS Platform',
    description: 'Designed and implemented a responsive SaaS platform using Next.js and Tailwind CSS. It streamlined patient self-registration and provided a secure doctor dashboard. Version 1 successfully onboarded over 500 patient registrations, with a pricing model for small clinics. Currently working on Version 2 with enhanced real-time backend integration using API routes.',
    technologies: ['Next.js','Node.js','MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://drive.google.com/drive/folders/16UTP3RkcZu4MjSflkuF0HIRcpixBpjYK',
    githubUrl: 'https://github.com/sammyifelse/Clinic-Site-',
    videoPreviewUrl: ''
  },
  {
    title: 'MedCare: Digital Healthcare',
    description: 'Developed a secure web application for comprehensive patient data management. This platform integrated user authentication (JWT) and role-based access for doctors and receptionists. It also featured an analytics dashboard to help visualize patient health trends, enhancing decision-making capabilities for medical professionals.',
    technologies: ['React.js','Ruby On Rails', 'Node.js', 'PostgreSQL', 'JWT'],
    demoUrl: 'https://drive.google.com/drive/folders/1fAg_0WDkx0HVxOZNgP5X_x7MZcDpwi6y',
    githubUrl: 'https://github.com/sammyifelse/Med-Care',
    videoPreviewUrl: '#'
  },
  {
    title: 'BuzzFeed Clone',
    description: 'Created a full-stack news platform using React.js, Node.js, and Express.js. It implemented real-time content updates and CMS integration. Designed categorized content filtering for tech, sports, entertainment, and more, focusing on delivering a smooth, user-friendly news consumption experience.',
    technologies: ['React.js', 'Node.js', 'Express.js'],
    demoUrl: 'https://drive.google.com/file/d/1KWKuzkHKkSBg7-P4nqgGXgR27DBsrUyU/view',
    githubUrl: 'https://github.com/sammyifelse/News-Web',
    videoPreviewUrl: '#'
  }
];

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation values (adjust the divisor to control rotation intensity)
    setRotate({ x: y / 20, y: -x / 20 });
  };
  
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  
  return (
    <motion.div 
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg"
      style={{ 
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      animate={{ 
        rotateX: rotate.x, 
        rotateY: rotate.y,
        boxShadow: rotate.x !== 0 ? "0px 10px 25px rgba(0, 0, 0, 0.1)" : "0px 4px 10px rgba(0, 0, 0, 0.05)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center text-gray-500 dark:text-gray-400">
          <span className="text-3xl">🎥</span>
        </div>
        
        <motion.h3 
          className="text-2xl font-bold text-portfolio-primary dark:text-portfolio-secondary mb-3"
          style={{ transform: "translateZ(30px)" }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          style={{ transform: "translateZ(15px)" }}
        >
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-portfolio-primary dark:text-portfolio-secondary text-sm rounded-full">
              {tech}
            </span>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex space-x-3"
          style={{ transform: "translateZ(25px)" }}
        >
          <Button asChild variant="outline" size="sm" className="flex items-center gap-2 dark:border-gray-600 dark:text-gray-300">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="sm" className="flex items-center gap-2 dark:border-gray-600 dark:text-gray-300">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  useEffect(() => {
    console.log('Projects section mounted');
  }, []);

  return (
    <Container id="projects" className="bg-white dark:bg-slate-900 engineering-pattern">
      <SectionHeading title="My Projects" subtitle="Selected works I've built" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
