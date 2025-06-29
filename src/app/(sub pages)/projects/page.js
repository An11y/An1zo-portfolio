import ProjectList from "@/components/projects";
import {projectsData} from "@/app/data";
import dynamic from "next/dynamic";



export default function Home() {
    return (
        <>
            <ProjectList projects={projectsData}/>
          </>
    );
}