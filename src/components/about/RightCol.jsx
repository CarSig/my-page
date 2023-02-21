import React from 'react'
import { GiPencilBrush } from "react-icons/gi";
import { VscServer } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const RightCol = () => {
    return (
        <div className="rightCol">
            <div className="about__cards">
                <a href="https://www.linkedin.com/in/lovro-boric/" target="_blank" rel="noreferrer">
                    <article className="about__card">
                        <BsLinkedin className="about__icon" />
                        <h5>LinkedIn</h5>
                    </article>
                </a>
                <a href="https://github.com/CarSig" target="_blank" rel="noreferrer">
                    <article className="about__card">
                        <BsGithub className="about__icon" />
                        <h5>Github</h5>
                    </article>
                </a>
                {
                    // <article className="about__card">
                    //     <GiPencilBrush className="about__icon" />
                    //     <h5>Fullstack </h5>
                    // </article>
                }
            </div>
            <div style={{ marginTop: "2rem" }}>
                <p>
                    I am a web developer from Croatia living in Berlin, Germany. Application development, problem-solving, and web development are my passions. To
                    create amazing apps, I utilize the MERN stack.
                </p>

                <p>
                    In addition to being a developer, I have been a video editor and a motion designer as well as having a Master's Degree in Journalism. Programming,
                    however, feels like home to me, as it combines my love for learning and abstract thinking with creativity and curiosity.
                </p>
                <p>
                    Whenever I'm not coding, you can find me with friends, at a café or bar, watching a concert, playing guitar, swimming, reading a book, or playing
                    chess.
                </p>
            </div>

            {     /* <a href="#contact" className="btn btn-primary" style={{ marginTop: "2rem" }}>
            Lets Talk
    </a>*/}
        </div >
    )
}

export default RightCol