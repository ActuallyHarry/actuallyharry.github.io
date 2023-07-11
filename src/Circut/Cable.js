import anime from 'animejs';
import '../css/Cable.css';
import { useRef, useEffect} from 'react';

const Cable = ({thickness, path, toChipId, animatePower}) => {
    let cables = useRef(null);
    
    useEffect(() => {
        for(let i =0; i < cables.current.children.length; i++){
            let offset =  "-=1700";
            let cable = cables.current.children[i];
            animatePower.add(
                {
                    targets: cable.children[0],
                    keyframes: [
                        {top:"-200%" ,duration:1500},
                        {top:"-300%", duration:500}
                    ],
                    easing:"linear",
                }, offset
            )
        }
        animatePower.add({
            targets: `#${toChipId}`,
            opacity: 1
        }, "-=1700")
    });

   return (
    <div ref={cables}>
    {
        path.map(({x,y}, index) => {
            let size = {x: thickness , y: thickness, transX:"-50%", transY:"-50%", rot:"0deg"}
            if(index < path.length-1) {
                let next = path[index+1];
                let dist = {x:next.x - x, y:next.y - y};
                let length = Math.max(Math.abs(dist.x), Math.abs(dist.y))
                size.x = thickness;
                size.y = length + thickness -3;
                //determien rotation
                if(dist.y > 0) {size.rot = "180deg"; size.transY = `-${thickness/2}px`;}
                if(dist.x > 0) {size.rot = "90deg"; size.transX = `${length/2 - thickness/2}px`}
                if(dist.y < 0) {size.rot = "0deg"; size.transY = `-${length + thickness/2}px`;}
                if(dist.x < 0) {size.rot = "270deg"; size.transX = `-${length/2 + thickness/2}px`}
            
            return (
                <div key={`${toChipId}-${index}`} className={"cable "} style={{borderRadius:thickness/2 , width: size.x, height: size.y, left:x,top:y, transform: `translate(${size.transX},${size.transY}) rotate(${size.rot})`}}>
                    <div  className="cable-gradient"></div>
                </div>
            )
            }
        })
    }
    </div>
    )
}

export default Cable;