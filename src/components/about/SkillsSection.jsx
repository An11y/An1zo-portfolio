"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ItemLayout from './ItemLayout';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-accent">{skill.level}%</span>
      </div>
      <div className="w-full bg-background/30 rounded-full h-2 backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-accent/70 to-accent h-2 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = ({ title, skills, className = "" }) => {
  return (
    <ItemLayout className={`${className}`}>
      <h3 className="text-lg font-semibold text-accent mb-4">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </ItemLayout>
  );
};

export default SkillsSection;
