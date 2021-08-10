import React from "react";
import "./style.scss";
import photos from "../../data"


export default function Featured() {
  const [firstUrl, secondUrl] = photos
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstUrl} data-scroll></img>
      </div>
      <div className="featured-column-layout">

        <h6>lilly</h6>
        <img src={secondUrl} data-scroll></img>
      </div>
    </section>
  )
}