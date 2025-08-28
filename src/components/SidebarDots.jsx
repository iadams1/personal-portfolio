import { useState, useEffect } from "react"

const sections = ["hero", "aboutme", "education", "skills", "projects", "contact"]

export const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
        <div className="sidebar-container">
            {sections.map((id, index) => (
                <a key={id} href={`#${id}`} className={`sidebar-ball ${activeIndex === index ? "active" : ""}`}/>
            ))}
        </div>
        <div className="sidetext-container">
            {sections.map((id, index) => (
                <h1 key={id} className={`sidetext ${activeIndex === index ? "" : "unactive"}`}>
                    {id === "aboutme" ? "about me" : `${id}`}
                </h1>
            ))}
        </div>
    </div>
    
  )
};