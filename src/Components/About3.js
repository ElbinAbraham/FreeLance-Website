import React from "react";
import "./About3.css";

const video="https://res.cloudinary.com/dks8sxcfb/video/upload/v1691327961/tcirfbuuya5dxckrp2yg.mp4";

const About3 = () => {
  return (
    <>
      <div className="Section6">
        <div className="Section7">
          <h2 className="head">Visions</h2>
          <p className="vision">
            Our vision at Ajay Export World is to EXPORT EXCELLENCE WORLDWIDE, empowering businesses to expand their reach and thrive in the
            international market. We strive to become a catalyst for economic
            growth, fostering mutually beneficial relationships between
            suppliers and buyers across borders.
          </p>
          <p className="vision">
            By leveraging our expertise, network, and cutting-edge solutions, we
            envision a future where businesses can effortlessly navigate the
            complexities of global commerce and achieve their full potential.
            Together, let's shape a world of limitless opportunities and shared
            prosperity.
          </p>
        </div>
        <div className="Section8">
        <video src={video}  autoplay="true" loop muted controls>
        </video>
        </div>
      </div>
    </>
  );
};

export default About3;
