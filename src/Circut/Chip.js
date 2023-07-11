import "../css/Chip.css";
import {useRef, useState, useEffect} from "react";
import anime, { set } from 'animejs';

const Chip = ({width, height, x,y, iowidth, chipId, hideBydDefault, onClick, animateClick, innerPer, expandPer, title, handleTouchSeperately}) => {

    let ratio = height/width;

    let ionumx = Math.round(width / (iowidth*4));
    let ionumy = Math.round(height / (iowidth*4));

    return (
        <div id={chipId} className={`chip`} style={{height:height + "px", width: width +"px", left:x+"px", top:y+"px", opacity:(hideBydDefault? 0 : 1)}}>
            {width >= height ?
            <>
           <div className="position-absolute top-0 start-50 translate-middle-x chip-io-horizontal" style={{height: "12.5%", width:0.5*height/ratio + "px"}}>
            {Array(ionumx).fill(0).map((value, index)=>{
                        return <div key={index} className="end-0 chip-io h-100" style={{width: iowidth + "px"}}></div>
                    })}
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x chip-io-horizontal" style={{height: "12.5%", width:0.5*height/ratio + "px"}}>
           {Array(ionumx).fill(0).map((value, index)=>{
                    return <div key={index} className="end-0 chip-io h-100" style={{width: iowidth + "px"}}></div>
                })}
            </div>
            </>:<></>
            }
            {height >= width ?
            <>
            <div className="position-absolute top-50 end-0 translate-middle-y chip-io-vertical" style={{height: "50%", width:0.125 * height/ratio + "px"}}>
                {Array(ionumy).fill(0).map((value, index)=>{
                        return <div key={index} className="end-0 chip-io w-100" style={{height: iowidth + "px"}}></div>
                    })}
            </div>
            <div className="position-absolute top-50 start-0 translate-middle-y chip-io-vertical" style={{height: "50%", width:0.125*height/ratio  + "px"}}>
                {Array(ionumy).fill(0).map((value, index)=>{
                        return <div key={index} className="end-0 chip-io w-100" style={{height: iowidth + "px"}}></div>
                    })}
            </div>
            </>:<></>
            }
            
            <ChipBlock title={title} chipId={chipId} animateClick={animateClick} height={0.75*height} width={0.75*height/ratio} hoverSize={{originalHeight: innerPer.y*height, newHeight:expandPer.y*height, originalWidth:innerPer.x * height/ratio, newWidth: expandPer.x * height/ratio}} onClick={onClick} handleTouchSeperately={handleTouchSeperately}/>
            {/* <ChipBlock height={0.4*height}  width={0.4/ratio * width} hoverSize={{originalHeight: 0.4*height, newHeight:0.6*height, originalWidth:0.4/ratio * width, newWidth: 0.6/ratio * width }} clickThru={true}/> */}
        </div>
    )
}


const ChipBlock = ({height, width, hoverSize, onClick, animateClick, chipId, title, handleTouchSeperately}) => {
  let [stopClick, setStopClick] = useState(!handleTouchSeperately)
  let chipDir = height > width ? "chip-vertical" : "chip-horizontal";

    let animateEl = useRef();
    let textEl = useRef();
    function animateHover(el, width, height, duration) {
        anime.remove(el);
        anime({
          targets: el,
          height: height,
          width: width,
          duration: duration
        });
      }
      
      function enterHover(el) {
        let newWidth = hoverSize.newWidth
        let newHeight = hoverSize.newHeight
        animateHover(el, newWidth, newHeight, 1500)
      };
      
      function leaveHover(el) {
        animateHover(el, hoverSize.originalWidth, hoverSize.originalHeight, 1000)
      };

     

    //comment
    return(
        <div  className={"chip-block " + (onClick? "chip-click " : "")} onTouchEnd={()=>{stopClick? setStopClick(false): setStopClick(true)}} onMouseLeave={()=>{setStopClick(!handleTouchSeperately)}} onClick={()=>{if(onClick && (!stopClick || !handleTouchSeperately)) {onClick(); if(animateClick){animateClick.play();}}}} style={{height: height + "px", width:width + "px"}}>
            {onClick && chipId == "cpu"? <div ref={animateEl} id={`${chipId}-gradient`} className="chip-click-gradient"></div> : <></>}
            {hoverSize? <div className={`chip-block chip-hover ${chipDir}`} onMouseEnter={(e)=>{enterHover(e.target)}} onMouseLeave={(e)=>{leaveHover(e.target)}} style={{height: hoverSize.originalHeight + "px", width: hoverSize.originalWidth + "px"}}><h2 ref={textEl} className="chip-text">{title}</h2></div> : <></>}
        </div>   
    )    
} 

export default Chip;