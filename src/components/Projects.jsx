import { useState } from "react";
import { LatestProjects } from "./project-components/LatestProjects"
import { MoreProjects } from "./project-components/MoreProjects";
import { id } from "./project-components/[id]";

export const Projects = () => {
    return (
        <>
            {/* Projects Pages */}
            <LatestProjects />
            <MoreProjects />
            <id />
        </>    
    );
};

export default Projects