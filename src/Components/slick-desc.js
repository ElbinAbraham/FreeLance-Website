import React from "react";
import "../Components/slick-des.css";

const SlickDesc = ({ desc }) => {
  const points = Object.keys(desc)
    .filter((key) => key.startsWith("point"))
    .map((key) => desc[key]);

  return (
    <>
      {desc.title && (
        <div className="slick-desc">
          <div className="slick-desc-title">
            <h1>
              <strong>{desc.title}</strong>
            </h1>
          </div>
          <div className="slick-desc-text">
            {points.map((point, index) => (
              <p className="para" key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SlickDesc;
