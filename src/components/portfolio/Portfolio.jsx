import React from "react";
import "./portfolio.css";
import img1 from "../../assets/1.jpg";

import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";

const data = [
  { id: 1, image: img1, github: "http://github.com", demo: "https://dribbble.com/ethnfndr", title: "finance app" },
  { id: 2, image: img5, github: "http://github.com", demo: "https://dribbble.com/ethnfndr", title: "social media app" },
  { id: 3, image: img4, github: "http://github.com", demo: "https://dribbble.com/ethnfndr", title: "airhelp app" },
  // { id: 4, image: img3, github: "http://github.com", demo: "https://dribbble.com/ethnfndr", title: "tasktracker app" },
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
                <img src={image} alt="project" />
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
