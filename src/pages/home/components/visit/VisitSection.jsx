import React from 'react';
import './visit.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import outsideIndie from '../../../assets/img/outsideindie.jpg';

function VisitSection() {
    return (
        <section className="visit" id="visit">
            <div className="body-container flex">
                <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                    <div className="visit-container flex row">
                        <div className="flex section-left">
                            <div className="section-sub-header">
                                Come and See Us
                            <div className="section-title-underline sub-header-underline" />
                            </div>
                            <div className="visit-text">
                                In the heart of Carmel, Indiana, we’ve transformed a quaint little home into a unique and inviting coffeeshop. We’d love for you to come by and say hello.
                        </div>
                            <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1.4}>
                                <div className="button-container">
                                    <a href="https://indie-coffee-roasters.square.site/" target="_blank" rel="noreferrer">
                                        <button type="primary" className="indie-btn">
                                            VISIT THE DOGHOUSE
                            </button>
                                    </a>
                                </div>
                            </ScrollAnimation>
                            <div className="section-title">
                                VISIT
                        </div>
                        </div>
                        <div className="flex section-right">
                            <div className="image-container">
                                <img src={outsideIndie}></img>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default VisitSection
