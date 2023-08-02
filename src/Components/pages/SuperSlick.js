import React from "react";
import ImageGallery from "../slick";
import { useLocation } from "react-router-dom";
import Footer from '../footer';

function SuperSlick({ details }) {
  const location = useLocation();
  const category = location.state.category;
  const subCategory = location.state.subCategory;
  const superCategory = location.state.superCategory; 

  let filteredArray = [];
  let desc = "";

  if (details) {
    const result = filterDetails(details, category, subCategory, superCategory);
    filteredArray = result.images;
    desc = result.desc;
  }

  function filterDetails(details, category, subCategory, superCategory) {
    const detailItem = details.find(
      (item) =>
        item.category === category &&
        item.contains &&
        item.contains.some((subItem) => subItem.subCategory === subCategory),
    );
    if (detailItem && detailItem.contains) {
      const subDetailItem = detailItem.contains.find(
        (item) => item.subCategory === subCategory
      );
      if (subDetailItem && subDetailItem.consists) {
        if (subCategory === "Spices" || subCategory === "Oil") {
          const superDetailItem = subDetailItem.consists.find(
            (item) => item.superCategory === superCategory
          );
          if (superDetailItem && superDetailItem.has) {
            return { images: superDetailItem.has, desc: superDetailItem.desc };
          } else {
            return { images: [], desc: null };
          }
        }
      } else {
        return { images: [], desc: null };
      }
    } else {
      return { images: [], desc: null };
    }
  }
  
  
  
  
  
  

  return (
    <>
      <ImageGallery filteredArray={filteredArray} desc={desc} />
    </>
  );
}

export default SuperSlick;