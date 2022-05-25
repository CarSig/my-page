import React from "react";
import "./experience.css";

import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { SiMaterialui, SiExpress, SiMongodb, SiMariadb } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/*FRONTEND*/}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>Javascript</h4>
            </div>
            <div className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
            </div>

            <div className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </div>
            <div className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <h4>CSS</h4>
            </div>

            <div className="experience__details">
              <SiMaterialui className="experience__details-icon" />
              <h4>Material-UI</h4>
            </div>
            <div className="experience__details">
              <FaSass className="experience__details-icon" />
              <h4>SASS</h4>
            </div>
          </div>
        </div>
        {/*BACKEND*/}
        <div className="experience__backend">
          {" "}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <div className="experience__details">
                <SiExpress className="experience__details-icon" />
                <h4>Express JS</h4>
              </div>

              <div className="experience__details">
                <FaNodeJs className="experience__details-icon" />
                <h4>Node JS</h4>
              </div>
              <div className="experience__details">
                <SiMongodb className="experience__details-icon" />
                <h4>Mongo DB</h4>
              </div>
              <div className="experience__details">
                <GrMysql className="experience__details-icon" />
                <h4>MySQL</h4>
              </div>
              <div className="experience__details">
                <SiMariadb className="experience__details-icon" />
                <h4>MariaDB</h4>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Experience;
