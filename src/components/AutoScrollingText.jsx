"use client";

import React from "react";
import { motion } from "framer-motion";

const AutoScrollingText = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-transparent text-white py-2 md:py-2 overflow-hidden">
            <motion.div
                className="flex space-x-[500px] text-lg md:text-sm whitespace-nowrap font-light"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex space-x-[500px]">
                        {[...Array(10)].map((_, j) => (
                            <span key={j}>Designed and Developed by person from forest</span>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AutoScrollingText;
