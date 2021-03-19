import React from 'react';
import './wholesalebottom.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import productImg from '../../../assets/img/product-here.jpg';

function WholeSaleBottom() {
    return (
        <section className="wholesale-bottom">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="wholesale-bottom-container flex">
                    <div className="wholesale-bottom-img flex">
                        <img src={productImg}></img>
                    </div>
                    <div className="wholesale-bottom-bottom flex row">
                        <div className="section-left flex">
                            <div className="section-sub-header">
                                We’re Here for You
                                <div className="section-title-underline sub-header-underline" />
                            </div>
                            <div className="section-text">
                            When we say “partners,” we mean it. We know that each new partner comes with their own challenges, but we’re committed to making the process as smooth as possible.
                            </div>
                        </div>
                        <div className="section-right flex">
                            <ul>
                                <li>
                                    <h4>COFFEE</h4>
                                    <p>5 lb Bags</p>
                                    <p>12 oz. Bags</p>
                                    <p>Cold Brew</p>
                                    <p>Nitro Kegs</p>
                                </li>
                                <li>
                                    <h4>SERVICE</h4>
                                    <p>Monthly Correspondence</p>
                                    <p>Quarterly Site Visits</p>
                                    <p>Delivery in Indianapolis</p>
                                    <p>Shipping Available</p>
                                </li>
                            </ul>

                        </div>
                    </div>    
                </div>
            </ScrollAnimation>
            </div>
        </section>
    )
}

export default WholeSaleBottom
