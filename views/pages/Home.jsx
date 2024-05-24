import React from 'react';

import AppLayout from "../layout/AppLayout.jsx";
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import SponsorPage from '../components/SponsorPage/SponsorPage.jsx';
import UserSupport from '../components/User-Support-Page/UserSupport.jsx';
import FeaturesPage from '../components/Features Page/FeaturesPage.jsx';
const HomePage = () => {
    return (
        <AppLayout>
            <Navbar></Navbar>
            <Hero></Hero>
            <SponsorPage></SponsorPage>
            <UserSupport></UserSupport>
            <FeaturesPage></FeaturesPage>

        </AppLayout>
    );
};
export default HomePage;