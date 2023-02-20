import NameSpan from "./NameSpan";
import React from 'react'

const name = "Lovro Boric".split("");
const Title = () => {
    return (
        <div>
            <h5 className="text-light">Hello,I'm</h5>
            {name.map((letter, index) => {
                return <NameSpan key={index} className="letter"><h1>{letter === " " ? "\u00A0" : letter}</h1></NameSpan>
            })}
            <h5 className="text-light">Fullstack developer</h5></div>
    )
}

export default Title