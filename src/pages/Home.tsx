import React from "react";
import HeroSection from "../components/home/hero-section/HeroSection";
import SecondSection from "../components/home/second-section/SecondSection";
import ThirdSection from "../components/home/third-section/ThirdSection";
import FourthSection from "../components/home/fourth-section/FourthSection";
import FifthSection from "../components/home/fifth-section/FifthSection";
import SixthSection from "../components/home/sixth-section/SixthSection";
import SeventhSection from "../components/home/seventh-section/SeventhSection";
import classes from "./home.module.css";
const Home = () => {
  return (
    <div className={classes.root}>
      <section id="section1">{<HeroSection />}</section>
      <section id="section2">{<SecondSection />}</section>
      <section id="section3">{<ThirdSection />}</section>
      <section id="section4">{<FourthSection />}</section>
      <section id="section5">{<FifthSection />}</section>
      <section id="section6">{<SixthSection />}</section>
      <section id="section7">{<SeventhSection />}</section>
    </div>
  );
};

export default Home;
