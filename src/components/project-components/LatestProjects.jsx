import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";

export const LatestProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const projectsRef = ref(database, "projects");
        onValue(projectsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Convert object to array
            const projectsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
            }));
            setProjects(projectsArray);
        }
        });
    }, []);

    return (
        <motion.section id="projects" 
            className="latestprojects" 
            inital={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="latestprojects-container">
                <div className="latestprojects-content">
                    <div className="latestprojects-grid">
                        <div className="latestprojects-information">
                            <h1 className="latestprojects-information-title">Latest Projects</h1>
                            <p className="latestprojects-information-text">
                                The following projects illustrate my approach to software development, 
                                from creating user-friendly interfaces to implementing scalable systems 
                                and databases.
                            </p>
                        </div>
                        <div className="latestprojects-projects">
                            {projects.map(project => (
                                <div key={project.id} className="project-card">
                                    <img src={project.Image} alt={project.Title} />
                                    <h2>{project.Title}</h2>
                                    <div className="languages">
                                        {project.Languages.slice(0, 3).map((lang, idx) => (
                                            <p key={idx}>{lang}</p>
                                        ))}
                                        {project.Languages.length > 3 && (
                                            <p>+{project.Languages.length - 3}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};