import resume from './assets/AshokeMaityresume.pdf';
import React from 'react';
import Lottie from "lottie-react";
import Instagram from './assets/instagram.json';
import Twitter from './assets/twitter.json';
import linkedin from './assets/linkedin.json';

function Header() {
    return (
        <header>
            <nav>
                <div className="navlogo">
                    <div className="dp"></div>
                    <div className="logo-text">
                        <h1>Ashoke Maity</h1>
                    </div>
                </div>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#my-work">PORTFOLIO</a></li>
                    <li><a href="#contacts">CONTACTS</a></li>
                </ul>
            </nav>

            <div className="info-outline">
                <div className="imageplaceholder">
                    <div className="image"></div>
                </div>
                <div className="text">
                    <p id="greet">Hello! Myself</p>
                    <p id="name">Ashoke Maity</p>
                    <p id="designation">Front-end Web Developer</p>

                    <div className="buttons">
                        <a href={resume} download="Ashoke_Maity_CV">
                            <button id="cv">Download CV</button>
                        </a>
                        <a href="#contacts">
                            <button id="contact">Contact Info</button>
                        </a>
                    </div>

                    <div className="socials">
                        <div className="socialicon">
                            <div className="X-icon">
                                <a href="https://www.instagram.com/ashokemaity_" target="_blank" rel="noopener noreferrer" className="X-icon">
                                    <Lottie animationData={Instagram} style={{ width: '30px', height: '30px'}} /> 
                                </a>
                            </div>
                            <div className="linkedin-icon">
                                <a href="https://www.linkedin.com/in/ashokemaity/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                                    <Lottie animationData={linkedin} style={{ width: '30px', height: '30px'}} />
                                </a>
                            </div>
                            <div className="twitter-icon">
                                <a href="https://x.com/ashokemaity_" target="_blank" rel="noopener noreferrer" className="twitter-icon">
                                    <Lottie animationData={Twitter} style={{ width: '30px', height: '30px'}} />
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
