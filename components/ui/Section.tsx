import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

export function Section({ children, id, className = "", fullHeight = false }: SectionProps) {
  const heightClass = fullHeight ? "min-h-screen" : "min-h-[50vh]";
  
  return (
    <section 
      id={id} 
      className={`${heightClass} py-20 px-4 md:px-8 lg:px-16 relative ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

