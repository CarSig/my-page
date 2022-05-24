import React from "react";
import "./about.css";

import Me2 from "../../assets/lbbew.jpg";
import { GiPencilBrush } from "react-icons/gi";
import { VscServer } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="">
          <div className="c-glitch" style={{ "background-image": { Me2 } }}>
            <img className="c-glitch__img" src={Me2} alt="" srcSet="" />
            <img className="c-glitch__img" src={Me2} alt="" srcSet="" />
            <img className="c-glitch__img" src={Me2} alt="" srcSet="" />
            <img className="c-glitch__img" src={Me2} alt="" srcSet="" />
            <img className="c-glitch__img" src={Me2} alt="" srcSet="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiComputerLine className="about__icon" />
              <h5>Frontend</h5>
            </article>
            <article className="about__card">
              <VscServer className="about__icon" />
              <h5>Backend</h5>
            </article>
            <article className="about__card">
              <GiPencilBrush className="about__icon" />
              <h5>UI/UX design </h5>
            </article>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <p>
              I am Web Developer from Croatia, located in Berlin, Germany. I have passion for programming, problem solving and creating web apps. I use
              technologies from the MERN stack to create amazing apps.
            </p>

            <p>
              I’ve not always been a developer, I’ve been a video editor and motion designer and got a Master’s Degree in Journalism. But programming feels like
              home, it unites my will for learning and abstract thinking with creativity and curiosity.
            </p>
            <p>
              When I’m not coding you can find me with my friends, at a café or bar or rock concerts, playing guitar, swimming, reading a good book or playing
              chess
            </p>
          </div>

          <a href="#contact" className="btn btn-primary" style={{ marginTop: "2rem" }}>
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
