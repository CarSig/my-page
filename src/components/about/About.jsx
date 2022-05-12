import React from "react";
import "./about.css";
import Me2 from "../../assets/l2.jpg";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me2} alt="" srcSet="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed non facilis dolores esse impedit aperiam nihil architecto. ratione harum voluptate
            quis, quaerat, neque, similique repellendus.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
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
