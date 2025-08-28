import { motion } from "framer-motion"

export const Education = () => {
    return (
        <motion.section id="education" 
            className="education" 
            inital={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="education-container">
                <div className="education-content">
                    <div className="education-grid">
                        <motion.div 
                            className="education-grid-1"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h1 className="education-grid-heading">Arkansas Tech University</h1>
                            <h2 className="education-grid-title">Bachelors of Science in Computer Science</h2>
                            <h3 className="education-grid-subtitle">Minor in Business Administration</h3>
                            <span className="education-grid-text">Expected May 2026</span>
                        </motion.div>
                        <motion.div 
                            className="education-grid-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h1 className="education-grid-heading">Arkansas Tech University</h1>
                            <h2 className="education-grid-title">Associate of Applied Science in Information Technology</h2>
                            <span className="education-grid-text">Aug 2022 - Dec 2024</span>
                        </motion.div>
                        <motion.div 
                            className="education-grid-3"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h1 className="education-grid-heading">Certifications & Training</h1>
                            <h2 className="education-grid-title">Proficiency in Computer Programming, Proficiency in Mathematics</h2>
                        </motion.div>
                    </div>
                    <span className="back-text-7">&&</span>
                    <span className="back-text-8">{"{ }"}</span>
                    <span className="back-text-9">#</span>
                </div>
            </div>

        </motion.section>
    );
};