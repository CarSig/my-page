import React from "react";
import "./header.css";
import Me from "../../assets/l2.jpg";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { BsChevronDoubleDown } from "react-icons/bs";

const Header = () => {
  return (
    <section>
      <div className="container header__container">
        <h5>Hello,I'm</h5>
        <h1>Lovro Boric</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />

        <a href="#contact" className="scroll__down">
          Scroll Down
          <BsChevronDoubleDown className="scrollIcon" />
        </a>

        <div className="me">
          <img src={Me} alt="" srcSet="" />
        </div>
        <HeaderSocials />
      </div>
    </section>
  );
};

export default Header;
