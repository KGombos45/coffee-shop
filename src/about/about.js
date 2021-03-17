import React from 'react';
import './about.scss';
import ScrollAnimation from 'react-animate-on-scroll';


function AppAbout() {

    const Data = [
        {
            "src": "about-coffeebags.jpg",
            "alt": "Coffee Bags"
        },
        {
            "src": "about-indie.jpg",
            "alt": "Indie Dog"
        },
        {
            "src": "about-oldcoffeebags.jpg",
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

                            Data.map((item, index) => {
                                return (
                                    <div className="img-container">
                                        <img src={item.src} alt={item.alt}></img>
                                    </div>                           
                                )

                            })

                        }

                        </div>

                        <div className="about-text">
                            This whole business started with a batch of coffee in a Whirlypop popcorn machine. Shocked? So are we. But, we wouldn’t have it any other way.

                            <div className="button-container">
                            <a>
                                <button type="primary" className="shop-btn">
                                    LEARN MORE
                                </button>
                            </a>
                        </div>
                        </div>
                    </div>
                    
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}

export default AppAbout
