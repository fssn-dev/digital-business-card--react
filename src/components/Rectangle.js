import React from "react"
import icon from "../images/Icon.png"
import vector from "../images/Vector.png"

export function Rectangle() {
    return (
        <div className="rectangle">
            <h1 className="info--name">Laura Smith</h1>
            <p className="info--job">Frontend Developer</p>
            <p className="info--website">laurasmith.website</p>
            <div className="buttonHolder">
                <button className="info--email"><img src={icon} alt="" />Email</button>
                <button className="info--linkedin"><img src={vector} alt="" />Linkedin</button>
            </div>
        </div>
    )
}