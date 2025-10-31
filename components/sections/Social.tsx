"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { socialLinks } from "@/lib/data";
import { Youtube, Music, Github, MessageCircle, Facebook, Gamepad2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  youtube: Youtube,
  music: Music,
  github: Github,
  messageCircle: MessageCircle,
  facebook: Facebook,
  gamepad2: Gamepad2,
};

export function Social() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <Section id="social">
      <SectionTitle 
        title="Connect With Me" 
        subtitle="Find me on various platforms"
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {socialLinks.map((social, index) => {
          const Icon = iconMap[social.icon as keyof typeof iconMap];
          const neonColors = ["cyan", "magenta", "purple"] as const;
          const neonColor = neonColors[index % 3];

          return (
            <motion.div key={index} variants={itemVariants}>
              <a 
                href={social.url || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card neonBorder={neonColor} className="h-full">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-neon-${neonColor}/10 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 text-neon-${neonColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1">{social.name}</h3>
                      <p className="text-sm text-foreground/70 truncate mb-2">@{social.username}</p>
                      {social.followers && (
                        <p className="text-xs text-neon-green">{social.followers} followers</p>
                      )}
                      {social.priority && (
                        <p className="text-xs text-foreground/50 mt-1">Priority #{social.priority}</p>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-foreground/50 flex-shrink-0" />
                  </div>
                </Card>
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

