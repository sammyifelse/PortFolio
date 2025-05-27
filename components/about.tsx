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
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm Samarjit Thakuria,Full Stack Developer & Engineer passionate about crafting impactful digital experiences. 
            I specialize in building scalable, efficient, and user-friendly applications from concept to deployment, 
            always with a focus on clean code.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-portfolio-primary dark:text-portfolio-secondary">Key Contributions:</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Open Source</h4>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Active member of <strong>Plone Open Source</strong>, where I enhance CMS functionalities and optimize core processes, 
                contributing to approximately <strong>40%</strong> efficiency gains in content delivery and backend processing.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Impactful Project</h4>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Designed & implemented a Healthcare SaaS Platform, securing over <strong>700</strong> patient registrations for small clinics. 
                This platform is now used by <strong>3</strong> fully established clinics and healthcare centers. 
                This business idea also garnered prizes at various startup pitching events.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
