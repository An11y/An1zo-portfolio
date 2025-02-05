"use client";
import React from 'react'
import clsx from "clsx";
import {motion} from "framer-motion";
import ItemLayout from "@/components/about/ItemLayout";


const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                    <div className='col-span-8 row-span-2 flex-col items-start '>
                        <h2 className='text-left text-xl md:text-2xl w-full capitalize'>Architect Of Enchantments</h2>
                        <p className='font-light text-xs sm:text-sm md:text-base'>
                            I am a full-stack developer with a strong focus on web application architecture. Using React, Java, and Python, I create scalable and high-quality applications that meet both user and business needs.<br/>

                            With experience in both front-end and back-end development, I specialize in building systems that ensure performance, stability, and scalability. I work well independently or in a team, always looking to enhance my skills. My goals are to secure a high-paying role in a leading tech company and eventually launch my own startup.
                        </p>
                    </div>
                </ItemLayout>
                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        5+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-full xs:col-span-6 md:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        2+ <sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 !p-0'}>
                    <img className='w-full h-auto'
                         src="https://github-readme-stats.vercel.app/api/top-langs?username=an11y&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&text_bold=false&icon_color=FEFE5B"
                         alt="An11y" loading='lazy'/>
                </ItemLayout>
                <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                    <img className='w-full h-auto'
                         src="https://github-readme-stats.vercel.app/api?username=an11y&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&text_bold=false&icon_color=FEFE5B"
                         alt="An11y" loading='lazy'/>
                </ItemLayout>
                <ItemLayout className={'col-span-full'}>
                    <img className='w-full h-auto'
                         src="https://skillicons.dev/icons?i=js,html,css,react,figma,git,github,vscode,webstorm,vite,threejs,tailwind,py,pycharm,pr,ps,ae,notion,mongodb,less,latex,java,instagram,idea,django,bots"
                         alt="An11y" loading='lazy'/>
                </ItemLayout>
                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=An11y&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="GitHub Streak" />
                </ItemLayout>
                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className='w-full h-auto'
                         src="https://github-readme-stats.vercel.app/api/pin/?username=an11y&repo=bankapp&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&text_bold=false&icon_color=FEFE5B&description_lines_count=true"
                         alt="An11y" loading='lazy'/>
                </ItemLayout>
                </div>
        </section>
    )
}
export default AboutDetails
