"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOpen = (language) => {
    const fileName = language === 'en' ? 'resume-eng.pdf' : 'resume.pdf';
    // Open PDF in new tab
    window.open(`/${fileName}`, '_blank');
    onClose();
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-background/90 backdrop-blur-md border border-accent/30 rounded-2xl p-8 max-w-md w-full mx-4 
                   shadow-2xl relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="text-4xl mb-4"
            >
              📄
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-foreground mb-2"
            >
              Choose Resume Language
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted text-sm"
            >
              Select your preferred language to view the resume
            </motion.p>
          </div>

          {/* Language Options */}
          <div className="space-y-4 mb-6">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOpen('en')}
              className="w-full p-4 bg-accent/10 border border-accent/30 rounded-xl hover:bg-accent/20 
                         hover:border-accent/50 transition-all duration-300 text-left group shadow-lg 
                         hover:shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-1">
                    <span className="text-xl mr-3">🇺🇸</span>
                    <span className="font-semibold text-foreground">English</span>
                  </div>
                  <p className="text-sm text-muted">Professional resume in English</p>
                </div>
                <svg 
                  className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOpen('ru')}
              className="w-full p-4 bg-accent/10 border border-accent/30 rounded-xl hover:bg-accent/20 
                         hover:border-accent/50 transition-all duration-300 text-left group shadow-lg 
                         hover:shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-1">
                    <span className="text-xl mr-3">🇷🇺</span>
                    <span className="font-semibold text-foreground">Русский</span>
                  </div>
                  <p className="text-sm text-muted">Профессиональное резюме на русском</p>
                </div>
                <svg 
                  className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>
          </div>

          {/* Close Button */}
          <div className="text-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-2 text-sm text-muted hover:text-foreground transition-all duration-300 
                         hover:bg-background/50 rounded-lg"
            >
              Cancel
            </motion.button>
          </div>

          {/* Close X Button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted hover:text-foreground transition-all duration-300
                       hover:bg-background/50 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById('my-modal') || document.body
  );
};

export default ResumeModal;
