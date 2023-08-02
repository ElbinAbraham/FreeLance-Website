import React from "react";
import ImageGallery from "../slick";
import { useLocation } from "react-router-dom";
import Footer from '../footer';

function Slickpage({ details }) {
  const location = useLocation();
  const category = location.state.category;
  const subCategory = location.state.subCategory;
  const passedDetails = location.state.details; // access the passed details here

  let filteredArray = [];
  let desc = "";

  if (details) {
    const result = filterDetails(details, category, subCategory);
    filteredArray = result.images;
    desc = result.desc;
  }

  function filterDetails(details, category, subCategory) {
    const detailItem = details.find(
      (item) =>
        item.category === category &&
        item.contains &&
        item.contains.some((subItem) => subItem.subCategory === subCategory)
    );

    if (detailItem && detailItem.contains) {
      const subDetailItem = detailItem.contains.find(
        (item) => item.subCategory === subCategory
      );

      if (subDetailItem && subDetailItem.has) {
        return { images: subDetailItem.has, desc: subDetailItem.desc };
      } else {
        return { images: [], desc: "" };
      }
    } else {
      return { images: [], desc: "" };
    }
  }

  return (
    <>
      <ImageGallery filteredArray={filteredArray} desc={desc} />

    </>
  );
}

export default Slickpage;
