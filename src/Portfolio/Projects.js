import { useEffect, useRef, useState } from 'react';
import '../css/Portfolio.css';
import { useWindowSize } from '../react-extensions';
import projectData from '../data/projects.json';
import sourceData from '../data/sources.json';
import { Link } from 'react-router-dom';
import github from '../assets/github-mark-white.svg';

const Projects = () => {
  const [curSlide, setCurSlide] = useState(0);
  const projectSlides = useRef();
  const touchStartX = useRef();
  const size = useWindowSize();
  let itemsPerSlide = 3;
  let offset = 1;
  if(size[0] < 960) {itemsPerSlide = 2}
  if(size[0] < 768) {itemsPerSlide = 1; offset=0}



 useEffect(()=> {
  let slides = Array.from(projectSlides.current.children);
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx)}%)`;
  });
 }, [projectSlides])

  const handleChangeSlide = (index) => {
    
    let nextSlide = index;
    let slides = Array.from(projectSlides.current.children);
    console.log(slides);
    let maxSlides = slides.length-1;
    if(nextSlide > maxSlides) nextSlide = 0;
    if(nextSlide < 0) nextSlide = maxSlides;
    setCurSlide(nextSlide);

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - nextSlide)}%)`;
    });
  }

  const handleSlideSwipe = (touchStartX, touchEndX) => {
    if(touchStartX < touchEndX-5){
      handleChangeSlide(curSlide-itemsPerSlide+offset);
   }else if(touchStartX > touchEndX+5){
      handleChangeSlide(curSlide+itemsPerSlide-offset);
   }
  }
      
        return (
          <section id="projects" className="portfolio-section">
          <h1>Projects</h1>
          <div  className="slider carousel-light" onTouchStart={(e)=>{touchStartX.current = e.touches[0].clientX}} onTouchEnd={(e) => {handleSlideSwipe(touchStartX.current, e.changedTouches[0].clientX)}}>
            <div ref={projectSlides} className="slide-rotate m-4">
            {itemsPerSlide > 1?<div className="slide" style={{width: `${100/itemsPerSlide}%`}}></div>:<></>}
              {projectData.map((project) => {
                if(project.source === "portfolio") {
                  return (
                    <div key={project.id} className="slide" style={{width: `${100/itemsPerSlide}%`}}>
                      <div className="card m-4">
                        <Link to={project.link}><img className="card-img-top" src={project.thumbnail} alt=""/></Link>
                        <div className="card-body">
                          <h5 className="card-title d-inline-block m-1">{project.name}</h5>
                          <Link className="btn btn-sm btn-primary m-1" to={`${sourceData[project.source].link}${project.id}`}>Details</Link>
                          {project.github != undefined? <a className="btn btn-sm btn-dark m-1" href={project.github} target="_blank"><img style={{height:"1.3rem"}} src={github}/></a>:<></>}
                          {project.live != undefined? <a className="btn btn-sm btn-secondary m-1" href={project.live} target="_blank">Demo</a>:<></>}
                        </div>
                      </div>
                    </div>
                  );
                }
              })
              }
              
              
            </div>
            <button className="carousel-control-next" onClick={()=>{handleChangeSlide(curSlide+itemsPerSlide-offset)}}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <button className="carousel-control-prev" onClick={()=>{handleChangeSlide(curSlide-itemsPerSlide+offset)}}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Prev</span>
            </button>
            </div>
            <div className="slide-footer"><div></div></div>
      </section>
        );
}

export default Projects;