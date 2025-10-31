interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export function SectionTitle({ title, subtitle, gradient = true }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${gradient ? "text-gradient-cyan-magenta" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

