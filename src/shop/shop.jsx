import React from 'react';
import './shop.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import coffeeBeans from '../assets/img/coffeebeans.svg';
import shop from '../assets/img/shop.jpg';


function AppShop() {
    return (
        <section className="shop" id="shop">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="shop-container flex row">
                    <div className="flex section-shop">
                        <div className="section-sub-header">
                                Coffee, unleashed.
                            <div className="section-title-underline sub-header-underline" />
                        </div>
                        <div className="shop-text">
                            World-class coffee, fetched from around the world and brought straight to you. In-store or online, experience what it means to have your coffee, unleashed.
                        </div>
                        <div className="button-container">
                        <a href="https://indie-coffee-roasters.square.site/" target="_blank" rel="noreferrer">
                            <button type="primary" className="indie-btn">
                                SHOP
                            </button>
                        </a>
                        </div>
                        <div className="section-title">
                            <div className="coffee-beans">
                                <img src={coffeeBeans}></img>
                            </div>
                            SHOP
                        </div>
                    </div>
                    <div className="flex section-shop-img">
                        <div className="image-container">
                            <img src={shop}></img>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default AppShop