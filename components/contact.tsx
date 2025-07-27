"use client";

import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

// --- SVG Icon Components ---
const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);
const LinkedinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

// Replace these with your EmailJS credentials
const EMAILJS_PUBLIC_KEY = "I7YUoT41-hhqVB--q";
const EMAILJS_TEMPLATE_ID = "template_1vilo8e";
const EMAILJS_SERVICE_ID = "service_lnp98eq";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  useEffect(() => {
    console.log('Contact section mounted');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Samarjit", 
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // UPDATED BACKGROUND: Clean and consistent with other sections
    <Container id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <SectionHeading 
        title="Get In Touch"
        subtitle="Let's build something great together"
      />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Contact Info & CTA on the left --- */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            Have a project in mind?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me directly or through my social profiles.
          </p>
          <div className="space-y-4">
            <a href="mailto:somarjeetthakuria@gmail.com" className="flex items-center gap-4 text-lg hover:text-portfolio-primary dark:hover:text-portfolio-secondary">
              <MailIcon />
              <span>somarjeetthakuria@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/samarjit-thakuria-96450727b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-portfolio-primary dark:hover:text-portfolio-secondary">
              <LinkedinIcon />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* --- Contact Form on the right --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input 
                id="name"
                name="name"
                type="text" 
                placeholder="Your Name" 
                required 
                className="p-6 text-lg" 
                value={formData.name}
                onChange={handleChange}
              />
              <Input 
                id="email"
                name="email"
                type="email" 
                placeholder="Your Email" 
                required 
                className="p-6 text-lg" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <Textarea 
              id="message"
              name="message"
              placeholder="Your Message" 
              required 
              rows={6} 
              className="p-6 text-lg" 
              value={formData.message}
              onChange={handleChange}
            />
            <Button 
              type="submit" 
              size="lg" 
              className="w-full p-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </Button>
          </form>
        </motion.div>

      </div>
    </Container>
  );
}
