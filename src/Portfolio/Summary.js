import "../css/Portfolio.css";
import githubImg from "../assets/github-mark-white.svg";
import linkedinImg from "../assets/linkedin.png";
import googleplayImg from "../assets/googleplay.png";
import itchioImg from "../assets/itchio.svg";
import tryhackmeImg from "../assets/tryhackme.png";
import emailImg from '../assets/email.svg';

const Summary = () => {
    return (
        <section id="summary" className="portfolio-section">
            <h1>Summary</h1>
            <div className="row">
                <aside className="col-md-4" id="social-container">
                    <div className="seperator"></div>
                    <div className="m-4">
                        <div className="mb-3"><a href="https://github.com/ActuallyAdequate" target="_blank"><img className="image-icon" src={githubImg} alt="GitHub Account"/>  <h5 className="d-inline ">GitHub</h5></a> </div>
                        <div className="mb-3"><a href="https://www.linkedin.com/in/harry-actuallyadequate" target="_blank"><img className="image-icon" src={linkedinImg} alt="LinkedIn Account"/>  <h5 className="d-inline">LinkedIn</h5></a> </div>
                        <div className="mb-3"><a href="mailto:actuallyadequate@gmail.com"><img className="image-icon" src={emailImg} alt="Email"/> <h5 className="d-inline">Email</h5></a></div>
                        <div className="mb-3"><a href="https://play.google.com/store/apps/developer?id=ActuallyAdequate" target="_blank"><img className="image-icon" src={googleplayImg} alt="Google Play Developer Account"/> <h5 className="d-inline">Google Play</h5></a> </div>
                        <div className="mb-3"><a href="https://actuallyadequate.itch.io/" target="_blank"><img className="image-icon" src={itchioImg} alt="Itch.io Account"/>  <h5 className="d-inline">Itch.io</h5></a> </div>
                        <div className="mb-3"><a href="https://tryhackme.com/p/OrangePi" target="_blank"><img className="image-icon" src={tryhackmeImg} alt="TryHackMe Account"/>  <h5 className="d-inline">TryHackMe</h5></a> </div>
                    </div>
                </aside>
                <div id="summary-description" className="col-md-8">
                    <div className="container">
                    <div>
                        Welcome to my portfolio page! I'm Harry, the myth, the legend, behind ActuallyAdequate.
                        <br/><br/>
                        The key information about me:
                        <ul>
                            <li>Studying Computer Science (Cybersecurity) (Network Design)</li>
                            <li>Making things whether digital, physical, or ethereal</li>
                            <li>Always working on cool cybersec and software projects</li>
                            <li>Player and Maker of Boardgames</li>
                        </ul>

                        Some Highlights of things I have made:
                        <ul>
                            <li>Valency (A Chemistry Game) - Helped to remember all the charges of ions during VCE</li>
                            <li>The AEAS - An Automated Eforensics Analysis System (currently in developement with a team of awesome people)</li>
                            <li>Dual Boardgame and Dining Table - To try my hand at carpentry</li>
                            <li>Chimaera - A biopunk RPG that I'm developing here and there</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Summary;