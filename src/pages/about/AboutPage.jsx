import React from 'react';
import './aboutpage.scss';
import AboutTop from './abouttop/AboutTop';
import AboutMid from './aboutmid/AboutMid';
import Values from './aboutvalues/Values';
import AboutBottom from './aboutbottom/AboutBottom';


function AboutPage() {
    return (
        <div>
            <AboutTop/>
            <AboutMid/>
            <Values/>
            <AboutBottom/>
        </div>
    )
}

export default AboutPage
