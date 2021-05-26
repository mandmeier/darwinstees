import React from 'react'
import { Info, Contact } from './FooterElements'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <Info>
            <hr/>
            <Contact>
                <a href="https://www.facebook.com/rainbowsandbrains"
                    className="contact-social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/rainbowsnbrains"
                    className="contact-social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/rainbowsandbrains/"
                    className="contact-social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </Contact>
            <p className="footer-text">darwinstees@gmail.com</p>
            <br/>
            <p className="footer-text">&copy; PK</p>
            <br/>
            <br/>
        </Info>
    )
}

export default Footer
