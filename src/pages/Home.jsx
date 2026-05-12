import React from 'react';
import TopNav from '../components/TopNav';
import HeroSection from '../components/HeroSection';
import OurPartner from '../components/OurPartners'
import WhyWe from '../components/WhyWe'
import FeaturedWork from '../components/FeaturedWork';
import Ourservices from '../components/Ourservices';
 
const Home = () => {
    return (
        <div>
            <TopNav/>
            <HeroSection/>
            <OurPartner/>
            <WhyWe/>
            <FeaturedWork/>
            <Ourservices/>
        </div>
    );
};

export default Home;