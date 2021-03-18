import React from 'react';
import './contact.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function AppContact() {
    return (
        <section className="contact" id="contact">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="contact-container flex row">
                    <div className="flex section-contact">
                        <div className="section-sub-header">
                            Contact Us
                            <div className="section-title-underline sub-header-underline" />
                        </div>
                        <div className="contact-text">
                            Questions? Comments? Concerns? We’d love to hear from you. Drop us a line and we’ll fetch you an answer right away.                       
                        </div>
                    </div>
                    <div className="flex section-contact-form">
                        <div className="input-container">
                            <input type="text" placeholder="NAME" className="indie-input"></input>
                        </div>
                        <div className="input-container">
                            <input type="email" placeholder="EMAIL" className="indie-input"></input>
                        </div>
                        <div className="input-container">
                            <textarea placeholder="MESSAGE" className="indie-textarea"></textarea>
                        </div>
                        <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1.4}>
                        <div className="button-container">
                        <a href="https://indie-coffee-roasters.square.site/" target="_blank" rel="noreferrer">
                            <button type="primary" className="indie-btn">
                                SUBMIT
                            </button>
                        </a>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default AppContact
