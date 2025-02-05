import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import {projectsData} from "@/app/data";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
//import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
    ssr: false,
});



export default function Home() {
    return (
        <>
            <Image
                priority
                sizes="100vw"
                alt="background-image"
                className="-z-50 fixed top-0 bg-black left-0 w-full h-full object-cover object-center opacity-50"
            />

            <ProjectList projects={projectsData}/>

            <div className='flex items-center justify-center fixed top-16 lg:top-20 lg:-left-20 left-1/2 h-screen -translate-x-1/2 lg:translate-x-0 -z-'>
                <RenderModel>
                    <Staff />
                </RenderModel>
            </div>
          </>
    );
}