import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Lovro
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials" style={{ fontSize: "1.4rem" }}>
        <a href="https://www.linkedin.com/in/lovro-boric/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/CarSig" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
