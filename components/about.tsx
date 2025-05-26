"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function About() {
  useEffect(() => {
    console.log('About section mounted');
  }, []);

  return (
    <Container id="about" className="bg-white dark:bg-slate-900 engineering-pattern">
      <SectionHeading 
        title="About Me" 
        subtitle="Full Stack Developer with a passion for creating impactful digital experiences"
      />
      
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-portfolio-primary dark:text-portfolio-secondary">My Core Identity & Passion</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hello! I'm Samarjit Thakuria, a passionate Full Stack Developer and Engineer. 
            Driven by a deep love for creating impactful digital experiences, I thrive on bringing ideas to life from 
            conceptualization to deployment, building scalable, efficient, and user-friendly applications. 
            My focus is on clean code, collaborative environments, and leveraging technology to solve real-world problems.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-portfolio-primary dark:text-portfolio-secondary">Open Source Contribution</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            My dedication extends to the open-source community, where I am an active <strong>Member of Plone Open Source</strong>. 
            Within this enterprise-grade <strong>CMS</strong>, I actively contribute to improving its functionalities, 
            such as enhancing specific features or optimizing core aspects. My work includes contributing to processes 
            that have led to notable efficiencies, impacting areas like content delivery or backend processing by approximately <strong>40%</strong>. 
            This involvement reflects my commitment to collaborative development and contributing to robust, community-driven platforms.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-portfolio-primary dark:text-portfolio-secondary">Impactful Project Highlight</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            A notable achievement includes designing and implementing a <strong>Healthcare SaaS Platform</strong>. 
            This solution streamlined patient self-registration and offered a secure doctor dashboard, 
            securing over 500 patient registrations for small clinics in its initial version. 
            This project exemplifies my ability to build effective, user-centric web solutions from concept to successful deployment.
          </p>
        </motion.div>
      </div>
    </Container>
  );
}
