import React from "react";
import "./about.css";

import { GiPencilBrush } from "react-icons/gi";
import { VscServer } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
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
              I am a web developer from Croatia living in Berlin, Germany. Application development, problem-solving, and web development are my passions. To
              create amazing apps, I utilize the MERN stack.
            </p>

            <p>
              In addition to being a developer, I have been a video editor and a motion designer as well as having a Master's Degree in Journalism. Programming,
              however, feels like home to me, as it combines my love for learning and abstract thinking with creativity and curiosity.
            </p>
            <p>
              Whenever I'm not coding, you can find me with friends, at a café or bar, watching a concert, playing guitar, swimming, reading a book, or playing
              chess.
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
