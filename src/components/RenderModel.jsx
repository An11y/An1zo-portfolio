"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useState, useRef, useEffect } from "react";

const RenderModel = ({ children, className }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [scale, setScale] = useState(1);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const updateScale = () => {
            const { width, height } = containerRef.current.getBoundingClientRect();
            let newScale = Math.min(width, height) / 600; // Базовое масштабирование

            // Дополнительное уменьшение на мобильных устройствах
            if (window.innerWidth < 640) {
                newScale *= 0.8; // Уменьшаем на 30%
            }

            setScale(newScale);
        };

        const resizeObserver = new ResizeObserver(updateScale);
        resizeObserver.observe(containerRef.current);
        window.addEventListener("resize", updateScale);

        updateScale(); // Вызываем сразу при монтировании

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateScale);
        };
    }, []);

    return (
        <div className="w-full h-screen flex justify-center items-center relative pointer-events-none">
            {/* Контейнер для 3D-модели */}
            <div
                ref={containerRef}
                className="relative w-full max-w-[600px] h-full min-h-[300px] sm:h-[800px] pointer-events-auto"
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
                    <OrbitControls enableZoom={isHovered} />
                </Canvas>
            </div>
        </div>
    );
};

export default RenderModel;
