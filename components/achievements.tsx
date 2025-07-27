"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

// --- SVG Icon Components ---
const TrophyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L12 6"></path>
    <path d="M12 22L12 18"></path>
    <path d="M20 12L16 12"></path>
    <path d="M4 12L8 12"></path>
    <path d="M18 18L15 15"></path>
    <path d="M6 6L9 9"></path>
    <path d="M18 6L15 9"></path>
    <path d="M6 18L9 15"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const CertificateIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
    <path d="M12 18v-6"></path>
    <path d="M9 15h6"></path>
  </svg>
);

const AbacusIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="8" y1="3" x2="8" y2="21"></line>
        <line x1="16" y1="3" x2="16" y2="21"></line>
    </svg>
);


// --- Achievements Data ---
const achievementsData = [
  {
    icon: <TrophyIcon />,
    year: "2023",
    title: "Hacktoberfest 2023 Contributor",
    description: "Achieved top contributor status with 4 PRs merged, earning a digital badge and recognition.",
    link: "#" // Replace with link to certificate or proof
  },
  {
    icon: <CertificateIcon />,
    year: "2023",
    title: "Certified Python Programmer",
    description: "Verified proficiency in Python through a comprehensive certification from HackerRank.",
    link: "#"
  },
  {
    icon: <AbacusIcon />,
    year: "2022",
    title: "Abacus Proficiency",
    description: "Completed 11 levels of Abacus training, demonstrating strong mental arithmetic and concentration skills.",
    link: "#"
  },
];

export function Achievements() {
  return (
    <Container id="achievements" className="py-24">
      <SectionHeading 
        title="Achievements & Certifications"
        subtitle="A few of my proudest accomplishments"
      />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((achievement, index) => (
          <motion.div 
            key={index}
            className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-portfolio-primary dark:text-portfolio-secondary">
                {achievement.icon}
              </div>
              <span className="font-semibold text-slate-500 dark:text-slate-400">{achievement.year}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">{achievement.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{achievement.description}</p>
            <Link href={achievement.link} target="_blank" className="font-semibold text-portfolio-primary dark:text-portfolio-secondary hover:underline">
              View Certificate →
            </Link>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
