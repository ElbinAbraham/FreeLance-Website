import React, { useState } from "react";
import SlickDesc from "./slick-desc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/slick.css";

const ImageGallery = ({ filteredArray, desc = {} }) => {
  console.log("hello" + desc);
  const [selectedImage, setSelectedImage] = useState(
    filteredArray.length > 0 ? filteredArray[0] : null
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, filteredArray.length),
    slidesToScroll: 1,
  };

  return (
    <div className="slick-container">
      <div
        className="slick-slider-container"
        style={{ width: Object.keys(desc).length === 0 ? "100%" : "auto" }}
      >
        <div className="glide-container">
          <img
            className="main-image"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
          <Slider {...settings}>
            {filteredArray.map((image) => (
              <div key={image.id}>
                <img
                  className="thumbnail-image small"
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {Object.keys(desc).length > 0 && (
        <div className="desc-container">
          <SlickDesc filteredArray={filteredArray} desc={desc} />
          {console.log("elbin" + desc)}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
