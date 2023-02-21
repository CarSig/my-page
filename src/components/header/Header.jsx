import React from "react";
import "./image.css";
import "./header.css";
import CTA from "./CTA";
import Title from "./Title";
import About from "../about/About";


const Header = () => {
  return (
    <section id="home">

      <div className="container header__container">
        <div className="contact-options">
          <Title />
          <CTA />
          <About />


        </div>
      </div>
    </section>
  );
};

export default Header;
