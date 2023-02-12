import React from "react";
import "./image.css";
import "./header.css";

import Me2 from "../../assets/lbbew.jpg";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { BsChevronDoubleDown } from "react-icons/bs";
import NameSpan from "./NameSpan";

const name = "Lovro Boric".split("");

const Header = () => {
  return (
    <section id="home">
      <div className="container header__container">
        <div className="contact-options">
          <h5>Hello,I'm</h5>
          <h1>{name.map((letter, index) => {
            return <NameSpan key={index} className="letter">{letter === " " ? "\u00A0" : letter}</NameSpan>
          })}</h1>
          <h5 className="text-light">Fullstack developer</h5>
          <CTA />

          <div className="grid">
            <HeaderSocials className="socialsComp" />
            <div className="about__me-image">
              <div className="a-glitch" style={{ backgroundImage: { Me2 } }}>
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
              </div>
            </div>

            <a href="#contact" className="scroll__down">
              Scroll Down
              <BsChevronDoubleDown className="scrollIcon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
