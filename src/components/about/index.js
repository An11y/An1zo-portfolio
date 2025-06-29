"use client";
import React from 'react'
import clsx from "clsx";
import {motion} from "framer-motion";
import ItemLayout from "@/components/about/ItemLayout";
import SkillsSection from "@/components/about/SkillsSection";
import ExperienceSection from "@/components/about/ExperienceSection";
import GitHubStats from "@/components/about/GitHubStats";
import TechStack from "@/components/about/TechStack";
import { skillsData, experienceData, achievementsData } from "@/app/data";


const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                    <div className='col-span-8 row-span-2 flex-col items-start '>
                        <h2 className='text-left text-xl md:text-2xl w-full capitalize'>Frontend React Developer</h2>
                        <p className='font-light text-xs sm:text-sm md:text-base'>
                            I am a frontend developer with 2+ years of commercial experience specializing in React and Next.js. I create modern, responsive web applications that deliver excellent user experiences and business value.<br/>

                            With expertise in TypeScript, Redux, and modern CSS frameworks, I focus on building high-performance, scalable frontend solutions. I excel in team environments using Agile methodologies and have experience optimizing applications for better performance and SEO. My goal is to continue growing as a frontend specialist and contribute to innovative projects.
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
                
                {/* GitHub Stats - Interactive */}
                <GitHubStats className="col-span-full xs:col-span-6 lg:col-span-4" />
                
                {/* Tech Stack - Interactive */}
                <TechStack className="col-span-full lg:col-span-8" />
                <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                    <img className='w-full h-auto'
                         src="https://github-readme-stats.vercel.app/api?username=an11y&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&text_bold=false&icon_color=FEFE5B"
                         alt="An11y" loading='lazy'/>
                </ItemLayout>
                <ItemLayout className={'col-span-full'}>
                    <img className='w-full h-auto'
                         src="https://skillicons.dev/icons?i=js,html,css,react,figma,git,github,vscode,webstorm,vite,threejs,tailwind,ts,nodejs,pr,ps,ae,notion,mongodb,less,latex,java,instagram,idea,materialui,redux"
                         alt="Technical Skills" loading='lazy'/>
                </ItemLayout>
                
                {/* Skills Section */}
                <SkillsSection 
                    title="Frontend Development" 
                    skills={skillsData.frontend} 
                    className="col-span-full md:col-span-6 lg:col-span-4" 
                />
                <SkillsSection 
                    title="APIs & Integration" 
                    skills={skillsData.integration} 
                    className="col-span-full md:col-span-6 lg:col-span-4" 
                />
                <SkillsSection 
                    title="Tools & Technologies" 
                    skills={skillsData.tools} 
                    className="col-span-full md:col-span-6 lg:col-span-4" 
                />
                
                {/* Experience Section */}
                <ExperienceSection 
                    experiences={experienceData} 
                    className="col-span-full lg:col-span-8" 
                />
                
                {/* Achievements */}
                <ItemLayout className={'col-span-full lg:col-span-4'}>
                    <h3 className="text-lg font-semibold text-accent mb-4">Achievements</h3>
                    <div className="space-y-4">
                        {achievementsData.map((achievement) => (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: achievement.id * 0.1 }}
                                className="p-3 rounded-lg bg-background/20 border border-accent/20"
                            >
                                <h4 className="font-semibold text-foreground text-sm">{achievement.title}</h4>
                                <p className="text-xs text-foreground/70 mt-1">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </div>
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
