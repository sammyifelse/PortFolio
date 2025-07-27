
"use client";

import { Container } from './ui/container';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


const processSteps = [
  {
    title: "01. UX / Wireframing",
    description: "It all starts with a conversation. I listen to your ideas and sketch out the core structure and user flow, ensuring the foundation of your project is intuitive and user-centric from the very beginning."
  },
  {
    title: "02. Design",
    description: "This is where I bring the vision to life visually. I create clean, modern designs and prototypes that focus on clarity, aesthetics, and making a strong first impression."
  },
  {
    title: "03. Development",
    description: "I dive into the code, building out the features with a focus on clean, maintainable, and performant practices. I love the challenge of turning a static design into a living, breathing application."
  },
  {
    title: "04. Web Analytics & Support",
    description: "Launch is just the beginning. I'll make sure your project is deployed smoothly and can provide ongoing support and analysis to help it grow and adapt over time."
  }
];


const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className={`w-5 h-5 transition-transform duration-300 text-slate-500 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export function Process() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <Container id="process" className="py-24 bg-white dark:bg-black">
      

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <motion.div 
          className="lg:sticky lg:top-24" // Makes the left column "stick" a bit on scroll
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            My way of getting things done
          </h2>
          {/* THE FIX: Updated with more personal text */}
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Building something great requires a solid plan. My workflow is transparent and methodical, ensuring every stage of the project, from initial concept to final deployment, is handled with precision and care. It's a partnership to bring your ideas to life.
          </p>
        </motion.div>

        {/* --- Right Column: Accordion List --- */}
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="border-b border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div 
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">{step.title}</h3>
                <ChevronIcon isOpen={activeIndex === index} />
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-md text-slate-500 dark:text-slate-500">
                      {step.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </Container>
  );
}
