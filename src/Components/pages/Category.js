import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardItems from "../card2";
import Footer from '../footer';

function Category({ details }) {
  const [recentlyViewed, setRecentlyViewed] = useState(
    JSON.parse(localStorage.getItem("recentlyViewed")) || []
  );
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state ? location.state.category : null;
  const subCategory = location.state ? location.state.subCategory : null;
  const filteredDetails = filterDetails(details, category, subCategory);

  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  function handleCardClick(card) {
    if (card.superCategory) {
      navigate("/slick-des", {
        state: {
          category: card.category,
          subCategory: card.subCategory,
          details: card.details
        }
      });
    } else {
      navigate("/slick-des", {
        state: {
          category: card.category,
          subCategory: card.subCategory,
          details: card.details // pass the details here
        }
      });
    }

    setRecentlyViewed((prev) => {
      const newRecentlyViewed = [...prev];
      if (newRecentlyViewed.length === 3) {
        newRecentlyViewed.shift();
      }
      newRecentlyViewed.push(card);
      return newRecentlyViewed;
    });
  }

  function filterDetails(details, category, subCategory) {
    if (subCategory === "none") {
      const detailItem = details.find((item) => item.category === category);
      if (detailItem && detailItem.contains) {
        return detailItem.contains;
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
        recentlyViewed={recentlyViewed}
        category={category}
        subCategory={subCategory}
        details={details}
      />
      <Footer />
    </>
  );
}

export default Category;

