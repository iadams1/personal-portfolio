import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Hero = () => {
    const titles = [
        "Software Developer",
        "Full Stack Developer",
        "Front-End Developer",
        "Back-End Developer",
        "Web Developer",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % titles.length)
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <motion.section id="hero" 
            className="hero" 
            inital={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div clasName="hero-container">
                <div className="hero-content">
                    <span className="hero-span">Hello, I'm</span>
                    <h1 className="hero-large-logo">Isaiah</h1>
                    <div className="rotating-title-container">
                        <AnimatePresence>
                            <motion.h1 
                                className="hero-changing-title"
                                key={titles[currentIndex]}
                                inital={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 1 }}
                                exit={{ opacity: 0, y: 60 }}
                                transition={{ duration: 0.9 }}
                            >
                                {titles[currentIndex]}
                            </motion.h1>
                        </AnimatePresence>
                    </div>
                    <span className="back-text-1">{"{ }"}</span>
                    <span className="back-text-2">//.</span>
                    <span className="back-text-3">{"<"} {">"}</span>
                </div>
            </div>
        </motion.section>
    );
};