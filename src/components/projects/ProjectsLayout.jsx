"use client";
import React from 'react'
import Link from "next/link";
import {motion} from "framer-motion";

const item  = {
    hidden: {scale: 0, y: 100},
    show: {scale: 1, y: 0}
}

const NavLink = motion(Link)

const ProjectsLayout = ({name, description, date, demoLink}) => {
    return (
        <NavLink
            variants={item}
            href={demoLink} target={'_blank'}
            className='text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'>
            <div className="flex items-center justify-center space-x-2">
                <h2 className='text-foreground'>{name}</h2>
                <p className='text-muted sm:inline-block hidden'>{description}</p>
            </div>
            <div className=' self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted'></div>
            <p className='text-muted sm:text-foreground'>
                {new Date(date).toDateString()}
            </p>
        </NavLink>
    )
}
export default ProjectsLayout
