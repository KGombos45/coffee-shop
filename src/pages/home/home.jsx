import React from 'react';
import BannerSection from '../../banner/banner';
import ShopSection from './shop/ShopSection';
import WholesaleSection from './wholesale/WholeSaleSection';
import AboutSection from './about/AboutSection';
import LearnSection from './learn/LearnSection';
import VisitSection from './visit/VisitSection';
import AppSubscribe from './subscribe/SubscribeSection';

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
