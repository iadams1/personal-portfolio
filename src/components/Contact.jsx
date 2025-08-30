import { motion } from "framer-motion"

export const Contact = () => {
    return (
        <motion.section id="contact" 
            className="contact" 
            inital={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-grid">
                        <div className="contact-grid-information">
                            <h1 className="contact-information-title">Contact Me</h1>
                            <p className="contact-information-text">
                                I'd love to connect! Whether you have questions about my work, 
                                opportunities to collaborate, or just want to chat about technology, feel free to reach out. You can 
                                contact me by email or connect with me on LinkedIn, and I'll get back to you as soon as possible.
                            </p>
                            <p className="contact-information-subtext">
                                Located in Little Rock, Arkansas — open to in-person opportunities and connections.
                            </p>
                            <a
                                href="/IsaiahAdams_Resume.pdf" 
                                download="IsaiahAdams_Resume.pdf"
                                style={{ textDecoration: "none", color: "inherit", alignSelf: "center"}}
                            >
                                <motion.div 
                                className="contact-information-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                    <img src="/Paperclip.png" className="contact-information-paperclip"/>
                                    <h3 className="contact-information-button-text">Get Resume</h3>
                                </motion.div>
                            </a>
                            
                            <div className="contact-information-icons">
                                <a 
                                    href="https://github.com/iadams1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                  <motion.img
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                    src="/_Github.png"
                                    />  
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/isaiah-j-adams/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.10 }}
                                        whileTap={{ scale: 0.95 }}
                                        src="/_Linkedin.png"
                                    />
                                </a>
                                
                            </div>
                        </div>
                        <div className="contact-grid-form">
                            <div className="contact-form-title">
                                <h2 className="contact-title-1">Contact</h2>
                                <h1 className="contact-title-2">Form</h1>
                            </div>
                            <form className="contact-form">
                                <label>
                                    <h3 className="contact-form-text">Your Email Address</h3>
                                    <input type="email" name="email" placeholder="name@example.com" className="form-email" required />
                                    <p className="contact-form-subtext">Please Enter your vaild email.</p>
                                </label>
                                <label>
                                    <h3 className="contact-form-text">Subject</h3>
                                    <input type="text" name="subject" placeholder="Enter the subject of your message" className="form-subject" required/>
                                </label>
                                <label>
                                    <h3 className="contact-form-text">Message</h3>
                                    <textarea name="message" placeholder="Type your message here..." className="form-message" required/>
                                </label>
                                <motion.button 
                                    className="form-button"
                                    whileHover={{ scale: 1.10 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="form-submit-icon">
                                        <img src="/Send.png"/>   
                                    </div>
                                    <span className="form-submit-text">Send</span>
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};