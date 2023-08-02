import React from "react";
import "./About1.css";
import Ajay from "../Components/images/Ajay pics/Ajaypic.png";
import ReadMore from "./button";

function About1() {
  return (
    <>
      <div className="Section">
        <div className="Section1">
          <img className="Ajay" src={Ajay} />
        </div>
        <div className="Section2">
          <h1>About our Founder</h1>
          <p className="founder">
            Ajay Export World is a global export company, founded by buzzing
            entrepreneur Ajay Parswani, with a passion for international trade
            and a vision to connect businesses globally, he embarked on this
            journey to establish Ajay Export World.
          </p>
          <p className="founder">
            Ajay began his journey as a gold jewellery manufacturer in 1988
            under the name DBS Jewels. After achieving excellence in the field
            as a gold jewellery manufacturer, Ajay took his ambition to the next
            level by being a financial advisor for 5 glorious years.The quest
            for knowledge and learning took Ajay to a different world...the
            world of exports.
          </p>
          {/* <ReadMore /> */}
        </div>
      </div>
    </>
  );
}

export default About1;
