"use client";

import React from "react";


const AutoScrollingText = () => {
    return (
        <div className="fixed flex bottom-0 left-0 w-full bg-transparent text-white py-2 overflow-hidden">
            <div className="flex space-x-[250px] text-sm whitespace-nowrap font-light animate-scroll">
                {[...Array(10)].map((_, i) => (
                    <span key={i}>Designed and Developed by person from forest</span>
                ))}
                {[...Array(10)].map((_, i) => (
                    <span key={i}>Designed and Developed by person from forest</span>
                ))}
            </div>
        </div>
    );
};

export default AutoScrollingText;