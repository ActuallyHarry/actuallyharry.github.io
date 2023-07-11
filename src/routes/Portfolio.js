import { useLocation } from "react-router-dom";
import Circut from "../Circut/Circut";
import Knowledge from "../Portfolio/Knowledge";
import "../css/Portfolio.css";
import Projects from "../Portfolio/Projects";
import Experience from "../Portfolio/Experience";
import Summary from "../Portfolio/Summary";

const Portfolio = () => {

  const handleScrollTo = (elementId) => {
    let section = document.getElementById(elementId);
    section.scrollIntoView({behaviour: "smooth"});
  }

   return(
    <article className="portfolio">
      <Circut onScrollTo={handleScrollTo} scrollToIds={["summary", "projects", "experience", "knowledge" ]}/>
      <PortfolioNav/>

      <Summary/>
      <Projects/>
      <Experience/>
      <Knowledge/>
    </article>
   )
}


const PortfolioNav = () => {
  
  const location = useLocation();
  return (
  <nav id="portfolio-nav" className="sticky-top navbar  px-3">
  <a className="navbar-brand" href={`${location.pathname}#`}>Portfolio</a>
  <ul className="nav nav-tabs">
    <li className="nav-item">
    <a className="nav-link" href={`${location.pathname}#summary`}>Summary</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href={`${location.pathname}#projects`}>Projects</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href={`${location.pathname}#experience`}>Experience</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href={`${location.pathname}#knowledge`}>Knowledge</a>
    </li>
</ul>

</nav>
  )
}




export default Portfolio;