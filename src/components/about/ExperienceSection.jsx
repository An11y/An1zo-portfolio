"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ItemLayout from './ItemLayout';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-accent/30 rounded-full" />
      <div className="pl-6">
        <div className="absolute left-[-4px] top-2 w-2 h-2 bg-accent rounded-full" />
        <h4 className="text-lg font-semibold text-foreground">{experience.title}</h4>
        <p className="text-accent font-medium">{experience.company}</p>
        <p className="text-sm text-muted mb-3">{experience.period}</p>
        <p className="text-sm text-foreground/80 mb-3">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-accent/20 border border-accent/30 rounded-md text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = ({ experiences, className = "" }) => {
  return (
    <ItemLayout className={`${className}`}>
      <h3 className="text-lg font-semibold text-accent mb-6">Experience</h3>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </ItemLayout>
  );
};

export default ExperienceSection;
