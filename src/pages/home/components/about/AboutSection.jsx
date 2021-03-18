import React from 'react';
import './about.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'react-elastic-carousel';
import coffeeBags from '../../assets/img/about-coffeebags.jpg';
import indieDog from '../../assets/img/about-indie.jpg';
import oldCoffeeBags from '../../assets/img/about-oldcoffeebags.jpg';


function AboutSection() {

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
        <section className="about" id="about">
            <div className="body-container flex">
                <div className="about-container flex">
                    <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>

                    <div className="section-title">
                        ABOUT
                    </div>

                    <div className="about-section">
                        <div className="section-sub-header">
                            Whirlypop to Coffeeshop
                            <div className="section-title-underline sub-header-underline" />
                        </div>
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

                        <div className="about-text">
                            This whole business started with a batch of coffee in a Whirlypop popcorn machine. Shocked? So are we. But, we wouldn’t have it any other way.
                            <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1.4}>
                            <div className="button-container">
                                <a>
                                    <button type="primary" className="indie-btn">
                                        LEARN MORE
                                    </button>
                                </a>
                            </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
