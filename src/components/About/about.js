import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader/sectionHeader"
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import "./style.scss";
import cn from "classnames"
import useOnScreen from "../../hooks/useOnScreen"


export default function About() {

  const ref = useRef()

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref)


  useEffect(() => {
    if (onScreen)
      setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      })
    }
  }, [reveal])

  return (
    <section className={cn("about-section", { "is-reveal": reveal })} data-scroll-section>
      <SectionHeader title="about" />
      <h2 ref={ref} id="headline" className={cn({ "is-reveal": reveal })} >
        Tech-savvy Full Stack Web Developer adept at contributing to highly collaborative work
        environment, finding solutions and determining customer satisfaction. Proven experience
        developing consumer-focused applications using React.js and JavaScript. Knowledgeable of
        backend and frontend development requirements. Handles any part of process with ease.
        Focused on creating clean, robust code with exceptional security. Achieves compatibility targets
        while meeting and exceeding customer demands
      </h2>
    </section>
  )
}