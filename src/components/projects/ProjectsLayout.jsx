"use client";
import React from 'react'
import Link from "next/link";
import {motion} from "framer-motion";

const item = {
    hidden: {opacity: 0, y: 50},
    show: {opacity: 1, y: 0, transition: { duration: 0.5 }}
}

const NavLink = motion(Link)

const ProjectsLayout = ({name, description, date, demoLink, techStack, category}) => {
    return (
        <NavLink
            variants={item}
            href={demoLink} 
            target={'_blank'}
            className='group w-full relative rounded-xl overflow-hidden p-6 custom-bg hover:scale-105 transition-transform duration-300'
        >
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium bg-accent/20 border border-accent/30 rounded-full text-accent">
                    {category}
                </span>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
                <div>
                    <h2 className='text-xl font-bold text-foreground group-hover:text-accent transition-colors'>
                        {name}
                    </h2>
                    <p className='text-sm text-muted mt-2'>
                        {new Date(date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </p>
                </div>

                <p className='text-foreground/80 text-sm leading-relaxed'>
                    {description}
                </p>

                {/* Tech Stack */}
                {techStack && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-background/40 border border-muted/30 rounded-md text-muted hover:text-accent hover:border-accent/50 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* View Project Button */}
                <div className="flex items-center text-accent text-sm font-medium mt-4 group-hover:translate-x-2 transition-transform">
                    <span>View Project</span>
                    <svg 
                        className="w-4 h-4 ml-2" 
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
            </div>
        </NavLink>
    )
}

export default ProjectsLayout
