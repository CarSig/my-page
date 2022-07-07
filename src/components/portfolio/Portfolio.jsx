import React from "react";
import "./portfolio.css";
import mitarbeiter from "../../assets/mitarbeiter.png";
import expenseImg from "../../assets/expenseImg.jpg";
import social from "../../assets/social.png";
import air from "../../assets/air.png";
import switchTheme from "../../assets/switch.png";

const data = [
  {
    id: 1,
    image: expenseImg,
    github: "https://github.com/CarSig/employeeRegister",
    demo: "https://straten-strategie.herokuapp.com/",
    title: "Expense Tracker with analytics - React, Node, MongoDB",
  },
  {
    id: 2,
    image: mitarbeiter,
    github: "https://github.com/CarSig/employeeRegister",
    demo: "https://mitarbeiter-register.herokuapp.com/",
    title: "employee register app - React, Node, MongoDB",
  },
  {
    id: 3,
    image: air,
    github: "https://github.com/CarSig/airlinesReact/tree/master",
    demo: "https://trusting-fermat-25b0c6.netlify.app/",
    title: "airhelp app - React, Node",
  },
  { id: 4, image: social, github: "https://github.com/CarSig/material2022", demo: "https://glowing-blancmange-97f74c.netlify.app/", title: "social app - CSS" },
  {
    id: 5,
    image: switchTheme,
    github: "https://github.com/CarSig/theme_switch",
    demo: "https://playful-cheesecake-64cdb4.netlify.app/",
    title: "Theme switcher  - CSS ",
  },
  // { id: 5, image: img4, github: "http://github.com", demo: "https://dribbble.com/ethnfndr", title: "fitness app" },
  // { id: 6, image: img5, github: "http://github.com", demo: "https://dribbble.com/ethnfndr", title: "another app" },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <a href={demo}>
                  {" "}
                  <img src={image} alt="project" />
                </a>
              </div>
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                {" "}
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
