"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skills } from "@/lib/data";
import { Video, Code2, Palette } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <Section id="skills">
      <SectionTitle 
        title="Skills & Expertise" 
        subtitle="What I bring to the table"
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <Card neonBorder="cyan" className="h-full">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-cyan/10 mb-4">
                <Video className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{skills.videoEditing.title}</h3>
            </div>
            <ul className="space-y-2">
              {skills.videoEditing.items.map((item, index) => (
                <li key={index} className="text-foreground/80 flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card neonBorder="magenta" className="h-full">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-magenta/10 mb-4">
                <Code2 className="w-8 h-8 text-neon-magenta" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{skills.programming.title}</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neon-magenta font-semibold mb-2">Languages</p>
                <p className="text-foreground/80 text-sm">{skills.programming.languages.join(", ")}</p>
              </div>
              <div>
                <p className="text-sm text-neon-magenta font-semibold mb-2">Frontend</p>
                <p className="text-foreground/80 text-sm">{skills.programming.frontend.join(", ")}</p>
              </div>
              <div>
                <p className="text-sm text-neon-magenta font-semibold mb-2">Tools</p>
                <p className="text-foreground/80 text-sm">{skills.programming.tools.join(", ")}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card neonBorder="purple" className="h-full">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-purple/10 mb-4">
                <Palette className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{skills.design.title}</h3>
            </div>
            <ul className="space-y-2">
              {skills.design.items.map((item, index) => (
                <li key={index} className="text-foreground/80 flex items-start gap-2">
                  <span className="text-neon-purple mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
}

