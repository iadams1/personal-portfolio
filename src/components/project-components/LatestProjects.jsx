import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";

export const LatestProjects = ({onSelectProject}) => {
    const [projects, setProjects] = useState([]);
    const [step, setStep] = useState(0);
    const intervalRef = useRef();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const postionMap = [
        [0, 0 ,0],
        [1040, -520, -520],
        [520, 520, -1040],
    ];

    const scaleMap = [
        [0.8, 1.1 ,0.8],
        [0.8, 0.8, 1.1],
        [1.1, 0.8, 0.8],
    ];

    const opacityMap = [
        [1, 10, 1],
        [1, 1, 10],
        [10, 1, 1],
    ];

    const startRotation = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setStep((s) => (s + 1) % 3);
        }, 3000);
    };

    const stopRotation = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startRotation();
        return () => stopRotation();
    }, []);

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
            setProjects(sortedProjects.slice(0, 3));
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
                            {projects.map((project, i) => (
                                <div 
                                    style={{ position: "relative" }}
                                    onClick={() => onSelectProject(project)}
                                >
                                    <motion.div 
                                        key={project.id} 
                                        className="latestproject-card"
                                        animate={{ 
                                            x: postionMap[step][i], 
                                            scale: scaleMap[step][i],
                                            opacity: hoveredIndex === i ? 1.1 : opacityMap[step][i] 
                                        }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        onMouseEnter={() => {
                                            stopRotation();
                                            setHoveredIndex(i);
                                        }}
                                        onMouseLeave={() => {
                                            startRotation();
                                            setHoveredIndex(null);
                                        }}
                                    >
                                        <div className="latestproject-card-image container">
                                            <img src={project.Image} alt={project.Title} className="latestproject-card-image"/>
                                        </div>
                                        <h2 className="latestproject-card-title">{project.Title}</h2>
                                        <div className="latestproject-languages">
                                            {project.Languages.slice(0, 3).map((lang, idx) => (
                                                <p key={idx} className="latestproject-languages-text">{lang}</p>
                                            ))}
                                            {project.Languages.length > 3 && (
                                                <p className="latestproject-languages-extras">+{project.Languages.length - 3}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                    <motion.div 
                                        key={project.id} 
                                        className="latestproject-card-border"
                                        animate={{ x: postionMap[step][i], scale: scaleMap[step][i] + 0.0375, opacity: hoveredIndex === i ? 1.1 : 0 }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        onMouseEnter={() => {
                                            stopRotation();
                                            setHoveredIndex(i);
                                        }}
                                        onMouseLeave={() => {
                                            startRotation();
                                            setHoveredIndex(null);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default LatestProjects;