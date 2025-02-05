"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useState } from "react";

const RenderModel = ({ children, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-full h-screen flex justify-center items-center relative pointer-events-none">
            {/* Контейнер для 3D-модели */}
            <div
                className="relative w-full max-w-[500px] h-[60vh] min-h-[300px] sm:h-[500px] pointer-events-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Canvas
                    className={clsx("w-full h-full", className)}
                    shadows={false}
                    dpr={[1, 2]}
                >
                    <Suspense fallback={null}>
                        <group>{children}</group>
                    </Suspense>
                    <Environment preset="dawn" />
                    <OrbitControls enableZoom={isHovered} />
                </Canvas>
            </div>
        </div>
    );
};

export default RenderModel;
