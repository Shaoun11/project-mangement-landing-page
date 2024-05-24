import React from 'react';

import AppLayout from "../layout/AppLayout.jsx";
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import SponsorPage from '../components/SponsorPage/SponsorPage.jsx';
import UserSupport from '../components/User-Support-Page/UserSupport.jsx';
import FeaturesPage from '../components/Features Page/FeaturesPage.jsx';
import Pricing from '../components/Pricing/Pricing.jsx';
import Testimonials from '../components/TestimonialsPage/Testimonials.jsx';
import FAQ from '../components/FAQPage/FAQ.jsx';
const HomePage = () => {
    return (
        <AppLayout>
            <Navbar></Navbar>
            <Hero></Hero>
            <SponsorPage></SponsorPage>
            <UserSupport></UserSupport>
            <FeaturesPage></FeaturesPage>
            <Pricing></Pricing>
            <Testimonials></Testimonials>
            <FAQ></FAQ>

        </AppLayout>
    );
};
export default HomePage;