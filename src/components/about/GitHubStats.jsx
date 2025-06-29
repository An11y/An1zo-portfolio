"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ItemLayout from './ItemLayout';

const GitHubStats = ({ className = "" }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - in real app you would fetch from GitHub API
    setTimeout(() => {
      setStats({
        publicRepos: 12,
        followers: 25,
        following: 15,
        contributions: 450
      });
      setLoading(false);
    }, 1500);
  }, []);

  const statItems = [
    { label: "Repositories", value: stats?.publicRepos, icon: "📦" },
    { label: "Followers", value: stats?.followers, icon: "👥" },
    { label: "Following", value: stats?.following, icon: "➕" },
    { label: "Contributions", value: stats?.contributions, icon: "📈" }
  ];

  return (
    <ItemLayout className={`${className}`}>
      <h3 className="text-lg font-semibold text-accent mb-4">GitHub Activity</h3>
      
      {loading ? (
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-accent/20 rounded mb-2"></div>
              <div className="h-6 bg-accent/10 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-3 rounded-lg bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/20 transition-all duration-300"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-xl font-bold text-accent">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                >
                  {item.value}
                </motion.span>
              </div>
              <div className="text-xs text-muted">{item.label}</div>
            </motion.div>
          ))}
        </div>
      )}

      {/* GitHub Link */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        href="https://github.com/An11y"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-accent hover:text-accent/80 text-sm transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View on GitHub
      </motion.a>
    </ItemLayout>
  );
};

export default GitHubStats;
