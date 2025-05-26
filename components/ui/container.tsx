import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = '', id }: ContainerProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
