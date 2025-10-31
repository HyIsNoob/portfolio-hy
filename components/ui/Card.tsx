import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  neonBorder?: "cyan" | "magenta" | "purple" | "none";
}

export function Card({ children, className = "", hover = true, neonBorder = "none" }: CardProps) {
  const baseStyles = "glass-effect rounded-xl p-6 transition-all duration-300";
  const hoverStyles = hover ? "hover:scale-[1.02] cursor-pointer" : "";
  
  const borderStyles = {
    cyan: "hover:border-neon-cyan/50 hover:neon-glow-cyan",
    magenta: "hover:border-neon-magenta/50 hover:neon-glow-magenta",
    purple: "hover:border-neon-purple/50 hover:neon-glow-purple",
    none: ""
  };

  return (
    <div className={`${baseStyles} ${hoverStyles} ${borderStyles[neonBorder]} ${className}`}>
      {children}
    </div>
  );
}

