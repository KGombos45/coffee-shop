import React from 'react'
import './wholesale.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import wholeSaleGroup from '../assets/img/wholesale-group.svg';

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
                                <img src={wholeSaleGroup}></img>
                            <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1.4}>
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
                    </div>
                </ScrollAnimation>    
            </div>
        </section>
            

    )
}

export default AppWholeSale
