import { useSearchParams } from "react-router-dom";
import projectData from "../data/projects.json";
import skillsData from "../data/skills.json";
import "../css/Project.css"
import { useEffect} from "react";
import githubImg from "../assets/github-badge.svg";
import googleplayImg from "../assets/google-play-badge.png";
import itchImg from "../assets/itch_io_badge.svg";

const Project = () => {
    const [queryParams] = useSearchParams();
    let projectID = queryParams.get("id");
    let project = projectData.find((item) => {return item.id == projectID})

    useEffect(()=> {
        window.scrollTo(0,0);
    },[])

    return (
        <article className="project-view">
            <header>
            <div className="header-banner"></div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            </header>
            <div className="container">            
            {project.assets.map((asset, index)=> {
                switch(asset.type){
                    case "pdf":
                        return <PDF linkToPDF={asset.link} id={index} title={asset.title}/>
                    case "list": 
                        return <List items={asset.items} id={index} title={asset.title}/>
                    case "links":
                        return <Links links ={asset.links} id={index}/>
                    case "screenshot":
                        return <ScreenShot src={asset.src} id={index} alt={asset.alt} width={asset.width}/>
                    case "video":
                        return <Video code={asset.code} id={index}/>
                    default:
                        return null

                }
            })}
            </div>
            <div className="project-skills">
            <div className="project-skills-banner"></div>
            <h2>Technology</h2>
            {project.skills.map((skill, index) => {
                let catskill = skill.split("-");
                let skillsrc = skillsData[catskill[0]][catskill[1]];
                return (
                    <img key="index" className="image-icon m-2" src={skillsrc[0]} alt={skillsrc[1]} data-toggle="tooltip" data-placement="top" title={skillsrc[1]}></img>
                )
            })}
            </div>
        </article>
    )
}

const Video = ({code}) => {
    return (
        <div className="card m-1 text-center" >
        <div className="card-body">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${code}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    )
}

const ScreenShot = ({src, alt, width}) => {
    return (
        <div className="card m-1 text-center" >
        <div className="card-body">
        <img className="card-img" src={src} alt={alt} style={{width: width}}/>
        </div>
    </div>
    )
}

const Links = ({links}) => {
    return (
        <div id="links" className="card m-1">
            <div className="card-body">
                {links.map((link, index)=> {   
                    switch(link[0]) {
                        case "github": return <a key={index} href={link[1]} target="_blank"><img className="image-icon m-2" src={githubImg}/></a>
                        case "googleplay": return <a key={index} href={link[1]} target="_blank"><img className="image-icon m-2" src={googleplayImg}/></a>
                        case "itch": return <a key={index} href={link[1]} target="_blank"><img className="image-icon m-2" src={itchImg}/></a>
                        case "live": return <a key={index} href={link[1]} target="_blank" className="btn btn-primary">Live Demo</a>
                    }
                })}
            </div>
        </div>
       
    )
}

const List = ({items, title}) => {
    return (
        <div className="card m-1">
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <ul>
                {items.map((item, index)=> {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            </div>
        </div>
       
    )
}

const PDF = ({linkToPDF, id, title}) => {

    return (
        <div class="accordion m-1" id={`accordion-${id}`}>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}>
                {title}
            </button>
            </h2>
            <div id={`collapse-${id}`} class="accordion-collapse collapse" data-bs-parent={`#accordion-${id}`}>
            <div class="accordion-body">
                <iframe src={`${linkToPDF}`} width="100%" height="400vh"/>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Project;

