import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import magniv from "../../utils/images/magniv.png"
import koifish from "../../utils/images/koifish.png"
import enigma from "../../utils/images/enigma.png"
import derivledger from "../../utils/images/derivledger.png"
import cn from "classnames";

import "./style.scss";

const images = [
  {
    src: magniv,
    title: "Magniv",
    subtitle: "Modeling Agency",
    category: "Shooting / Adv.Campaing",
    link: 'https://tender-northcutt-d55c14.netlify.app/'
  },
  {
    src:enigma,
    title: "Enigma Securities",
    subtitle: "Cryptocurrency Exchange",
    category: "Shooting / Adv.Campaing",
    link: 'https://enigma-securities.io/'
  },
  {
    src: derivledger,
    title: "Derivledger",
    subtitle: "Frictionless Brokerage",
    category: "Shooting / Adv.Campaing",
    link: 'https://derivledger.com/'
  },
  {
    src: koifish,
    title: "KoiFish Project",
    subtitle: "Crypto Token",
    category: "Shooting / Adv.Campaing",
    link: 'https://www.goldkoicoin.com/'
  },
];

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
  link
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <a href={link} className="redirect" target="_blank">
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          {/* <h2 className="gallery-info-subtitle">{subtitle}</h2> */}
          <p className="gallery-info-category">{subtitle}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      </a>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      let sections = gsap.utils.toArray(".gallery-item-wrapper");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      

      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <div>Portfolio</div>
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}