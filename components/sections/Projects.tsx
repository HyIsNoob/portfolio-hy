"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects, categories } from "@/lib/data";
import { ExternalLink, Github, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="projects">
      <SectionTitle 
        title="Projects" 
        subtitle="Featured work and experiments"
      />

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedCategory === category
                ? "glass-effect text-neon-cyan border border-neon-cyan/50 neon-glow-cyan"
                : "glass-effect text-foreground/70 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card neonBorder="cyan" className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                {project.award && (
                  <Award className="w-5 h-5 text-neon-green flex-shrink-0" />
                )}
              </div>
              
              <p className="text-foreground/70 mb-4 flex-1">{project.description}</p>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neon-magenta hover:text-neon-cyan transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">View on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {project.featured && (
                <div className="mt-3 pt-3 border-t border-glass-border">
                  <span className="text-xs text-neon-green">⭐ Featured Project</span>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

