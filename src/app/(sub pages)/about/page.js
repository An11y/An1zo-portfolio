import React from 'react';
import dynamic from "next/dynamic";
import { Pikachu } from "@/components/models/Pikachu";

const RenderModel = dynamic(() => import("@/components/RenderModel"), { ssr: false });
const AboutDetails = dynamic(() => import("@/components/about"), { ssr: false });

export const metadata = {
    title: "About",
};

const MemoizedPikachu = React.memo(Pikachu);

export default function Home() {
    return (
        <>
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <RenderModel>
                    <MemoizedPikachu />
                </RenderModel>
            </div>

            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent z-20">
                        Anton
                    </h1>
                    <p className="font-light text-foreground text-lg">
                        Frontend React Developer with 2+ years of commercial experience.
                    </p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}