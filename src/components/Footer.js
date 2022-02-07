import React from "react"
import twitterIcon from "../images/twitter-icon.png"
import facebookIcon from "../images/facebook-icon.png"
import instagramIcon from "../images/instagram-icon.png"
import githubIcon from "../images/github-icon.png"

export function Footer() {
    return (
        <footer className="footer">
            <img className="footer--twitter" src={twitterIcon} alt="" />
            <img className="footer--facebook" src={facebookIcon} alt="" />
            <img className="footer--instagram" src={instagramIcon} alt="" />
            <img className="footer--github" src={githubIcon} alt="" />
        </footer>
    )
}