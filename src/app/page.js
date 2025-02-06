import React from 'react';
import Image from "next/image";
import bg from "../../public/background/home-bg.jpg";
import dynamic from "next/dynamic";
import { Main } from "@/components/models/Main";

const RenderModel = dynamic(() => import("@/components/RenderModel"), { ssr: false });
const Navigation = dynamic(() => import("@/components/navigation"), { ssr: false });
const AutoScrollingText = dynamic(() => import("@/components/AutoScrollingText"), { ssr: false });

const MemoizedMain = React.memo(Main);

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            {/* Background Image */}
            <Image
                priority
                sizes="100vw"
                src={bg}
                alt="background-image"
                fill
                className="absolute -z-50 w-full h-full object-cover object-center"
            />

            {/* 3D Model in the background with interactivity */}
            <div className="absolute inset-0">
                <RenderModel>
                    <MemoizedMain />
                </RenderModel>
            </div>

            {/* UI that does not block the model */}
            <div className="relative w-full h-screen pointer-events-none">
                <Navigation />
            </div>

            <AutoScrollingText />
        </main>
    );
}