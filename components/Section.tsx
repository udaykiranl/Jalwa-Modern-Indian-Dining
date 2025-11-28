import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 relative ${darker ? 'bg-neutral-900' : 'bg-jalwa-black'} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;