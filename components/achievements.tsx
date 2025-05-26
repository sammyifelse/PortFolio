"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Achievement type definition
type Achievement = {
  title: string;
  description: string;
  date: string;
  link?: string;
  icon: string;
};

// Achievements data
const achievements: Achievement[] = [
  {
    title: 'HacktoberFest 2023 Contributor',
    description: '4 PRs merged; among top 50,000 contributors. Awarded digital badge and tree planting honor.',
    date: '2023',
    link: 'https://www.holopin.io/userbadge/clnywju6h02000fme4g5ivqjl',
    icon: '🏆'
  },
  {
    title: 'Abacus Proficiency',
    description: 'Completed 11 levels of Abacus with 4+ years of experience.',
    date: 'Over 4+ years of experience',
    link: 'https://drive.google.com/file/d/1EebpkUuDCQ24ekYi70_t8GTK7KJ55O6a/view',
    icon: '🧮'
  },
  {
    title: 'Certified Python Programmer',
    description: 'Hackerrank Skill Certificate',
    date: '',
    link: 'https://www.hackerrank.com/certificates/ebb2ee9c2c58',
    icon: '🐍'
  }
];

export function Achievements() {
  useEffect(() => {
    console.log('Achievements section mounted');
  }, []);

  return (
    <Container id="achievements" className="bg-gray-50 dark:bg-slate-900 engineering-pattern">
      <SectionHeading title="Achievements & Certifications" />
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div 
            key={achievement.title} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-3xl">{achievement.icon}</span>
                  {achievement.date && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.date}</span>
                  )}
                </div>
                <CardTitle className="text-xl text-portfolio-primary dark:text-portfolio-secondary">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
                  {achievement.description}
                </CardDescription>
                {achievement.link && (
                  <Link 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-secondary hover:text-portfolio-primary dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                  >
                    <span>View Certificate</span>
                    <span>📜</span>
                  </Link>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
