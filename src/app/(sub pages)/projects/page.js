import Image from "next/image";
import bg from "../../../../public/background/projects-bg.jpg";
import ProjectList from "@/components/projects";
import {projectsData} from "@/app/data";
//import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";



export default function Home() {
    return (
        <>
            <Image
                src={bg}
                priority
                sizes="100vw"
                alt="background-image"
                className="-z-50 fixed top-0 bg-black left-0 w-full h-full object-cover object-center"
            />

            <ProjectList projects={projectsData}/>

          </>
    );
}