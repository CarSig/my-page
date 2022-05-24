import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials" style={{ fontSize: "1.4rem" }}>
      <a href="https://www.linkedin.com/in/lovro-boric/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/CarSig" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
