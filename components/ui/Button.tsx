import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function Button({ children, onClick, href, variant = "primary", className = "" }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "glass-effect text-neon-cyan border border-neon-cyan/50 hover:neon-glow-cyan hover:bg-neon-cyan/10",
    secondary: "glass-effect text-neon-magenta border border-neon-magenta/50 hover:neon-glow-magenta hover:bg-neon-magenta/10",
    ghost: "text-foreground hover:bg-foreground/10"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

