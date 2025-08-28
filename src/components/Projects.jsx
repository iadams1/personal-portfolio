import { LatestProjects } from "./project-components/LatestProjects"
import { MoreProjects } from "./project-components/MoreProjects";

export const Projects = () => {
    return (
        <>
            {/* Projects Pages */}
            <LatestProjects />
            <MoreProjects/>
        </>
    );
};

export default Projects