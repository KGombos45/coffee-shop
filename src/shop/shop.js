import React from 'react';
import './shop.scss';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';


function AppShop() {
    return (
        <div className="shop" id="shop">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1}>
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
                        <Link>
                            <button type="primary" className="shop-btn">
                                SHOP
                            </button>
                        </Link>
                        </div>
                        <div className="section-title">
                            <div className="coffee-beans">
                                <img src="coffeebeans.svg"></img>
                            </div>
                            SHOP
                        </div>
                    </div>
                    <div className="flex section-shop-img">
                        <div className="image-container">
                            <img src="shop.jpg"></img>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default AppShop
