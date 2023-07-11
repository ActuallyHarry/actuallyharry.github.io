import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
        <div className="container navbar navbar-expand-md">
            <a className="navbar-brand" href="actuallyadequate.com">Actually Adequate</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" to="actuallyadequate.com">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="portfolio.actuallyadequate.com">Portfolio</Link></li>
                    
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default NavBar;