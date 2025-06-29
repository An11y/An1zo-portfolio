"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      year: '2023 - Present',
      title: 'Frontend React Developer',
      company: 'Freelance',
      description: 'Developing modern web applications using React, Next.js, and TypeScript. Working with various clients to create scalable frontend solutions.',
      technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      type: 'work'
    },
    {
      id: 2,
      year: '2022 - 2023',
      title: 'Frontend Developer',
      company: 'Various Projects',
      description: 'Focused on creating responsive and interactive user interfaces. Specialized in React ecosystem and modern CSS frameworks.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Bootstrap'],
      type: 'work'
    },
    {
      id: 3,
      year: '2022',
      title: 'Started Web Development Journey',
      company: 'Self-taught',
      description: 'Began learning web development through online courses, documentation, and hands-on projects.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      type: 'education'
    },
    {
      id: 4,
      year: '2021',
      title: 'Programming Fundamentals',
      company: 'Online Learning',
      description: 'Started with programming basics, algorithms, and data structures. Built first small projects.',
      technologies: ['JavaScript', 'Git', 'Problem Solving'],
      type: 'education'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A timeline of my development journey, key milestones, and growth as a developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent transform md:-translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 z-10 shadow-lg">
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-background/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 hover:border-accent/60 transition-all duration-300"
                >
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.type === 'work' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {item.type === 'work' ? '💼 Work' : '🎓 Learning'}
                    </span>
                    <span className="text-sm text-accent font-medium">{item.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-accent font-medium mb-3">{item.company}</p>
                  <p className="text-muted text-sm mb-4 leading-relaxed">{item.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-background/40 border border-muted/30 rounded text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}

          {/* Future Goal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-br from-accent to-accent/60 rounded-full transform -translate-x-1/2 z-10 shadow-lg">
              <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-50" />
            </div>
            
            <div className="ml-16 md:ml-0 md:text-center">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">🚀 What's Next?</h3>
                <p className="text-muted text-sm">
                  Continuously learning new technologies, taking on bigger challenges, 
                  and helping more clients achieve their digital goals.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
