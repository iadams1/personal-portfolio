import { motion } from "framer-motion"

export const AboutMe = () => {
    return (
        <motion.section id="aboutme" 
            className="aboutme" 
            inital={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="aboutme-container">
                <div className="aboutme-content">
                    <motion.div 
                        className="aboutme-selfphoto" 
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src="/selfphoto.png"/>
                    </motion.div>
                    <span className="aboutme-span">I create, I build, I'm</span>
                    <motion.h1 
                        className="aboutme-name-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        Isaiah Adams
                    </motion.h1>
                    <p className="aboutme-description">
                        I'm a developer who loves bringing ideas to life through code. Whether it's designing clean, 
                        simple interfaces or building the logic that makes them work, I enjoy creating projects that 
                        people find useful and enjoyable to use.
                    </p>
                    
                    <span className="back-text-4">{"[ ]"}</span>
                    <span className="back-text-5">&&</span>
                    <span className="back-text-6">{"("} {")"}</span>
                </div>
            </div>
        </motion.section>
    );
};