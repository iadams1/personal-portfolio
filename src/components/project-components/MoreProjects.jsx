import { animate, motion, scale } from "framer-motion"
import { useState, useEffect, useRef } from "react";
import { ref, onValue, get } from "firebase/database";
import { database } from "../../firebase";

export const MoreProjects = ({onSelectProject}) => {
    const [projects, setProjects] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const projectsRef = ref(database, "projects");
        onValue(projectsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) 
        {
            // Convert object to array
            const projectsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
            }));

            const sortedProjects = projectsArray.sort((a, b) => 
                new Date(b.Date) - new Date(a.Date)
            );
            
            if (window.innerWidth > 992) {
                setProjects(sortedProjects.slice(3, 99));
            } else {
                setProjects(sortedProjects);
            }
        }
        });
    }, []);

    return (
        <motion.section id="projects" 
            className="moreprojects" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="moreprojects-container">
                <div className="moreprojects-content">
                    <h1 className="moreprojects-title desktop">More Projects</h1>
                    <h1 className="moreprojects-title mobile">All Projects</h1>
                    <div className="moreprojects-grid">
                        {projects.map((project, i) => (
                            <motion.div 
                                key={project.id}
                                style={{ position: "relative", cursor: "pointer" }}
                                whileHover={{ scale: 1.05 }}
                                onMouseEnter={() => { 
                                    setHoveredIndex(i);
                                }}
                                onMouseLeave={() => { 
                                    setHoveredIndex(null);
                                }}
                                onClick={() => onSelectProject(project)}
                            >
                                <div className="moreprojects-card">
                                    <div className="moreprojects-card-image container">
                                        <img src={project.Image} alt={project.Title} className="moreprojects-card-image"/>
                                    </div>
                                    <h1 className="moreprojects-card-title">{project.Title}</h1>
                                    <p className="moreprojects-card-summary">{project.SubDescription}</p>
                                    <div className="moreproject-languages">
                                        {project.Languages.slice(0, 3).map((lang, idx) => (
                                            <p key={idx} className="moreproject-languages-text">{lang}</p>
                                        ))}
                                        {project.Languages.length > 3 && (
                                            <p className="moreproject-languages-extras">+{project.Languages.length - 3}</p>
                                        )}
                                    </div>
                                </div>
                                <motion.div 
                                    key={project.id} 
                                    className="moreprojects-card-border"
                                    animate={{ opacity: hoveredIndex === i ? 1.1 : 0 }}
                                    
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default MoreProjects;