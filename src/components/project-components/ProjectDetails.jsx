export const ProjectDetails = ({ selected, onClose }) => {
    if (!selected) return null;

    console.log("Project found:", selected);
    
    return (
        <div className="specificproject-card">
            <img src="/ArrowUpRight.png" className="specificproject-close-btn" onClick={onClose}/>
            <div className="specificproject-grid">
                <div className="specificproject-image container">
                    <img src={selected.Image}/>
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
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;