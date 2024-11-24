import React from "react";
import classes from "./heroSection.module.css";
import HeroSectionImage from "../../../assets/images/HeroSectionImages/HeroSectionImage.png";
import Header from "../../common/Header/Header";
import { LuSearch } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src={HeroSectionImage}
          alt="#imageId-1"
          className={classes.heroImage}
        />
        <div className={classes.overLay}></div>
      </div>
      <Header />
      <div className={classes.content}>
        <h1>Make Your Interior More Minimalistic & Modern</h1>
        <p>
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <div className={classes.searchBar}>
          <input
            className={classes.searchInput}
            type="text"
            id="fname"
            name="fname"
            placeholder="Search furniture"
          />
          <button className={classes.searchButton}>
            <LuSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
