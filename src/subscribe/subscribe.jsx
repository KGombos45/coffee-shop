import React from 'react';
import './subscribe.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function AppSubscribe() {
    return (
        <section className="subscribe" id="subscribe">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="subscribe-container flex row">
                    <div className="flex section-subscribe">
                        <div className="section-sub-header">
                            Join Our Email List
                            <div className="section-title-underline sub-header-underline" />
                        </div>
                        <div className="subscribe-text">
                            Keep a leash on all our upcoming events, promotional deals, and other announcements with our newsletter sent right to your inbox. You might even receive a birthday surprise when the time comes!                        
                        </div>
                        <div className="section-title">
                            EMAIL
                        </div>
                    </div>
                    <div className="flex section-subscribe-form">
                        <div className="input-container">
                            <input type="email" placeholder="EMAIL" className="indie-input"></input>
                        </div>
                        <div className="button-container">
                        <a href="https://indie-coffee-roasters.square.site/" target="_blank" rel="noreferrer">
                            <button type="primary" className="indie-btn">
                                SIGNUP
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default AppSubscribe
