import "./style.scss";
import me from "../../utils/images/me.jpeg"
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";

import "./style.scss";


export default function Featured() {

  const [scrollYPos, setScrollYPos] = useState(window.pageYOffset)
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });

      gsap.fromTo(
        split.lines,
        {
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <section data-scroll-section>
      <div className="paper-wrapper "  >
        <div className="text-parent">
          <h1
            className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref}
          >Full Stack</h1>
          <h1 className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref} >Javascript </h1>
          <h1 className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref}>React Js</h1>
          <h1 className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref}>Node Js</h1>
          <h1 className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref}> And many more</h1>


        </div>

        <img data-scroll src={me}  ></img>

        <div className="text-parent">

          <h1 className={cn("outline", { "is-reveal": reveal })}
            id="location-text" ref={ref}> Full Stack</h1>
          <h1 className={cn("outline", { "is-reveal": reveal })}
            id="location-text" ref={ref}> Javascript </h1>
          <h1 className={cn("outline", { "is-reveal": reveal })}
            id="location-text" ref={ref}> React Js </h1>
          <h1 className={cn("outline", { "is-reveal": reveal })}
            id="location-text" ref={ref}> Node Js</h1>
          <h1 className={cn("outline", { "is-reveal": reveal })}
            id="location-text" ref={ref}> And many more</h1>
        </div>
      </div>
    </section>
  )
}