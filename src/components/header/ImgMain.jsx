import React from 'react'
import Me2 from "../../assets/imgCircle.png";


const ImgMain = () => {
    return (


        <div className="imgRound">
            <div className="a-glitch " style={{ backgroundImage: { Me2 } }}>
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