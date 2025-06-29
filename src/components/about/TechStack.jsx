"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ItemLayout from './ItemLayout';

const TechStack = ({ className = "" }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const technologies = [
    { name: 'React', category: 'frontend', color: '#61DAFB', proficiency: 95 },
    { name: 'Next.js', category: 'frontend', color: '#000000', proficiency: 90 },
    { name: 'TypeScript', category: 'frontend', color: '#3178C6', proficiency: 85 },
    { name: 'Redux', category: 'frontend', color: '#764ABC', proficiency: 85 },
    { name: 'Tailwind CSS', category: 'frontend', color: '#06B6D4', proficiency: 90 },
    { name: 'Material UI', category: 'frontend', color: '#0081CB', proficiency: 80 },
    { name: 'REST API', category: 'integration', color: '#FF6B35', proficiency: 85 },
    { name: 'GraphQL', category: 'integration', color: '#E10098', proficiency: 70 },
    { name: 'Prisma ORM', category: 'integration', color: '#2D3748', proficiency: 85 },
    { name: 'PostgreSQL', category: 'integration', color: '#336791', proficiency: 80 },
    { name: 'MongoDB', category: 'integration', color: '#47A248', proficiency: 75 },
    { name: 'Git', category: 'tools', color: '#F05032', proficiency: 90 },
    { name: 'Webpack', category: 'tools', color: '#8DD6F9', proficiency: 80 },
    { name: 'Vite', category: 'tools', color: '#646CFF', proficiency: 85 },
    { name: 'Figma', category: 'tools', color: '#F24E1E', proficiency: 85 },
    { name: 'Jest', category: 'tools', color: '#C21325', proficiency: 75 },
    { name: 'Vercel', category: 'tools', color: '#000000', proficiency: 90 }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🔧' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'integration', name: 'Integration', icon: '🔗' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ];

  const filteredTech = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <ItemLayout className={`${className}`}>
      <h3 className="text-lg font-semibold text-accent mb-6">Tech Stack</h3>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-accent text-background'
                : 'bg-background/30 text-foreground border border-accent/30 hover:bg-accent/20'
            }`}
          >
            <span className="mr-1">{category.icon}</span>
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Technologies Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative p-3 rounded-lg bg-gradient-to-br from-background/50 to-background/30 border border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center text-xs font-bold text-white"
                     style={{ backgroundColor: tech.color }}>
                  {tech.name.charAt(0)}
                </div>
                <div className="text-xs font-medium text-foreground mb-1">{tech.name}</div>
                <div className="w-full bg-background/50 rounded-full h-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.proficiency}%` }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.8 }}
                    className="h-1 rounded-full bg-gradient-to-r from-accent/70 to-accent"
                  />
                </div>
                <div className="text-xs text-muted mt-1">{tech.proficiency}%</div>
                
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background/90 text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.proficiency}% proficiency
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredTech.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-muted py-8"
        >
          No technologies found in this category.
        </motion.div>
      )}
    </ItemLayout>
  );
};

export default TechStack;
