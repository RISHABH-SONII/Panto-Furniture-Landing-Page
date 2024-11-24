import React, { useState } from "react";
import CardLayout from "./Card-Section/CardLayout";
import { CardData } from "./Card-Section/CardData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import classes from "./thirdSection.module.css";

const ThirdSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItemsCount = 4;

  const visibleItems = CardData.slice(
    startIndex,
    startIndex + visibleItemsCount
  );

  if (visibleItems.length < visibleItemsCount) {
    visibleItems.push(
      ...CardData.slice(0, visibleItemsCount - visibleItems.length)
    );
  }

  const handleNextArrowClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % CardData.length);
  };

  const handlePreviousArrowClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? CardData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={classes.root3}>
      <h1>Best Selling Product</h1>
      <div className={classes.gridContainer}>
        <button
          onClick={handlePreviousArrowClick}
          className={classes.leftArrow}
        >
          <FaArrowCircleLeft style={{ height: "100%", width: "100%" }} />
        </button>

        <div className={classes.thirdSectionGrid}>
          {visibleItems.map((item, index) => (
            <CardLayout
              key={index}
              image={item.image}
              category={item.category}
              chairName={item.chairName}
              ratings={item.ratings}
              price={item.price}
            />
          ))}
        </div>

        <button onClick={handleNextArrowClick} className={classes.rightArrow}>
          <FaArrowCircleRight style={{ height: "100%", width: "100%" }} />
        </button>
      </div>

      {/* <span>
        View all <img src={ThirdSectionImage} alt="View all" />
      </span> */}
    </div>
  );
};

export default ThirdSection;
