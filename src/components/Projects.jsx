import { LatestProjects } from "./project-components/LatestProjects"
import { MoreProjects } from "./project-components/MoreProjects";

export const Projects = ({ onSelectProject }) => {
    return (
        <>
            {/* Projects Pages */}
            <LatestProjects onSelectProject={onSelectProject}/>
            <MoreProjects onSelectProject={onSelectProject}/>
        </>    
    );
};

export default Projects