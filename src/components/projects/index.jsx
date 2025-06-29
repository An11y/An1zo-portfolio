"use client"
import React, { useState } from 'react'
import ProjectsLayout from "@/components/projects/ProjectsLayout";
import {motion} from "framer-motion";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: { 
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
}

const filterButton = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0}
}

const ProjectList = ({projects}) => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    // Get unique categories
    const categories = ['All', ...new Set(projects.map(project => project.category))];
    
    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className='w-full max-w-6xl px-4 mx-auto lg:px-16 space-y-8 flex flex-col items-center z-10'>
            {/* Filter Buttons */}
            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center gap-4 mb-8"
            >
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        variants={filterButton}
                        onClick={() => setActiveFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeFilter === category
                                ? 'bg-accent text-background shadow-lg'
                                : 'bg-background/30 text-foreground border border-accent/30 hover:bg-accent/20'
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='w-full space-y-6 md:space-y-8'
            >
                {filteredProjects.map((project, index) => (
                    <ProjectsLayout key={project.id} {...project} />
                ))}
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-muted py-12"
                >
                    <p>No projects found in this category.</p>
                </motion.div>
            )}
        </div>
    )
}

export default ProjectList
