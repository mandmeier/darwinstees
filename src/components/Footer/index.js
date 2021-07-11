import React, {useState} from 'react'
//import { Info, Contact } from './FooterElements'
import bird from '../../assets/bird_logo_500x500.svg'
import {Grid, Typography} from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

import styled from 'styled-components'
import SignUp from '../EmailForm/SignUp'
import ThankYou from '../EmailForm/ThankYou'


const Info = styled.div`
    background-color: #fafaff;
    color: #666;
   
    & .footer-top {
        width: 100%;
        text-align: center;

        & .footer-title {
            color: #333;
        }

        & .footer-social {

            & .social-icons {
                display: flex;
                justify-content: center;
            }

            & .social-icon {
                margin: 0rem 0.5rem;
                color: #666;
            }

            & .social-icon:hover {
                color: #333;
            }
        }

        & .footer-contact {

            & div {
                
            }
           
        } 

    }

    & .footer-link {
        margin-bottom: 0.5rem;

        & a, a:visited {
            color: #666;
            text-decoration: none;
        }

        & a:hover, a:active {
            color: #333;
        }
    }
    
    & .footer-divider {
        margin: 1rem auto;
        width: 90%;
    }

    & .footer-bottom {
        text-align: center;
    }

`



const Footer = () => {

    const [formSubmitted, setFormSubmitted] = useState(false)

    function onSubmit () {
        setFormSubmitted(true)
    }



    const year = new Date().getFullYear()

    return (
        <Info>
            <br/>
            <Grid className="footer-top" container justify="center" spacing={3}>
                <Grid className="footer-social" item xs={12} sm={6} md={3}>
                    <h3 className="footer-title">Follow Us</h3>
                    <div className="social-icons">
                        <a target="_blank" href="https://www.facebook.com/Darwins-Tees-101803552183741"
                            className="social-icon">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a target="_blank" href="https://twitter.com/darwinstees"
                            className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                    </div>
                </Grid>
                <Grid className="footer-contact" item xs={12} sm={6} md={3}>
                    <h3 className="footer-title">Contact</h3>
                    <div>support@darwinstees.com</div>
                </Grid>
                <Grid className="footer-terms" item xs={12} sm={6} md={3}>
                    <h3 className="footer-title">Terms &amp; Policies</h3>
                    <div className="footer-link"><Link>Privacy Policy </Link></div>
                    <div className="footer-link"><Link>Terms of Service </Link></div>
                    <div className="footer-link"><Link>Return Policy</Link></div>
                </Grid>
                <Grid className="footer-newsletter" item xs={12} sm={6} md={3}>
                    <h3 className="footer-title">Newsletter</h3>
                    {!formSubmitted ?
                        <SignUp onSubmit={onSubmit}/> :
                        <ThankYou/>
                    }
                </Grid>
            </Grid>
            <div className="footer-bottom">
                <br/>
                <hr className="footer-divider"/>
                <img src={bird} alt="Darwin's Tees" height="50px"/>
                <p className="footer-text"><small>Copyright &copy; {year} Darwin's Tees</small></p>
                <br/>
            </div>
        </Info>
    )
}

export default Footer
