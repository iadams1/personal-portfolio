import { LatestProjects } from "./project-components/LatestProjects"
import { MoreProjects } from "./project-components/MoreProjects";

export const Projects = ({ onSelectProject }) => {
    return (
        <>
            {/* Projects Pages */}
            <div class="desktop-only">
                <LatestProjects onSelectProject={onSelectProject}/>
                <MoreProjects onSelectProject={onSelectProject}/>
            </div>
            <div class="mobile-only">
                <MoreProjects onSelectProject={onSelectProject}/>
            </div>
        </>    
    );
};

export default Projects