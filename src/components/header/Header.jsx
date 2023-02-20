import React from "react";
import "./image.css";
import "./header.css";
import ImgMain from "./ImgMain";
import Me2 from "../../assets/lbbew.jpg";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { BsChevronDoubleDown } from "react-icons/bs";

import Title from "./Title";


const Header = () => {
  return (
    <section id="home">
      <div className="container header__container">
        <div className="contact-options">
          <Title />
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
