import { useLocation } from "react-router-dom";
import Circut from "../Circut/Circut";
import Knowledge from "../Portfolio/Knowledge";
import "../css/Portfolio.css";
import Projects from "../Portfolio/Projects";
import Experience from "../Portfolio/Experience";
import Summary from "../Portfolio/Summary";
import { HashLink} from "react-router-hash-link";

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
  <HashLink className="navbar-brand" to={`#`}>Portfolio</HashLink>
  <ul className="nav nav-tabs">
    <li className="nav-item">
    <HashLink className="nav-link" to={`#summary`}>Summary</HashLink>
    </li>
    <li className="nav-item">
    <HashLink className="nav-link" to={`#projects`}>Projects</HashLink>
    </li>
    <li className="nav-item">
    <HashLink className="nav-link" to={`#experience`}>Experience</HashLink>
    </li>
    <li className="nav-item">
    <HashLink className="nav-link" to={`#knowledge`}>Knowledge</HashLink>
    </li>
</ul>

</nav>
  )
}




export default Portfolio;