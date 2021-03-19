import React from 'react';
import './visittop.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import visitImg from '../../assets/img/visit.jpg';

function VisitTop() {
    return (
        <section className="visit-top">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                <div className="visit-top-container flex row">
                    <div className="flex section-left">
                        <div className="section-title">
                            VISIT
                        </div>
                        <div className="section-sub-header">
                            Sit, Stay a While
                            <div className="section-title-underline sub-header-underline" />
                        </div>
                        <div className="visit-text">
                            Visit us at “the doghouse” in the heart of the Arts and Design district in Carmel, Indiana. This one will be full of friendly faces, delicious coffee, and perfectly human-sized.
                        </div>
                        <div className="store-info-text flex row">
                            <ul>
                                <li>
                                    <h4>CONTACT</h4>
                                    <p>220 E. Main St.</p>
                                    <p>Carmel, IN 46032</p>
                                    <p>317.993.3443</p>
                                </li>
                                <li>
                                    <h4>HOURS</h4>
                                    <p>Mon-Sat: 7am - 6pm</p>
                                    <p>Sun: Closed</p>
                                </li>
                            </ul>
                        </div>
                        <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1.4}>
                            <div className="button-container">
                                <a href="https://goo.gl/maps/dcF1CsfNSgs" target="_blank" rel="noreferrer">
                                    <button type="primary" className="indie-btn">
                                        DIRECTIONS
                                    </button>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="flex section-right">
                        <div className="image-container">
                            <img src={visitImg}></img>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default VisitTop;
