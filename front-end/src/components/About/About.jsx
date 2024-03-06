import React, { useState } from "react";
import "./About.css";
import {Contribution,Values,Support,Picure1} from "../../images";

const About = () => {
  const [currentImage, setCurrentImage] = useState(Support);
  return (
    <section id="about" className="white">
      <div className="wrapper">
        <h2>Why Career Shapers?</h2>
        <div className="content-container">
          <ul className="about-list">
            <li onMouseEnter={() => setCurrentImage(Support)}>
             Our Mission
            </li>
            <li onMouseEnter={() => setCurrentImage(Contribution)}>Our Vision</li>
            <li onMouseEnter={() => setCurrentImage(Values)}>
              Our Values
            </li>
          </ul>

          <div className="about-image">
            <img src={currentImage}></img>
          </div>
        </div>
        <img src={Picure1} className="Picture1"></img>
      </div>
    </section>
  )
}
export default About;