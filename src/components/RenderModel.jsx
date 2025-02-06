"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useState, useRef, useEffect } from "react";

const RenderModel = ({ children, className }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [scale, setScale] = useState(1);
    const [isMobile, setIsMobile] = useState(false); // состояние для проверки мобильного устройства
    const containerRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);


    return (
        <div className="w-full h-screen flex justify-center items-center relative">
            <div
                ref={containerRef}
                className="relative w-full max-w-[600px] h-full min-h-[300px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Canvas
                    className={clsx("w-full h-full", className)}
                    shadows={false}
                    dpr={[1, 2]}
                >
                    <Suspense fallback={null}>
                        {/* Применяем динамический scale */}
                        <group scale={[scale, scale, scale]}>{children}</group>
                    </Suspense>
                    <Environment preset="dawn" />
                    {/* OrbitControls активен только на не мобильных устройствах */}
                    {!isMobile && <OrbitControls enableZoom={isHovered} />}
                </Canvas>
            </div>
        </div>
    );
};

export default RenderModel;
