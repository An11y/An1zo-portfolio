import React from 'react';
import dynamic from "next/dynamic";
import { Main } from "@/components/models/Main";
import HeroSection from "@/components/HeroSection";

const RenderModel = dynamic(() => import("@/components/RenderModel"), { ssr: false });
const Navigation = dynamic(() => import("@/components/navigation"), { ssr: false });
const AutoScrollingText = dynamic(() => import("@/components/AutoScrollingText"), { ssr: false });

const MemoizedMain = React.memo(Main);

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
            {/* 3D Model in the background with interactivity */}
            <div className="absolute inset-0 -z-10">
                <RenderModel>
                    <MemoizedMain />
                </RenderModel>
            </div>

            {/* Hero Section */}
            <HeroSection />

            {/* Navigation that doesn't block interaction */}
            <div className="relative w-full h-screen pointer-events-none z-50">
                <Navigation />
            </div>

            {/* Auto-scrolling text at bottom */}
            <AutoScrollingText />
        </main>
    );
}