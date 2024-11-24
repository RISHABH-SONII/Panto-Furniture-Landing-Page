import React from "react";
import classes from "./secondSection.module.css";
import secondSectionImage from "../../../assets/images/Vector.png";
const SecondSection = () => {
  return (
    <div className={classes.root}>
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <h1>
            Why <br /> Choosing Us{" "}
          </h1>
        </div>
        <div className={classes.gridItem1}>
          <h3>Luxury Facilities</h3>
          <p>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>

          <span>
            More Info <img src={secondSectionImage} alt="#imageId-2" />
          </span>
        </div>
        <div className={classes.gridItem1}>
          <h3>Affordable Price</h3>
          <p>
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>

          <span>
            More Info <img src={secondSectionImage} alt="#imageId-3" />
          </span>
        </div>
        <div className={classes.gridItem1}>
          <h3>Many Choices</h3>
          <p>
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>

          <span>
            More Info <img src={secondSectionImage} alt="#imageId-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
