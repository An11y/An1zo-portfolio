"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '@/app/data';

const FeaturedProjects = () => {
  const featuredProjects = projectsData.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-muted max-w-2xl mx-auto"
        >
          Showcase of my recent work and creative projects
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group"
          >
            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-background/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 h-full hover:border-accent/60 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-accent/20 border border-accent/30 rounded-full text-accent">
                    {project.category}
                  </span>
                  <svg 
                    className="w-5 h-5 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-muted text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-background/40 border border-muted/30 rounded text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack?.length > 3 && (
                    <span className="px-2 py-1 text-xs text-accent">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="text-xs text-muted">
                  {new Date(project.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short' 
                  })}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent hover:bg-accent/20 transition-all duration-300"
        >
          View All Projects
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
