"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personalInfo, achievements } from "@/lib/data";
import { GraduationCap, MapPin, Trophy, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
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
    <Section id="about">
      <SectionTitle 
        title="About Me" 
        subtitle={personalInfo.bio}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card neonBorder="cyan" hover={false}>
          <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-neon-cyan flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-foreground/80">{personalInfo.education.current}</p>
              <p className="text-sm text-foreground/60 mt-2">{personalInfo.education.year}</p>
            </div>
          </div>
        </Card>

        <Card neonBorder="magenta" hover={false}>
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-neon-magenta flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-foreground/80">{personalInfo.location}</p>
              <p className="text-sm text-foreground/60 mt-2">Timezone: {personalInfo.timezone}</p>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
          <Trophy className="w-6 h-6 text-neon-green" />
          Achievements
        </h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card neonBorder="purple" className="h-full">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-neon-purple flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-neon-purple font-semibold mb-1">{achievement.year}</p>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-foreground/70">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

