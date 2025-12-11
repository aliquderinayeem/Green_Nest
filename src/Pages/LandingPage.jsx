import EcoDecor from '@/Components/EcoDecor/EcoDecor';
import Footer from '@/Components/Footer/Footer';
import GreenExpert from '@/Components/GreenExpert/GreenExpert';
import Hero from '@/Components/Hero/Hero';
import IndoorPlants from '@/Components/IndoorPlants/IndoorPlants';
import NavBar from '@/Components/NavBar/NavBar';
import PlantCareStatic from '@/Components/PlantCare/PlantCareStatic';
import PlantCommunity from '@/Components/PlantCareCommunity/PlantCommunity';
import React from 'react';
import { Outlet } from 'react-router';

const LandingPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <IndoorPlants></IndoorPlants>
            <PlantCareStatic></PlantCareStatic>
            <GreenExpert></GreenExpert>
            <EcoDecor></EcoDecor>
            <PlantCommunity></PlantCommunity>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;