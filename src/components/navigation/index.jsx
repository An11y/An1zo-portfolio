"use client"
import React, { useState } from 'react'
import {BtnList} from "@/app/data";
import NavButton from "@/components/navigation/NavButton";
import useScreenSize from "@/components/hooks/useScreenSize";
import ResponsiveComponent from "@/components/ResponsiveComponent";
import {motion} from "framer-motion";
import ResumeModal from "@/components/ResumeModal";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.3 } }
}

const Navigation = () => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const angleIncrement = 360 / BtnList.length;
    const size = useScreenSize();
    console.log(size);

    const isLarge = size > 1024;
    const isMedium = size >= 768;

    const handleResumeClick = () => {
        setIsResumeModalOpen(true);
    };

    return (
        <>
            <div className="w-full fixed h-screen flex items-center justify-center z-50">
            <ResponsiveComponent>
                {({size}) => {

                    return size && size >= 480 ?
                        <motion.div

                            variants={container}
                            initial="hidden"
                            animate="show"


                            className='flex items-center justify-center relative animate-spin-slow hover:pause group'>
                            {
                                BtnList.map((btn, index) => {
                                    const angleRad = (angleIncrement * index * Math.PI) / 180;
                                    const radius = isLarge ? 'calc(20vw - 1rem)' : isMedium ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
                                    const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                                    const y = `calc(${radius} * ${Math.sin(angleRad)})`;
                                    return (
                                        <NavButton 
                                            key={btn.label} 
                                            x={x} 
                                            y={y} 
                                            {...btn}
                                            onClick={btn.icon === 'resume' ? handleResumeClick : undefined}
                                        />
                                    );
                                })
                            }
                        </motion.div>

                        :

                        <>
                            <motion.div

                                variants={container}
                                initial="hidden"
                                animate="show" className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden"
                            >
                                {
                                    BtnList.slice(0, BtnList.length/2).map((btn) => {
                                        return (
                                            <NavButton 
                                                key={btn.label} 
                                                x={0} 
                                                y={0} 
                                                {...btn}
                                                onClick={btn.icon === 'resume' ? handleResumeClick : undefined}
                                            />
                                        );
                                    })
                                }
                            </motion.div>
                            <motion.div

                                variants={container}
                                initial="hidden"
                                animate="show" className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
                            >
                                {
                                    BtnList.slice(BtnList.length /2, BtnList.length).map((btn ) => {
                                        return (
                                            <NavButton 
                                                key={btn.label} 
                                                x={0} 
                                                y={0} 
                                                {...btn} 
                                                labelDirection="left"
                                                onClick={btn.icon === 'resume' ? handleResumeClick : undefined}
                                            />
                                        );
                                    })
                                }
                            </motion.div>
                        </>
                }}
            </ResponsiveComponent>
            </div>
            
            {/* Resume Modal */}
            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
            />
        </>
    )
}

export default Navigation;
