import React from 'react';
import './values.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'react-elastic-carousel';
import weWelcomeImg from '../../assets/img/we-welcome.svg';
import weEducate from '../../assets/img/we-educate.svg';
import weGive from '../../assets/img/we-give.svg';
import weStandOut from '../../assets/img/we-standout.svg';
import weHaveFun from '../../assets/img/we-havefun.svg';

function Values() {

    const Data = [
        {
            "subtitle": "We Welcome",
            "text": "We doggedly believe that everyone deserves a good cup of coffee and a good space to enjoy it. For anyone in search of these, we welcome you.",
            "img": weWelcomeImg
        },
        {
            "subtitle": "We Educate",
            "text": "Good coffee shouldn’t be a carefully guarded secret. We believe in sharing our experience to help our neighbors enjoy their coffee as much as they can.",
            "img": weEducate
        },
        {
            "subtitle": "We Give",
            "text": "Our customers, neighbors, and our community are like family to us. We make every effort to make sure your experience with Indie Coffee Roasters is the best that it can be.",
            "img": weGive
        },
        {
            "subtitle": "We Stand Out",
            "text": "Have you ever met a dachshund? We strive to emulate Indie, our four-legged mascot, in packing more emotion and confidence than you might first expect.",
            "img": weStandOut
        },
        {
            "subtitle": "We Have Fun",
            "text": "Coffee doesn’t always have to be serious business. We know how to kick back and enjoy ourselves and we hope that every experience you have with us puts a smile on your face.",
            "img": weHaveFun
        }
    ]
    return (
        <section className="values">
            <div className="body-container flex">
                <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                    <div className="values-container row">
                        <div className="section-title">
                            VALUES
                    </div>
                        <Carousel showArrows={false} verticalMode={true} enableAutoPlay={true} autoPlaySpeed={3000}>
                            {Data.map(item =>
                                <div className="carousel-items-container flex row">
                                    <div className="flex section-left row">
                                        <div className="carousel-img">
                                            <img src={weWelcomeImg} />
                                        </div>
                                    </div>
                                    <div className="flex section-right row">
                                        <div className="text-container">
                                            <div className="section-sub-header">
                                                {item.subtitle}
                                                <div className="section-title-underline sub-header-underline" />
                                            </div>
                                            <div className="carousel-text">
                                                {item.text}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default Values
