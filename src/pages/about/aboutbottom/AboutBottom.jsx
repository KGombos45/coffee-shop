import React from 'react';
import './aboutbottom.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import shopImg from '../../assets/img/shopregister.jpg';
import kevin from '../../assets/img/kevin.jpg';
import diane from '../../assets/img/diane.jpg';

function AboutBottom() {
    return (
        <section className="about-bottom">
            <div className="body-container flex">
                <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                    <div className="about-bottom-container flex row">
                        <div className="flex section-left">
                            <div className="image-container">
                                <img src={shopImg}></img>
                            </div>
                        </div>
                        <div className="flex section-right">
                            <div className="section-title">
                                TEAM
                        </div>
                            <div className="section-sub-header">
                                Meet the Indie Team
                            <div className="section-title-underline sub-header-underline" />
                            </div>
                        </div>
                    </div>
                    <div className="about-bottom-imgs-container flex row">
                        <div className="img-container">
                            <img src={diane}></img>
                            <div className="img-hover flex">
                                <div className="team-text">
                                    DIANE MCANDREWS
                                <p><em>Director of Retail</em></p>
                                </div>
                            </div>
                        </div>
                        <div className="img-container">
                            <img src={kevin}></img>
                            <div className="img-hover flex">
                                <div className="team-text">
                                    KEVIN MCANDREWS
                                <p><em>Director of Operations</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default AboutBottom
