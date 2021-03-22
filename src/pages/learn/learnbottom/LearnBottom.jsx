import React from 'react';
import './learnbottom.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import learn from '../../assets/img/learn2.jpg';

function LearnBottom() {
    return (
        <section className="learn-bottom">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <img src={learn}></img>
            </ScrollAnimation>
        </section>
    )
}

export default LearnBottom
