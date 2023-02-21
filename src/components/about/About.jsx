import React from "react";
import "./about.css";



import ImgMain from "../header/ImgMain";
import HeaderSocials from "../header/HeaderSocials";
import RightCol from "./RightCol";

const About = () => {
  return (
    <section id="about">

      <div className="container about__container">

        <ImgMain />

        <RightCol />
      </div>
    </section>
  );
};

export default About;

//  {/*CARD 2*/}
//  <article className="about__card">
//  <FaAward className="about__icon" />
//  <h5>Projects</h5>
//  <small>80+ completed projects </small>
// </article>
// {/*CARD 3*/}
// <article className="about__card">
//  <FaAward className="about__icon" />
//  <h5>Experience</h5>
//  <small>3+ years</small>
// </article>
