import React from 'react';
import './learnmid.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import cupping from '../../assets/img/cupping.png';
import brewing from '../../assets/img/brewing.png';
import beans from '../../assets/img/beans.png';


function LearnMid() {

    const Data = [
        {
            "src": cupping,
            "alt": "Cupping",
            "text": "During our cupping classes, we take our guests on a tour of our best coffee collections, teaching you how to identify the different flavor notes and profiles that make coffee so delicious."
        },
        {
            "src": brewing,
            "alt": "Brewing",
            "text": "Bring the barista home! Our home brewing class covers the tools and techniques that you need to get coffeeshop quality in your own kitchen, no matter what your current at-home setup may be."
        },
        {
            "src": beans,
            "alt": "Beans",
            "text": "Understanding the labels on coffee bags can be intimidating, so we guide you through the process using our current coffee offerings with this helpful class on bean selection."
        }
    ]

    return (
        <section className="learn-mid">
            <div className="body-container flex">
                <div className="learn-mid-container flex">
                    <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                        <div className="learn-imgs-section">
                            <div className="learn-imgs-container flex row">
                                {
                                    Data.map((item) => {
                                        return (
                                            <div className="img-container">
                                                <img src={item.src} alt={item.alt}></img>
                                                <p>{item.text}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}

export default LearnMid
