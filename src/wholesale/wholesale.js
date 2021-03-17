import React from 'react'
import './wholesale.scss';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

function AppWholeSale() {
    return (

        <section className="wholesale" id="wholesale">
            <div className="body-container flex">
                <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="section-title">
                    WHOLESALE
                </div>
                    <div className="wholesale-container flex row">
                        <div className="flex section-partner">
                            <div className="section-sub-header">
                                    Become a Partner
                                <div className="section-title-underline sub-header-underline" />
                            </div>
                            <div className="wholesale-text">
                                Need -a lot- of coffee? We work closely with multiple organizations to provide a great coffee experience for companies and customers at wholesale prices. We’d love to help you do the same.                        
                            </div>

                        </div>
                        <div className="flex section-wholesale-img">
                            <div className="image-container">
                                <img src="wholesale-group.svg"></img>
                                <div className="button-container">
                            <a>
                                <button type="primary" className="shop-btn">
                                    LEARN MORE
                                </button>
                            </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>    
            </div>
        </section>
            

    )
}

export default AppWholeSale
