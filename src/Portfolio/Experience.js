import "../css/Portfolio.css";
import experience from "../data/experience.json";

const Experience = () => {
    return (
        <section id="experience" className="container portfolio-section">
            <h1>Experience</h1>
            <div className="timeline-row row">
                <div className="col-md-4">
                    <h2>Degrees & Certifications</h2>
                    { experience.education.map((award, index)=> {
                        return (
                            <div className="card m-2 cert-item">
                                <div className="card-body">
                                    <h5 className="card-title">{award.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{award.year}</h6>
                                    <p className="card-text">{award.description}</p>    
                                </div>
                            </div>
                        )
                    })

                    }
                </div>
                <div className="col-md-8 timeline position-relative">
                    
                    <h2>Employment</h2>
                    <div className="position-relative">
                    <div className="timeline-line"></div>
                    { experience.work.map((work, index)=> {
                        return (
                            <div className="card m-2 timeline-item">
                                <div className="card-body">
                                    <h5 className="card-title">{work.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{work.year}</h6>
                                    <p className="card-text">{work.description}</p>    
                                </div>
                            </div>
                        )
                    })

                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;