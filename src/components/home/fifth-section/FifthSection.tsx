import React, { useState } from "react";
import classes from "./fifthSection.module.css";
import fifthSectionImage1 from "../../../assets/images/Section-5 Images/Section-5 Image.png";
import fifthSectionImage2 from "../../../assets/images/Section-5 Images/Section-5 Image1.png";
import fifthSectionImage3 from "../../../assets/images/Section-5 Images/Section-5 Image2.png";
import fourthSectionImage2 from "../../../assets/images/Vector.png";
const FifthSection = () => {
  return (
    <div className={classes.root4}>
      <div className={classes.gridContainer4}>
        <div className={classes.gridItem4}>
          <h2>MATERIALS</h2>
          <h1>
            Very Serious <br /> Materials For Making
            <br /> Furniture
          </h1>
          <p>
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <span>
            More Info <img src={fourthSectionImage2} alt="#imageId2" />
          </span>
        </div>
        <div className={classes.semiContainer}>
          <div className={classes.gridItem6}>
            <img
              src={fifthSectionImage2}
              alt="#imageId3"
              className={classes.img1}
            />
            <img
              src={fifthSectionImage3}
              alt="#imageId4"
              className={classes.img2}
            />
          </div>
          <div className={classes.gridItem7}>
            <div className={classes.shadow1}></div>
            <img
              src={fifthSectionImage1}
              alt="#imageId5"
              className={classes.shadowImage1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
