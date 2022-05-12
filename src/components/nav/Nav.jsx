import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : undefined} onClick={() => setActiveNav("#")}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === "#about" ? "active" : undefined} onClick={() => setActiveNav("#about")}>
        <AiOutlineUser />
      </a>
      <a href="#services" className={activeNav === "#services" ? "active" : undefined} onClick={() => setActiveNav("#services")}>
        <RiServiceLine />
      </a>

      <a href="#portfolio" className={activeNav === "#portfolio" ? "active" : undefined} onClick={() => setActiveNav("#portfolio")}>
        <BiBook />
      </a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : undefined} onClick={() => setActiveNav("#contact")}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
