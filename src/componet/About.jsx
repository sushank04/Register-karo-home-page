import React from "react";
import { about, aboutD, aboutD2 } from "../assets/assests.js";

const About = () => {
  return (
    <>
      <div className="about-container-main">
        <div className="about-container">
          <div className="left-container">
            <h2 className="heading">WELCOME TO REGISTERKARO.IN</h2>
            <h2 className="heading1">
              About <span>Register Karo</span>
            </h2>
            <p className="about-desc">
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I’m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction.
              He has built a solid team which has consistently delivered on
              projects thereby exceeding everyone’s expectations. <br />
              <br />I would strongly recommend their services to any
              organization that is looking for solid, reliable, and predictable
              outcomes.
            </p>
            <button className="about-btn">Learn More</button>
          </div>

          <div className="right-container">
            <img src={about} alt="about" />
          </div>
          <img className="about-design2" src={aboutD2} />
          <img className="about-design" src={aboutD} />
        </div>
      </div>
    </>
  );
};

export default About;
