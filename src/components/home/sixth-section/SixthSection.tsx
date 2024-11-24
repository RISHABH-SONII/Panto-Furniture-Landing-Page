import React from "react";
import classes from "./sixthSection.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TestiCardLayout from "./TestimonialsCards/TestiCardLayout";
import { TestiCardData } from "./TestimonialsCards/TestiCardData";

const SixthSection = () => {
  return (
    <div className={classes.root}>
      <h2>TESTIMONIALS</h2>
      <h1>Our Client Reviews</h1>

      <div className={classes.gridContainer}>
        <FaArrowCircleLeft className={classes.leftArrow} />
        <div className={classes.sixthSectionGrid}>
          {TestiCardData.map((item, index) => (
            <div className={classes.sixthSectionGridItem}>
              <TestiCardLayout
                key={index}
                image={item.image}
                cardHeader={item.cardHeader}
                cardSubHeader={item.cardSubHeader}
                cardDescription={item.cardDescription}
                ratings={item.ratings}
                subImage={item.subImage}
              />
            </div>
          ))}
        </div>
        <FaArrowCircleRight className={classes.rightArrow} />
      </div>
    </div>
  );
};

export default SixthSection;
