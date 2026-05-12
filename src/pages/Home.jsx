import React from 'react';
import TopNav from '../components/TopNav';
import HeroSection from '../components/HeroSection';
import OurPartner from '../components/OurPartners'
import WhyWe from '../components/WhyWe'
import FeaturedWork from '../components/FeaturedWork';
import Ourservices from '../components/Ourservices';
import SendUsBrief from '../components/SendUsBrief';
import Footer from '../components/Footer';
import LegacySlideCard from '../components/LegacySlideCard';
import WhatsNew from '../components/WhatsNew';
const Home = () => {
    return (
        <div>

            <TopNav/>
            <HeroSection/>
            <OurPartner/>
            <WhyWe/>
            <FeaturedWork/>
            <Ourservices/>
            <SendUsBrief/>
            <LegacySlideCard/>
            <WhatsNew/>
            <Footer/>
            
        </div>
    );
};

export default Home;