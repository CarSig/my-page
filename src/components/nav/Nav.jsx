import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineCollections } from "react-icons/md";

import { RiCodeSSlashLine, RiServiceLine } from "react-icons/ri";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" navbar-tooltip="Home" className={activeNav === "#" ? "active" : undefined} onClick={() => setActiveNav("#")}>
        <AiOutlineHome />
      </a>
      <a href="#about" navbar-tooltip="About" className={activeNav === "#about" ? "active" : undefined} onClick={() => setActiveNav("#about")}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        navbar-tooltip="Experience"
        className={activeNav === "#experience" ? "active" : undefined}
        onClick={() => setActiveNav("#experience")}
      >
        <RiCodeSSlashLine />
      </a>
      <a href="#services" navbar-tooltip="Services" className={activeNav === "#services" ? "active" : undefined} onClick={() => setActiveNav("#services")}>
        <RiServiceLine />
      </a>

      <a href="#portfolio" navbar-tooltip="Portfolio" className={activeNav === "#portfolio" ? "active" : undefined} onClick={() => setActiveNav("#portfolio")}>
        <MdOutlineCollections />
      </a>
      <a href="#contact" navbar-tooltip="Contact" className={activeNav === "#contact" ? "active" : undefined} onClick={() => setActiveNav("#contact")}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
