import { motion } from "framer-motion"

export const Skills = () => {
    return (
        <motion.section id="skills" 
            className="skills" 
            inital={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="skills-container">
                <div className="skills-content">
                    <div className="skills-grid">
                        <div className="skills-grid-titles">
                            <h1 className="skills-title">Web Development</h1>
                            <h1 className="skills-title">Frameworks</h1>
                            <h1 className="skills-title">Mobile Development</h1>
                            <h1 className="skills-title">Programming & Back-End</h1>
                            <h1 className="skills-title">Databases & Tools</h1>
                        </div>
                        <div className="skills-grid-text">
                            <h2 className="skills-text">HTML, CSS, JavaScript</h2>
                            <h2 className="skills-text">React, Django</h2>
                            <h2 className="skills-text">React Native</h2>
                            <h2 className="skills-text">Python, C++, Java</h2>
                            <h2 className="skills-text">SQL, Git/Github</h2>
                        </div>
                        <div className="skills-grid-other">
                            <h1 className="skills-title">Others</h1>
                            <h2 className="skills-text-other">
                                Agile Development Cycle, Software Development Life Cycle (SDLC), 
                                Figma, Problem-Solving, Critical Thinking, Team Collaboration, Communication
                            </h2>
                        </div>
                    </div>
                    <span className="back-text-10">{"{ }"}</span>
                    <span className="back-text-11">{"< >"}</span>
                    <span className="back-text-12">@</span>
                </div>
            </div>
        </motion.section>
    );
};