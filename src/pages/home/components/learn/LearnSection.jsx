import React from 'react';
import './learn.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import learn from '../../../assets/img/learn.svg';

function LearnSection() {
    return (
        <section className="learn" id="learn">
            <div className="body-container flex">
                <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="section-title">
                    LEARN
                </div>
                    <div className="learn-container flex row">
                        <div className="flex section-left">
                            <div className="section-sub-header">
                                Caffeinated Content
                                <div className="section-title-underline sub-header-underline" />
                            </div>
                            <div className="learn-text">
                                Want to know more about where our coffee is grown and how it’s prepared? Become a coffee expert by sipping our blogs.
                            </div>
                        </div>
                        <div className="flex section-right">
                            <div className="image-container">
                                <img src={learn}></img>
                            <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1.4}>
                            <div className="button-container">
                            <a>
                                <button type="primary" className="indie-btn">
                                    READ MORE
                                </button>
                            </a>
                            </div>
                            </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>    
            </div>
        </section>
    )
}

export default LearnSection

