import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../Components/AutoCarousel.css";

const SplideSlider = ({ images }) => {
  const splideoptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    autoplayTimeout: 1000,
  };

  return (
    <Splide options={splideoptions} className="my_splide">
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <img src={image.url} style={{ width: "100vw", height: "70vh" }} alt="product"/>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "90%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "transparent",
            }}
          >
            <h1
              className="name"
              style={{ fontSize: "50px", color: "#DEF2F1", fontStyle: "bold" }}
            >
              {image.name}
            </h1>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideSlider;
