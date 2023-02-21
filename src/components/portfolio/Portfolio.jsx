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
    github: "https://github.com/orgs/LoveHam-Matt-Lovro/repositories",
    demo: "https://gamechanger-clubmanager.netlify.app",
    title: "Game Changer",
    description: "Full stack sports club management app with drag and drop functionality and data visualization",
    tech: "React, Node, MongoDB, Express.js",
  },
  {
    id: 2,
    image: mingle,
    github: "https://github.com/Minglehackers/Mingle",
    demo: "https://mingle.adaptable.app/",
    title: "Mingle",
    description: "Social platform  where users can create forums, post, comment and like posts  ",
    tech: "Handlebars, Express.js,MongoDB,CSS",
  },
  {
    id: 3,
    image: guitar,
    github: "https://github.com/CarSig/guitarApp",
    demo: "https://guitarly-chord-finder.netlify.app",
    title: "Guitarly chordfinder",
    description: " Search for chords and scales a visual representation of the fretboard or play the chords on the virtual guitar",
    tech: "React",
  },
  {
    id: 4, image: tank, github: "https://github.com/CarSig/oop-game1", demo: "https://tank-vs-aliens.netlify.app",
    title: "Tank vs Aliens", description: "defend your base against alien invasion! Separately control tank and gun turret", tech: "JavaScript, CSS, HTML",
  },
  {
    id: 5,
    image: dragndrop,
    github: "https://github.com/CarSig/spacednd",
    demo: "https://space-dnd.netlify.app/",
    title: "Drag and Drop",
    description: "Drag and drop functionality with react-dnd library. Move items between lists and reorder them",
    tech: "React",
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
              <div className="inner-container">
                <a href={demo} target="_blank" rel="noreferrer">
                  <img className="img" src={image} alt="project" />
                </a>
              </div>
              <h2 className="card-title">{title}</h2>
              <p className="description">{description}</p>



              <p className="tech">Tech stack: {tech}</p>
              <div className="buttons">

                <a href={github} className="btn smallBtn" target="_blank" rel="noreferrer">
                  Github
                </a>

                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Demo
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
