import { motion } from "framer-motion";

export const ProjectDetails = ({ selected, onClose }) => {
    if (!selected) return null;

    console.log("Project found:", selected);
    
    return (
        <div className="specificproject-container">
            <div className="specificproject-card">
                <div className="specificproject-close-btn-container"><img src="/ArrowUpRight.png" className="specificproject-close-btn" onClick={onClose}/></div>
                <div className="specificproject-grid">
                    <div className="specificproject-image container">
                        <img src={selected.Image} className="specificproject-image"/>
                    </div>
                    <div className="specificproject-information">
                        <h1 className="specificproject-title">{selected.Title}</h1>  
                        <h2 className="specificproject-status">{selected.Status}</h2>  
                        <p className="specificproject-description">{selected.Description}</p> 
                        <div className="specificproject-languages">
                            {selected.Languages.map((lang, idx) => (
                                <p key={idx} className="specificproject-languages-text">{lang}</p>
                            ))}
                        </div>
                        <div className="specificproject-btn-container">
                            <a
                                href={selected.Github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.div 
                                    className="specificproject-github-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src="_Github_black.png" className="specificproject-github-img"/>
                                    <h3 className="specificproject-github-text">View</h3>
                                </motion.div>
                            </a>
                            <a
                                href={selected.Demo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.div 
                                    className="specificproject-demo-btn-border"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="specificproject-demo-btn">
                                        <img src="Demo.png" className="specificproject-demo-img"/>
                                        <h3 className="specificproject-demo-text">Demo</h3>
                                    </div>
                                </motion.div>
                            </a>
                             
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;