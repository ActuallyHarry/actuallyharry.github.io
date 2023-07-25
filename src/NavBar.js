import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="container navbar navbar-expand">
                <a className="navbar-brand" href="https://actuallyadequate.com">Actually Adequate</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link" href="https://projects.actuallyadequate.com">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://projects.actuallyadequate.com/portfolio">Portfolio</a></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;