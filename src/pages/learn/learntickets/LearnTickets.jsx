import React from 'react';
import './learntickets.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function LearnTickets() {
    return (
        <section className="learn-tickets">
            <div className="body-container flex">
            <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>

                <div className="learn-tickets-container flex row">
                    
                    <div className="section-left">
                        <div className="section-title">
                            JOIN US
                        </div>
                        <div className="section-sub-header">
                            Attend an Upcoming Class
                            <div className="section-title-underline sub-header-underline" />
                        </div>
                    </div>
                    <div className="section-right">
                        <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1.4}>
                            <div className="button-container">
                                <button type="primary" className="indie-btn">
                                    BUY TICKETS
                                </button>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
                </ScrollAnimation>

            </div>
        </section>
    )
}

export default LearnTickets
