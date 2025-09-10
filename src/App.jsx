import './App.css'
import { NavBar } from "./components/NavBar"
import { Sidebar } from "./components/SidebarDots"
import { Hero } from "./components/Hero"
import { AboutMe } from "./components/AboutMe"
import { Education } from "./components/Education"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { ProjectDetails } from './components/project-components/ProjectDetails'
import { useEffect, useState } from "react";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }
  
    return () => {
      document.body.classList.remove("overlay-open");
    }
  }, [selectedProject]);

  return (
    <>
      <div className="color-overlay"></div>
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        
        {/* Website Pages */}
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Projects onSelectProject={setSelectedProject}/>
        <Contact />

        {/* Footer */}
        <>
        <p className="footer"> &copy; 2025 Isaiah Adams. All rights reserved.</p>
        </>
        
      </div>

      {/* Navigation & Sidebar Pages  */}
      <NavBar />
      <Sidebar />

      {selectedProject && (
          <ProjectDetails 
              selected={selectedProject}
              onClose={() => setSelectedProject(null)}
          />
      )}

    </>
  )
}

export default App
