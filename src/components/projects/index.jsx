"use client"
import React from 'react'
import ProjectsLayout from "@/components/projects/ProjectsLayout";
import {motion} from "framer-motion";


const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.3,
            delayChildren: 0.5
        }
    }
}

const ProjectList = ({projects}) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className='w-full max-w-aut xl:max-w-4xl px-4 mx-auto   lg:px-16 space-y-6  md:space-y-8 flex flex-col items-center z-10'>
            {projects.map((projects, index) =>{
                return <ProjectsLayout key={index} {...projects} />

            })}
        </motion.div>
    )
}
export default ProjectList
