"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personalInfo, socialLinks } from "@/lib/data";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <Section id="contact">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Feel free to reach out for collaborations or just a friendly hello"
      />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card neonBorder="cyan" hover={false} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-cyan/10 mb-6">
              <Mail className="w-8 h-8 text-neon-cyan" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Email Me</h3>
            
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-xl text-neon-cyan hover:text-neon-magenta transition-colors inline-flex items-center gap-2 mb-6"
            >
              {personalInfo.email}
              <Send className="w-5 h-5" />
            </a>

            <div className="pt-6 border-t border-glass-border">
              <p className="text-foreground/70 mb-4">Or find me on social media:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {socialLinks.slice(0, 4).map((social, index) => (
                  <a
                    key={index}
                    href={social.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg glass-effect text-sm hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-foreground/60"
        >
          <p className="mb-2">{personalInfo.motto}</p>
          <p className="text-sm">Available for freelance opportunities and collaborations</p>
        </motion.div>
      </div>
    </Section>
  );
}

