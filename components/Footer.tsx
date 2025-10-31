import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-glass-border py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-foreground/70 mb-2">
          Built with Next.js, TailwindCSS, and Three.js
        </p>
        <p className="text-foreground/50 text-sm">
          © {currentYear} {personalInfo.name} ({personalInfo.alias}). All rights reserved.
        </p>
      </div>
    </footer>
  );
}

