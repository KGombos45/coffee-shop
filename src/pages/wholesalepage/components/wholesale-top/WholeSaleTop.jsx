import React from 'react';
import './wholesaletop.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import wholeSaleImg from '../../../assets/img/wholesale.jpg';

function WholeSaleTop() {
    return (
        <section className="wholesale-top">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="wholesale-top-container flex row">
                    <div className="flex section-left">
                        <div className="section-title">
                            <p>WHOLE</p>
                            <p>SALE</p>
                        </div>
                        <div className="section-sub-header">
                                Become a Partner
                            <div className="section-title-underline sub-header-underline" />
                        </div>
                        <div className="wholesale-text">
                            <p>We’re about two things here: dog puns and amazing cups of coffee. But, we’ll quit hounding you with the puns because you must be wondering how to provide your company and customers with an excellent coffee experience in an economical way.</p>
                            <p>Wholesale coffee with Indie Coffee Roasters means the best coffee, at a great price, with a personal touch from our team to ensure that you can easily provide great coffee to your customers or companies.</p>
                        </div>
                    </div>
                    <div className="flex section-right">
                        <div className="image-container">
                            <img src={wholeSaleImg}></img>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default WholeSaleTop
