import React from 'react';
import './banner.scss';
import banner from '../assets/img/banner.jpg';
import verticalLogo from '../assets/img/verticallogo.svg';

import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';


function AppBanner() {
    return (
            <section class="banner flex">

                <div className="banner-container">
                    <div className="banner-backdrop"/>
                    <img src={banner}></img> 
                </div>

                <div className="flex">
                    <div className="logo-wrapper">
                        <img src={verticalLogo}></img>    
                    </div>
                    <div className="social-wrapper flex row">
                        <a href="https://www.facebook.com/indiecoffeeroaster/" target="_blank" rel="noreferrer" className="social-link"><FacebookOutlined /></a>
                        <a href="https://twitter.com/indiecoffeeRSTR" target="_blank" rel="noreferrer" className="social-link"><TwitterOutlined /></a>
                        <a href="https://www.instagram.com/indiecoffeeroasters/" target="_blank" rel="noreferrer" className="social-link"><InstagramOutlined /></a>
                    </div>
                </div>           
            </section>
    )
}

export default AppBanner
