import React from "react";
import classes from "./fourthSection.module.css";
import fourthSectionImage1 from "../../../assets/images/Section-4 Images/Section-4 Image.png";
import fourthSectionImage2 from "../../../assets/images/Vector.png";

const FourthSection = () => {
  return (
    <div className={classes.root4}>
      <div className={classes.gridContainer4}>
        <div className={classes.gridItem2}>
          <div className={classes.shadow1}></div>
          <div className={classes.shadow2}></div>
          <img
            src={fourthSectionImage1}
            alt="#imageId0"
            className={classes.shadowImage1}
          />
        </div>
        <div className={classes.gridItem3}>
          <h2>EXPERIENCES</h2>
          <h1>
            We Provide You The <br />
            Best Experience
          </h1>
          <p>
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <span>
            More Info <img src={fourthSectionImage2} alt="#imageId1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
