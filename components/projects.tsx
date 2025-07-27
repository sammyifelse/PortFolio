"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. Define your project data here
const projectsData = [
    {
    title: " ResumePard - AI-Powered Resume Matcher",
    year: "2025",
    description: "AI-powered tool for recruiters to parse, match, and rank resumes against job descriptions using NLP.",
    liveUrl: "", 
    githubUrl: "", 
  },
  {
    title: "Healthcare SaaS Platform",
    year: "2025",
    description: "Designed & implemented a Healthcare SaaS Platform, securing over 700 patient registrations for small clinics. This platform is now used by 3 fully established clinics and healthcare centers.",
    liveUrl: "https://drive.google.com/drive/folders/16UTP3RkcZu4MjSflkuF0HIRcpixBpjYK", 
    githubUrl: "https://github.com/sammyifelse/Clinic-Site-", 
  },
  {
    title: "Network Security IDS Simulator",
    year: "2024",
    description: "A graphical simulation of a cybersecurity IDS showing attack visualizations and response alerts.",
    liveUrl: "https://drive.google.com/drive/folders/1ZYud0bmziBeZ_BBu2w7NP-bWe2QlX1AW",
    githubUrl: "https://github.com/sammyifelse/IDS-Env",
  },
  {
    title: "MedCare: Digital Healthcare",
    year: "2024",
    description: "Developed a secure and comprehensive patient data management application. This platform integrated user authentication with JWT and provided real-time data access.",
    liveUrl: "https://drive.google.com/drive/folders/1fAg_0WDkx0HVxOZNgP5X_x7MZcDpwi6y",
    githubUrl: "https://github.com/sammyifelse/Med-Care",
  },
  {
    title: "BuzzFeed",
    year: "2023",
    description: "Created a full-stack news platform using Next.js and Express.js. It implemented real-time content updates and user authentication with JWT.",
    liveUrl: "https://drive.google.com/file/d/1KWKuzkHKkSBg7-P4nqgGXgR27DBsrUyU/view",
    githubUrl: "https://github.com/sammyifelse/News-Web",
  },
];

// A small component for the external link icon
const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);


export function Projects() {
  return (
    <Container id="projects" className="py-24">
      <SectionHeading 
        title="Recent Works" 
        subtitle="A selection of projects that I'm proud of"
      />
      
      <div className="max-w-4xl mx-auto space-y-12">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
              <span className="text-lg text-gray-500 dark:text-gray-400">/ {project.year}</span>
            </div>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex items-center gap-6">
              <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-lg font-semibold text-portfolio-primary dark:text-portfolio-secondary hover:underline">
                PREVIEW <ExternalLinkIcon />
              </Link>
              <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-lg font-semibold text-portfolio-primary dark:text-portfolio-secondary hover:underline">
                GITHUB <ExternalLinkIcon />
              </Link>
            </div>

            {/* Add a divider line, but not after the last project */}
            {index < projectsData.length - 1 && (
              <hr className="mt-12 border-gray-200 dark:border-gray-700" />
            )}
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
