import React from 'react';
import BannerSection from '../../banner/banner';
import ShopSection from './components/shop/ShopSection';
import WholesaleSection from './components/wholesale/WholeSaleSection';
import AboutSection from './components/about/AboutSection';
import LearnSection from './components/learn/LearnSection';
import VisitSection from './components/visit/VisitSection';
import AppSubscribe from './components/subscribe/SubscribeSection';

function Home() {
    return (
        <div>
            <BannerSection />
            <ShopSection />
            <WholesaleSection />
            <AboutSection />
            <LearnSection />
            <VisitSection />
            <AppSubscribe />
        </div>
    )
}

export default Home;
