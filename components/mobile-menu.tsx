"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  
  const handleLinkClick = () => {
    setOpen(false);
    console.log('Mobile menu link clicked, closing menu');
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
        <nav className="flex flex-col space-y-6 mt-12">
          <Link 
            href="#about" 
            className="text-lg font-medium hover:text-portfolio-primary transition-colors" 
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link 
            href="#skills" 
            className="text-lg font-medium hover:text-portfolio-primary transition-colors" 
            onClick={handleLinkClick}
          >
            Skills
          </Link>
          <Link 
            href="#projects" 
            className="text-lg font-medium hover:text-portfolio-primary transition-colors" 
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link 
            href="#achievements" 
            className="text-lg font-medium hover:text-portfolio-primary transition-colors" 
            onClick={handleLinkClick}
          >
            Achievements
          </Link>
          <Link 
            href="#contact" 
            className="text-lg font-medium hover:text-portfolio-primary transition-colors" 
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          {/* <a 
            href="/resume.pdf" 
            download
            className="flex items-center text-lg font-medium text-portfolio-primary hover:text-portfolio-secondary transition-colors"
            onClick={handleLinkClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a> */}
        </nav>
      </SheetContent>
    </Sheet>
  );
}