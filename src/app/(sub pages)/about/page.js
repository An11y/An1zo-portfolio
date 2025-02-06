import React from 'react';
import Image from "next/image";
import bg from "../../../../public/background/about-bg.jpg";
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
            <Image
                src={bg}
                priority
                sizes="100vw"
                alt="Next.js Portfolio website's about page background image"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <RenderModel>
                    <MemoizedPikachu />
                </RenderModel>
            </div>

            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent z-20">
                        An1zo
                    </h1>
                    <p className="font-light text-foreground text-lg">
                        First of all, get to know yourself before reading this portfolio.
                    </p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}