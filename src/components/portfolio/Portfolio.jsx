import React from "react";
import "./portfolio.css";
import mingle from "../../assets/mingle.jpg";
import guitar from "../../assets/guitar.jpg";
import gamechanger from "../../assets/gamechanger.jpg";
import tank from "../../assets/tank.jpg";
import dragndrop from "../../assets/dragndrop.jpg";


const data = [
  {
    id: 1,
    image: gamechanger,
    github: ["https://github.com/LoveHam-Matt-Lovro/full-club-management-client", " https://github.com/LoveHam-Matt-Lovro/full-club-manager-server"],
    demo: "https://gamechanger-clubmanager.netlifMy.app",
    title: "Game Changer",
    description: "Full stack sports club management app",
    tech: "React, Node, MongoDB, Express, Material UI, Bootstrap, CSS, HTML",
  },
  {
    id: 2,
    image: mingle,
    github: ["https://github.com/Minglehackers/Mingle"],
    demo: "https://mingle.adaptable.app/",
    title: "Mingle",
    description: "Social forum where users can create and join groups to discuss",
    tech: "React, Node, MongoDB, Express,  CSS, HTML",
  },
  {
    id: 3,
    image: guitar,
    github: ["https://github.com/CarSig/guitarApp"],
    demo: "guitarly-chord-finder.netlify.app",
    title: "Guitarly chordfinder",
    description: "Guitar chord finder app",
    tech: "React, Node, MongoDB, Express, Material UI, Bootstrap, CSS, HTML",
  },
  { id: 4, image: tank, github: ["https://github.com/CarSig/material2022"], demo: "https://glowing-blancmange-97f74c.netlify.app/", title: "social app - CSS" },
  {
    id: 5,
    image: dragndrop,
    github: ["https://github.com/CarSig/theme_switch"],
    demo: "https://playful-cheesecake-64cdb4.netlify.app/",
    title: "Theme switcher  - CSS ",
    description: "Full stack sports club management app",
    tech: "React, Node, MongoDB, Express, Material UI, Bootstrap, CSS, HTML",
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
        {data.map(({ id, image, title, github, demo, description, tech }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <a href={demo}>
                  <h2>{title}</h2>
                  <img src={image} alt="project" />
                </a>
              </div>
              <h3>{description}</h3>
              <h4>{tech}</h4>


              <div className="portfolio__item-cta">

                {github.map(item => {
                  return (<a href={item} className="btn" target="_blank" rel="noreferrer">
                    Github {item === github[0] ? "client" : "server"}
                  </a>)
                })
                }

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
