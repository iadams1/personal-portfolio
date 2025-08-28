import './App.css'
import { NavBar } from "./components/NavBar"
import { Sidebar } from "./components/SidebarDots"
import { Hero } from "./components/Hero"
import { AboutMe } from "./components/AboutMe"
import { Education } from "./components/Education"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"

import { useEffect, useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="color-overlay"></div>
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        
        {/* Website Pages */}
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <>
        <p className="footer"> &copy; 2025 Isaiah Adams. All rights reserved.</p>
        </>
        
      </div>

      {/* Navigation & Sidebar Pages  */}
      <NavBar />
      <Sidebar />

    </>
  )
}

export default App
