"use client";
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4"
    >
      <motion.div variants={textVariants} className="mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-4 drop-shadow-lg">
          <span className="gradient-text bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">Anton Bugaev</span>
        </h1>
        <motion.div
          variants={textVariants}
          className="text-lg md:text-xl lg:text-2xl text-accent/90 mb-2 font-medium"
        >
          Frontend React Developer
        </motion.div>
        <motion.p
          variants={textVariants}
          className="text-sm md:text-base text-foreground/90 max-w-2xl mx-auto leading-relaxed bg-background/20 backdrop-blur-sm rounded-lg p-4 border border-foreground/10 shadow-lg"
        >
          Creating modern, responsive web applications with React and Next.js.
          2+ years of commercial experience in frontend development.
          <br />
          <span className="text-accent/80 font-medium">Specialized in React, Next.js, TypeScript, and innovative 3D web applications.</span>
        </motion.p>
      </motion.div>

      <motion.div 
        variants={textVariants}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View My Work
        </motion.a>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-background transition-all duration-300"
        >
          Get In Touch
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
