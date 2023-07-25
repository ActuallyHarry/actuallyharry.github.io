import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        document.documentElement.setAttribute('data-theme', 'light');
              localStorage.setItem('theme', 'light');
        }    
    }
    
    useEffect(() => {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme  = localStorage.getItem('theme');
    
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
        toggleSwitch.addEventListener('change', switchTheme, false);
    },[])

    return (
        <nav>
        <div className="container navbar navbar-expand">
            <a className="navbar-brand" href="http://actuallyadequate.com"><img src="AACyber.svg"/></a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="https://projects.actuallyadequate.com/portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="https://actuallyadequate.itch.io">Games</a></li>
            </ul>
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="theme-slider round"></div>
              </label>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;