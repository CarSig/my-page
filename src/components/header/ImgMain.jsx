import React from 'react'
import Me2 from "../../assets/lbbew.jpg";

const ImgMain = () => {
    return (
        <div onClick={() => { console.log("click IMG") }} className="about__me-image">
            <div className="a-glitch" style={{ backgroundImage: { Me2 } }}>
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
                <img className="a-glitch__img" src={Me2} alt="" srcSet="" />
            </div>
        </div>
    )
}

export default ImgMain