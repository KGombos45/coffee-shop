import React from 'react';
import './abouttop.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import outsideSign from '../assets/img/outsidesign.jpg';

function AboutTop() {
    return (
        <section className="about-top">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="about-top-container flex row">
                    <div className="flex section-left">
                        <div className="section-title">
                            ABOUT
                        </div>
                        <div className="section-sub-header">
                                Our Story
                            <div className="section-title-underline sub-header-underline" />
                        </div>
                        <div className="about-text">
                        How does one roast coffee in a popcorn machine? Very carefully.
                        However, if you do it carefully enough, you might just end up making something delicious. This mad scientist method of coffee roasting is where Indie Coffee Roasters began in 2013. The rest, as they say, was coffee.
                        From there, they moved on from the Whirlypop machine and began roasting small batches of coffee that became a hot commodity. “Are you guys roasting anytime soon?”
                        </div>
                    </div>
                    <div className="flex section-right">
                        <div className="image-container">
                            <img src={outsideSign}></img>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default AboutTop
