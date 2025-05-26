"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { MobileMenu } from './mobile-menu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log('Header mounted, scroll state:', isScrolled);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 dark:bg-background/90 shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold gradient-text">Samarjit</Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-foreground hover:text-portfolio-primary transition-colors">About</Link>
          <Link href="#skills" className="text-foreground hover:text-portfolio-primary transition-colors">Skills</Link>
          <Link href="#projects" className="text-foreground hover:text-portfolio-primary transition-colors">Projects</Link>
          <Link href="#achievements" className="text-foreground hover:text-portfolio-primary transition-colors">Achievements</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 hidden sm:flex">
            <a href="/resume.pdf" download>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </span>
            </a>
          </Button>
          <Button asChild className="bg-portfolio-primary hover:bg-portfolio-secondary text-white hidden md:flex">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
