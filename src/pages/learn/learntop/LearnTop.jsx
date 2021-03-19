import React from 'react';
import './learntop.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import learn from '../../assets/img/learn.png';

function LearnTop() {
    return (
        <section className="learn-top">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="learn-top-container flex row">
                    <div className="flex section-left">
                        <div className="section-title">
                            LEARN
                        </div>
                        <div className="section-sub-header">
                            Indie Coffee Roasters University
                            <div className="section-title-underline sub-header-underline" />
                        </div>
                        <div className="learn-text">
                            <p>Since the beginning, our core value of “we educate” has guided our belief that a good cup of coffee is not a closely guarded secret. Part of being in our pack means learning the art of sharing coffee with others.</p>
                            <p>That’s why we started ICRU, a group of inviting, informative, and most importantly, hands-on classes meant to teach our friends and family more about coffee. Once a month, we gather at the Doghouse to learn a little something new.</p>
                        </div>
                    </div>
                    <div className="flex section-right">
                        <div className="image-container">
                            <img src={learn}></img>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default LearnTop
