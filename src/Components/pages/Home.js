import React from 'react';
import SplideSlider from '../Slider.js';
import About1 from '../About1';
import CardItems from '../card2';
import About2 from '../About2';
import About3 from '../About3';
import Footer from '../footer';
import images from '../image.js';
import { useNavigate } from "react-router-dom";
import details from '../details.js';

function Home() {
  const navigate = useNavigate();
  function handleCardClick(card) {
    navigate("/category", { state: { category: card.category, subCategory: card.subCategory } });
  }

  return (
    <>
      <SplideSlider images={images} />
      <About1 />
      <CardItems card={details} onCardClick={handleCardClick} />
      <About2 />
      <About3 />
      <Footer />
    </>
  );
}

export default Home;
