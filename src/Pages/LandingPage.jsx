import Footer from '@/Components/Footer/Footer';
import Hero from '@/Components/Hero/Hero';
import NavBar from '@/Components/NavBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router';

const LandingPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;