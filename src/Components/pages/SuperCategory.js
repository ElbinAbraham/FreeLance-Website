import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardItems from "../card2";
import Footer from '../footer';

function SuperCategory({ details }) {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state ? location.state.category : null;
  const subCategory = location.state ? location.state.subCategory : null;
  const superCategory = location.state ? location.state.superCategory : null;
  const filteredDetails = filterDetails(details, category, subCategory, superCategory);

  function handleCardClick(card) {
    navigate("/super-slick", {
      state: {
        category: card.category,
        subCategory: card.subCategory,
        superCategory: card.superCategory,
        details: details, // pass all details here
      }
    });
  }
  

  function filterDetails(details, category, subCategory) {
    if (subCategory === "Spices" || subCategory === "Oil") {
      const detailItem = details.find((item) => item.category === category && item.subCategory === "none");
      if (detailItem && detailItem.contains) {
        const subDetailItem = detailItem.contains.find((item) => item.subCategory === subCategory);
        if (subDetailItem && subDetailItem.consists) {
          return subDetailItem.consists;
        } else {
          return [];
        }
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  return (
    <>
      <CardItems
        card={filteredDetails}
        onCardClick={handleCardClick}
        category={category}
        subCategory={subCategory}
        superCategory={superCategory}
        details={details}
      />
    </>
  );
}

export default SuperCategory;
