import React from "react";
import "./style.scss";
import photos from "../../data"
import me from "../../utils/images/me.jpeg"


export default function Featured() {
  const [firstUrl, secondUrl] = photos
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>Hey its me</h6>
        <img src={me} data-scroll></img>
      </div>
      <div className="featured-column-layout">

        <h6>Test</h6>
        {/* <img src={secondUrl} data-scroll></img> */}
      </div>
    </section>
  )
}