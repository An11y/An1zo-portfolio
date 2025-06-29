"use client";
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const SkillsCloud = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);

  const skills = useMemo(() => [
    { name: 'React', level: 90, size: 'text-2xl md:text-3xl', color: 'text-blue-400' },
    { name: 'Next.js', level: 85, size: 'text-xl md:text-2xl', color: 'text-gray-300' },
    { name: 'JavaScript', level: 95, size: 'text-3xl md:text-4xl', color: 'text-yellow-400' },
    { name: 'TypeScript', level: 80, size: 'text-lg md:text-xl', color: 'text-blue-500' },
    { name: 'TypeScript', level: 90, size: 'text-2xl md:text-3xl', color: 'text-blue-400' },
    { name: 'Node.js', level: 80, size: 'text-lg md:text-xl', color: 'text-green-600' },
    { name: 'Three.js', level: 75, size: 'text-lg md:text-xl', color: 'text-purple-400' },
    { name: 'Tailwind CSS', level: 90, size: 'text-xl md:text-2xl', color: 'text-cyan-400' },
    { name: 'Node.js', level: 85, size: 'text-lg md:text-xl', color: 'text-green-500' },
    { name: 'MongoDB', level: 80, size: 'text-lg md:text-xl', color: 'text-green-500' },
    { name: 'Git', level: 90, size: 'text-xl md:text-2xl', color: 'text-orange-400' },
    { name: 'Docker', level: 70, size: 'text-base md:text-lg', color: 'text-blue-600' },
    { name: 'Figma', level: 85, size: 'text-lg md:text-xl', color: 'text-pink-400' },
    { name: 'Framer Motion', level: 85, size: 'text-lg md:text-xl', color: 'text-purple-500' },
    { name: 'PostgreSQL', level: 75, size: 'text-base md:text-lg', color: 'text-blue-700' },
    { name: 'Express.js', level: 80, size: 'text-base md:text-lg', color: 'text-gray-400' }
  ], []);

  const generateRandomPosition = () => ({
    x: Math.random() * 80 + 10, // 10% to 90% of container width
    y: Math.random() * 80 + 10, // 10% to 90% of container height
  });

  const [skillPositions, setSkillPositions] = useState([]);

  useEffect(() => {
    setSkillPositions(skills.map(() => generateRandomPosition()));
  }, [skills]);

  const handleSkillHover = (skill, index) => {
    setHoveredSkill({ ...skill, index });
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills <span className="gradient-text">Universe</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Hover over the skills to explore my proficiency levels
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative w-full h-[600px] bg-background/10 rounded-2xl border border-accent/20 overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full" 
              style={{
                backgroundImage: `
                  linear-gradient(rgba(var(--accent), 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(var(--accent), 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Skills */}
          {skills.map((skill, index) => {
            const position = skillPositions[index];
            if (!position) return null;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.2, 
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
                className="absolute cursor-pointer select-none"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => handleSkillHover(skill, index)}
                onMouseLeave={handleSkillLeave}
              >
                <motion.span
                  className={`${skill.size} ${skill.color} font-bold hover:text-accent transition-colors duration-300`}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                >
                  {skill.name}
                </motion.span>

                {/* Skill Level Indicator */}
                {hoveredSkill?.index === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background/90 backdrop-blur-sm border border-accent/30 rounded-lg px-3 py-2 whitespace-nowrap"
                  >
                    <div className="text-sm text-foreground font-medium mb-1">
                      {skill.level}% Proficiency
                    </div>
                    <div className="w-16 bg-background/50 rounded-full h-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        className="h-1 rounded-full bg-gradient-to-r from-accent/70 to-accent"
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted">
            💡 Tip: Hover over skills to see proficiency levels
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCloud;
