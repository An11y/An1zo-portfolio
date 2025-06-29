"use client";

import React from "react";
import { motion } from "framer-motion";

const AutoScrollingText = () => {
    const scrollingTexts = [
        "🚀 Frontend React Developer",
        "⚡ React & Next.js Specialist", 
        "� 2+ Years Commercial Experience",
        "🎨 UI/UX Focused",
        "🔧 Performance Optimizer",
        "💡 Modern Web Technologies",
        "🌟 TypeScript Enthusiast",
        "📱 Responsive Design Expert"
    ];

    return (
        <div className="fixed flex bottom-0 left-0 w-full bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-sm text-foreground py-3 overflow-hidden border-t border-accent/20 pointer-events-none z-40">
            <motion.div 
                className="flex space-x-[200px] text-sm whitespace-nowrap font-medium pointer-events-none"
                animate={{
                    x: [0, -2000]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {[...Array(3)].map((_, arrayIndex) => (
                    <React.Fragment key={arrayIndex}>
                        {scrollingTexts.map((text, i) => (
                            <span key={`${arrayIndex}-${i}`} className="text-accent/80 pointer-events-none select-none">
                                {text}
                            </span>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default AutoScrollingText;