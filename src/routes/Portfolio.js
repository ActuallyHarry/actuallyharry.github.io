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
  console.log(location);
  return (
  <nav id="portfolio-nav" className="sticky-top navbar  px-3">
  <a className="navbar-brand" href={`${window.PUBLIC_URL}/#`}>Portfolio</a>
  <ul className="nav nav-tabs">
    <li className="nav-item">
    <a className="nav-link" href={`#summary`}>Summary</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href={`#projects`}>Projects</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href={`#experience`}>Experience</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href={`#knowledge`}>Knowledge</a>
    </li>
</ul>

</nav>
  )
}




export default Portfolio;