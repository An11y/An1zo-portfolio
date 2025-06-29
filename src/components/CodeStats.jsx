"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeStats = () => {
  const [stats, setStats] = useState([
    { label: 'Lines of Code', value: 0, target: 50000, icon: '💻', color: 'text-blue-400' },
    { label: 'Projects Completed', value: 0, target: 15, icon: '🚀', color: 'text-green-400' },
    { label: 'Cups of Coffee', value: 0, target: 1247, icon: '☕', color: 'text-yellow-400' },
    { label: 'Happy Clients', value: 0, target: 8, icon: '😊', color: 'text-purple-400' }
  ]);

  useEffect(() => {
    const animateStats = () => {
      setStats(prevStats => 
        prevStats.map(stat => {
          const increment = Math.ceil(stat.target / 100);
          const newValue = Math.min(stat.value + increment, stat.target);
          return { ...stat, value: newValue };
        })
      );
    };

    const interval = setInterval(animateStats, 50);
    
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            By the <span className="gradient-text">Numbers</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted max-w-2xl mx-auto"
          >
            A glimpse into my development journey and achievements
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-background/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 text-center hover:border-accent/60 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value.toLocaleString()}
                {stat.value === stat.target && index === 2 && '+'}
              </div>
              <div className="text-sm text-muted font-medium">
                {stat.label}
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4 w-full bg-background/30 rounded-full h-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(stat.value / stat.target) * 100}%` }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="h-1 rounded-full bg-gradient-to-r from-accent/70 to-accent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent">
            <span className="mr-2">💡</span>
            <span className="text-sm font-medium">
              Fun fact: I debug faster with music on!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeStats;
