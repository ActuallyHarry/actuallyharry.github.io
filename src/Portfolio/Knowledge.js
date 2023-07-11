import { useState } from "react";
import "../css/Portfolio.css";
import skills from "../data/skills.json";

const Knowledge = () => {
    return (
        <section id="knowledge" className="portfolio-section">
            <div className="container">
            <h1>Knowledge</h1>
            
            {Object.keys(skills).map((skillsetkey, index)=>{
                let skillset = skills[skillsetkey];
                return (
                    <div key={index} className="d-md-flex skill-container" >
                        <h5 className="skill-title">{skillset["name"]}</h5>
                        <div className="skill-content">
                        {   
                            Object.keys(skillset).map((skillkey, index)=> {
                            let skill = skillset[skillkey];
                            if(skillkey !== "name") {
                                if(skill[2] === true) return <img key={index} className="d-inline card image-icon m-2 rounded-0" style={{border:"none"}} src={skill[0]} alt={skill[1]} data-toggle="tooltip" data-placement="top" title={skill[1]}/>
                            }
                        })}
                        </div>
                    </div>
                )
            })}            
            
            
            <div id="knowledge-learning" className="skill-content">
            <h2>Learning</h2>
            {Object.keys(skills).map((skillsetkey)=>{
                let skillset = skills[skillsetkey];  
                return Object.keys(skillset).map((skillkey, index)=> {
                    let skill = skillset[skillkey];
                    if(skillkey !== "name") {
                        //=== false is used becuase undefined is used to be like ternary value
                        if(skill[2] === false) return <img key={index} className="d-inline card image-icon m-2 rounded-0" style={{border:"none"}} src={skill[0]} alt={skill[1]} data-toggle="tooltip" data-placement="top" title={skill[1]}/>
                    }
                })
            })} 
            </div>
            </div>
        </section>
    )
}

export default Knowledge;