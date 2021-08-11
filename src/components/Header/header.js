import React, { useEffect } from "react";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import "./style.scss";

export default function Navbar() {

  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    })

  }, [])
  
  return (
    // <header>
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        {/* <li>Intro</li>
        <li>About</li>
        <li>Featured</li> */}
      </ul>
      <h1 id="header-text">Fill Ickevics</h1>
    </section>
    // </header>
  )
}