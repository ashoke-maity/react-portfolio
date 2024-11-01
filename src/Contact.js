import React from "react";
import Lottie from "lottie-react";
import rightarrow from './assets/rightarrow.json';

function Contact() {
    return (
        <section id="contacts">
            <div className="container">
                <h2>Contact Me</h2>
                <p>
                    If you'd like to get in touch, feel free to email me to the mail provided.
                </p>
                <div className="contact-address">
                    <div className="email-provide">
                        <p>ashokemaity092@gmail.com</p>
                    </div>
                    <div className="email-redirect">
                        <a href="mailto:ashokemaity092@gmail.com" className="btn-contact">
                            <Lottie animationData={rightarrow} style={{ width: '30px', height: '30px',filter: 'brightness(0) invert(1)'}} className="rightarrow"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
