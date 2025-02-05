import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";

import dynamic from "next/dynamic";
import Navigation from "@/components/navigation";
import AutoScrollingText from "@/components/AutoScrollingText";
import {Main} from "@/components/models/Main";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            {/* Фоновое изображение */}
            <Image
                priority
                sizes="100vw"
                src={bg}
                alt="background-image"
                fill
                className="absolute -z-50 w-full h-full object-cover object-center opacity-50"
            />

            {/* 3D-модель на заднем плане, но с интерактивностью */}
            <div className="absolute inset-0">
                <RenderModel>
                    <Main />
                </RenderModel>
            </div>

            {/* UI, который не блокирует модель */}
            <div className="relative w-full h-screen pointer-events-none">
                <Navigation />
            </div>

            <AutoScrollingText />
        </main>
    );
}
