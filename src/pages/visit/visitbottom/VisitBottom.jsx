import React from 'react';
import './visitbottom.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import dogHouseExterior from '../../assets/img/doghouseexterior.jpg';
import interior1 from '../../assets/img/interior1.jpg';
import espressoBar from '../../assets/img/espressobar.jpg';
import interior2 from '../../assets/img/interior2.jpg';
import roasting from '../../assets/img/roasting.jpg';


function VisitBottom() {

    const Data = [
        {
            "src": dogHouseExterior,
            "alt": "Doghouse Exterior"
        },
        {
            "src": interior1,
            "alt": "ICR Interior"
        },
        {
            "src": espressoBar,
            "alt": "Espresso Bar"
        },
        {
            "src": interior2,
            "alt": "ICR Interior"
        },
        {
            "src": roasting,
            "alt": "Coffee Roasting"
        }
    ]

    return (
        <section className="visit-bottom">
            <div className="body-container flex">
                <div className="visit-imgs-container">
                    {

                        Data.map((item) => {
                            return (
                                <div className="img-container">
                                    <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                                        <img src={item.src} alt={item.alt}></img>
                                    </ScrollAnimation>
                                </div>
                            )

                        })

                    }

                </div>

            </div>
        </section>
    )
}

export default VisitBottom
