import React from "react";
import "./image.css";
import "./header.css";
import ImgMain from "./ImgMain";
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
          {name.map((letter, index) => {
            return <NameSpan key={index} className="letter"><h1>{letter === " " ? "\u00A0" : letter}</h1></NameSpan>
          })}
          <h5 className="text-light">Fullstack developer</h5>
          <CTA />

          <div className="grid">
            <HeaderSocials className="socialsComp" />
            <ImgMain />

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
