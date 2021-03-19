import React from 'react';
import './aboutmid.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'react-elastic-carousel';
import coffeeBags from '../../assets/img/about-coffeebags.jpg';
import indieDog from '../../assets/img/about-indie.jpg';
import oldCoffeeBags from '../../assets/img/about-oldcoffeebags.jpg';


function AboutMid() {

    const Data = [
        {
            "src": coffeeBags,
            "alt": "Coffee Bags"
        },
        {
            "src": indieDog,
            "alt": "Indie Dog"
        },
        {
            "src": oldCoffeeBags,
            "alt": "Old Coffee Bags"
        }
    ];

    return (
        <section className="about-mid" id="about">
            <div className="body-container flex">
                <div className="about-container flex">
                    <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>

                        <div className="about-section">
                            <div className="imgs-container flex row">
                                {

                                    Data.map((item) => {
                                        return (
                                            <div className="img-container">
                                                <img src={item.src} alt={item.alt}></img>
                                            </div>
                                        )

                                    })

                                }

                                <Carousel showArrows={false}>
                                    {Data.map(item => <img src={item.src} alt={item.alt}></img>)}
                                </Carousel>

                            </div>

                            <div className="about-text-container flex row">
                                <div className="section-left">
                                    <div className="about-text">
                                        <p>quickly became the most asked question among friends and family. Clearly there was demand, so why not be the supply?</p>
                                        <p>In creating a name for this brand, the team worked to find something bold, familiar, and a little bit quirky that would accurately reflect the feeling that someone should have coming into the coffeeshop. Little did they know that the answer to this question was running around at their feet and barking at any dangerous-looking bicycles outside. A rambunctious and lively dachshund named Indie proved to be the exact model needed to create a memorable mascot.</p>
                                    </div>
                                </div>
                                <div className="section-right">
                                    <div className="about-text">
                                        <p>With Indie providing enough character to build a cohesive brand, Indie Coffee Roasters hit the road doing events around the Midwest to get the word out about Indianapolis’ newest (and only!) coffee dog. As word grew, so did the orders. Turns out, people love great coffee!</p>
                                        <p>And of course, isn’t a quaint, cute, and welcoming coffeeshop the end goal of everyone who starts roasting? This dream eventually became a reality in March of 2017 when construction on the first location began. Not too long after, the doors to The Doghouse, Indie Coffee Roaster’s coffeeshop, opened to the residents of Carmel, Indiana, and the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}

export default AboutMid
