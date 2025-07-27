"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { motion } from 'framer-motion';
import RotatingWheel from './RotatingWheel'; 

// A new, stylized icon for the list
const CodeBulletIcon = () => (
  <svg className="w-6 h-6 text-portfolio-primary dark:text-portfolio-secondary flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
  </svg>
);

export function About() {
  return (
    // 1. THE FIX: Changed the background to match the hero section's gradient
    <Container id="about" className="py-24 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 engineering-pattern">
      <SectionHeading 
        title="About Me" 
        subtitle="My journey and passion for development"
      />
      
      {/* 2. THE FIX: Tighter layout with a smaller gap */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Text Content on the left --- */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a passionate Full Stack Developer with a knack for turning complex problems into elegant, user-friendly applications. My focus is on writing clean, scalable code and building digital experiences that make a real impact.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* 3. THE FIX: More prominent heading for contributions */}
            <h3 className="text-3xl font-bold mb-6 text-portfolio-primary dark:text-portfolio-secondary">Key Contributions:</h3>
            <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <CodeBulletIcon />
                <span>
                  Enhanced CMS functionalities for <strong>Plone Open Source</strong>, boosting content delivery efficiency by ~40%.
                </span>
              </li>
              <li className="flex items-start">
                <CodeBulletIcon />
                <span>
                  Led the design and implementation of a <strong>Healthcare SaaS Platform</strong>, successfully registering over 700 patients for multiple clinics.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* --- Rotating Wheel on the right --- */}
        <motion.div 
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <RotatingWheel />
        </motion.div>

      </div>
    </Container>
  );
}
