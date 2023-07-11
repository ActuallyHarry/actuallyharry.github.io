import Chip from './Chip';
import Cable from './Cable';
import "../css/Portfolio.css";
import anime from 'animejs';
import { useWindowSize } from '../react-extensions';
import { useEffect, useRef, useState } from 'react';
import ComputerMouseSVG from "../assets/computer-mouse-svg.js";

const Circut = ({scrollToIds, onScrollTo}) =>{
    let circutEl = useRef();
    let windowSize = useWindowSize();
    let size = [Math.max(300, windowSize[0]), Math.max(300, windowSize[1]) ]
    let cpuSize =Math.max(Math.min(size[0], size[1])*0.35,100);
    let cpuLoc = {x:size[0]/2 ,y:size[1]/2}
    let iowidth = cpuSize/10;

    let chip1 = (windowSize[0] > windowSize[1] ? {width:cpuSize*0.8, height: cpuSize*0.5, x: size[0]/5, y: size[1]/4, id:"chip1", innerPer:{x:0.5, y:0.4}, expandPer:{x:1.3, y:0.7}}
    : {width:cpuSize*0.85, height: cpuSize*0.8, x: size[0]/5, y: size[1]/4, id:"chip1", innerPer:{x:0.75, y:0.75}, expandPer:{x:1.3, y:0.8}});
    let chip2 = (windowSize[0] > windowSize[1] ? {width: cpuSize*0.6, height: cpuSize * 1.3, x:size[0]/8 * 7, y: size[1]/3, id:"chip2", innerPer:{x:0.35, y:0.5}, expandPer:{x:0.9, y:1.4}}
    : {width: cpuSize*0.6, height: cpuSize * 1.3, x:size[0]/8 * 7, y: size[1]/3, id:"chip2", innerPer:{x:0.7, y:0.73}, expandPer:{x:0.8, y:1.7}});
    let chip3 = (windowSize[0] > windowSize[1] ? {width: cpuSize*1.5, height: cpuSize * 0.5, x:size[0]/3*2, y: size[1] / 5 *4, id: "chip3", innerPer:{x:0.5, y:0.4}, expandPer:{x:1, y:0.8}}
    : {width: cpuSize*1.5, height: cpuSize * 0.5, x:size[0]/3*2, y: size[1] / 5 *4, id: "chip3", innerPer:{x:0.75, y:0.7}, expandPer:{x:1.3, y:0.9}} )
    let chip4 = (windowSize[0] > windowSize[1] ? {width: cpuSize*0.8, height: cpuSize * 1, x: size[0]/6, y: size[1]/11*7, id: "chip4", innerPer:{x:0.4, y:0.5}, expandPer:{x:0.8, y:1.5}}
:{width: cpuSize*0.8, height: cpuSize * 1, x: size[0]/6, y: size[1]/11*7.5, id: "chip4", innerPer:{x:0.75, y:0.7}, expandPer:{x:0.8, y:2.2}});

    let cpuProng1 = {x: cpuLoc.x - iowidth*2 , y: cpuLoc.y - cpuSize/2}
    let cpuProng2 = {x: cpuLoc.x + cpuSize/2, y: cpuLoc.y + iowidth*2}
    let cpuProng3 = {x: cpuLoc.x, y:cpuLoc.y+cpuSize/2}
    let cpuProng4 = {x: cpuLoc.x - cpuSize/2, y: cpuLoc.y - iowidth*2 }
    let cable1Path = [cpuProng1, {x:cpuProng1.x, y:size[1]/7}, {x:(chip1.x + cpuLoc.x)/2, y:size[1]/7}, {x:(chip1.x + cpuLoc.x)/2, y:size[1]/2.6}, {x:chip1.x + iowidth*1.5,  y:size[1]/2.6 }, {x:chip1.x + iowidth*1.5, y:size[1]/4 + chip1.height/2}]
    let cable2Path = [cpuProng2, {x:(cpuProng2.x+chip2.x-chip2.width/2)/2, y:cpuProng2.y}, {x:(cpuProng2.x+chip2.x-chip2.width/2)/2, y:chip2.y - iowidth *2.7}, {x:chip2.x-chip2.width/2, y:chip2.y - iowidth *2.7}];
    let cable3Path =  (windowSize[0] > windowSize[1] ? [cpuProng3, {x:cpuProng3.x, y:cpuProng3.y+iowidth}, {x:chip3.x-chip3.width/3, y:cpuProng3.y+iowidth}, {x:chip3.x-chip3.width/3, y:chip3.y-chip3.height/2-iowidth}, {x:chip3.x + iowidth*3.3, y:chip3.y-chip3.height/2-iowidth}, {x:chip3.x + iowidth*3.3, y:chip3.y-chip3.height/2}]
    : [cpuProng3,  {x:cpuProng3.x, y:chip3.y-chip3.height/2-iowidth}, {x:chip3.x + iowidth*3.3, y:chip3.y-chip3.height/2-iowidth}, {x:chip3.x + iowidth*3.3, y:chip3.y-chip3.height/2}] );
    let cable4Path = (windowSize[0] > windowSize[1] ? [cpuProng4, {x: cpuProng4.x-iowidth*2, y:cpuProng4.y}, {x:cpuProng4.x-iowidth*2, y: chip4.y}, {x:chip4.x+chip4.width/2, y:chip4.y}]
  : [cpuProng4, {x: cpuProng4.x-iowidth*2, y:cpuProng4.y}, {x:cpuProng4.x-iowidth*2, y: chip4.y - chip4.height/2 - iowidth}, {x:chip4.x+chip4.width/2 + iowidth, y: chip4.y - chip4.height/2 - iowidth}, {x:chip4.x+chip4.width/2 + iowidth, y:chip4.y}, {x:chip4.x+chip4.width/2, y:chip4.y}] );
    anime.set(".chip-click-gradient", {translateY:"-75%"})
    const animateSurge = anime.timeline({
      easing: 'easeOutExpo',
      autoplay: false,
      duration: 2000
    }).add({
      targets: `#cpu-gradient`,
      translateY: "0%",
      easing:"linear"
    })

    useEffect(() => {
          window.scrollTo(cpuLoc.x - (size[0]/2), cpuLoc.y - (size[1]/2));
    },[]);

    return (
        <section ref={circutEl}  id="circut" className="portfolio-section position-relative" style={{height: `${size[1]*2}px`}}>
            <Cable thickness = {iowidth-2} path={cable1Path} toChipId={chip1.id} animatePower={animateSurge}/>
            <Cable thickness={iowidth-2} path={cable4Path} toChipId={chip4.id} animatePower={animateSurge}/>
            <Cable thickness={iowidth-2} path={cable2Path} toChipId={chip2.id} animatePower={animateSurge}/>
             <Cable thickness={iowidth-2} path={cable3Path} toChipId={chip3.id} animatePower={animateSurge}/>
        <Chip  title={<ComputerMouseSVG/>} chipId={"cpu"} width={cpuSize} height={cpuSize} x={cpuLoc.x} y={cpuLoc.y} iowidth={iowidth}  innerPer={{x:0.4, y:0.4}} expandPer={{x:0.55, y:0.55}} onClick={()=>{}} animateClick={animateSurge} handleTouchSeperately={false}/>
        <Chip title="SUMMARY" chipId={chip1.id} width={chip1.width} height={chip1.height} x={chip1.x} y={chip1.y}  innerPer={chip1.innerPer} expandPer={chip1.expandPer} iowidth={iowidth} onClick={()=>{onScrollTo(scrollToIds[0])}} hideBydDefault={true} handleTouchSeperately={true}/>
        <Chip title={<>P<br/>R<br/>O<br/>J<br/>E<br/>C<br/>T<br/>S</>} chipId={chip4.id} width={chip4.width} height={chip4.height} x={chip4.x} y={chip4.y} innerPer={chip4.innerPer} expandPer={chip4.expandPer} iowidth={iowidth} onClick={()=>{onScrollTo(scrollToIds[1])}} hideBydDefault={true} handleTouchSeperately={true}/>
        <Chip title={<>E<br/>X<br/>P<br/>E<br/>R<br/>I<br/>E<br/>N<br/>C<br/>E</>} chipId={chip2.id} width={chip2.width} height={chip2.height} x={chip2.x} y={chip2.y} innerPer={chip2.innerPer} expandPer={chip2.expandPer} onClick={()=> {onScrollTo(scrollToIds[2])}}  iowidth={iowidth} hideBydDefault={true} handleTouchSeperately={true}/>
        <Chip title="KNOWLEDGE" chipId={chip3.id} width={chip3.width} height={chip3.height} x={chip3.x} y={chip3.y} innerPer={chip3.innerPer} expandPer={chip3.expandPer} iowidth={iowidth} hideBydDefault={true}  onClick={()=>{onScrollTo(scrollToIds[3])}} handleTouchSeperately={true}/>
        </section>
    )
}

export default Circut;