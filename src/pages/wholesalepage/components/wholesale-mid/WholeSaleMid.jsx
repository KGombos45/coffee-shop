import React from 'react';
import './wholesalemid.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import highQuality from '../../../assets/img/high-quality.svg';
import personalService from '../../../assets/img/personal-service.svg';
import flexibility from '../../../assets/img/flexibility.svg';

function WholeSaleMid() {

    const Data = [
        {
            "src": highQuality,
            "alt": "High Quality",
            "text": "We’re proud to say that we hand roast every batch of coffee to the best of our abilities because every neighbor—near and far— deserves the best cup of coffee."
        },
        {
            "src": personalService,
            "alt": "Personal Service",
            "text": "Like man’s best friend, we’re never far from your side. Our team strives to be extremely hands-on, making sure that our partners have all the advice and tools they need."
        },
        {
            "src": flexibility,
            "alt": "Flexibility",
            "text": "We can tailor our delicious coffee options to fit your needs! Whether large or small, for companies or customers, we can make sure you have the right coffee at the right price."
        }
    ]

    return (
        <section className="wholesale-mid">
            <div className="body-container flex">
                <div className="wholesale-mid-container flex">
                    <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true} duration={1.4}>
                        <div className="wholesale-imgs-section">
                            <div className="wholesale-imgs-container flex row">
                                {
                                    Data.map((item) => {
                                        return (
                                            <div className="img-container">
                                                <img src={item.src} alt={item.alt}></img>
                                                <p><h2>{item.alt}</h2></p>
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

export default WholeSaleMid
