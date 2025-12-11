import EcoDecor from '@/Components/EcoDecor/EcoDecor';
import Footer from '@/Components/Footer/Footer';
import GreenExpert from '@/Components/GreenExpert/GreenExpert';
import Hero from '@/Components/Hero/Hero';
import Hero1 from '@/Components/Hero/Hero1';
import IndoorPlants from '@/Components/IndoorPlants/IndoorPlants';
import NavBar from '@/Components/NavBar/NavBar';
import PlantCareStatic from '@/Components/PlantCare/PlantCareStatic';
import PlantCommunity from '@/Components/PlantCareCommunity/PlantCommunity';
import { SpinnerNew } from '@/Components/Spinner/SpinnerNew';
import { useState } from 'react';

const LandingPage = () => {
    // const [allComponentsLoaded, setAllComponentsLoaded] = useState(false);
    // const [loadedComponents, setLoadedComponents] = useState(0);
    // const totalComponentsToLoad = 2; // IndoorPlants + EcoDecor

    // const handleComponentLoaded = () => {
    //     setLoadedComponents(prev => {
    //         const newCount = prev + 1;
    //         if(newCount >= totalComponentsToLoad) {
    //             setAllComponentsLoaded(true);
    //         }
    //         return newCount;
    //     });
    // };

    // if (!allComponentsLoaded) {
    //     return <SpinnerNew />;
    // }

    return (
        <div>
            <title>GreenNest-Home</title>
            <NavBar />
            <Hero1 />
            <IndoorPlants  />
            <PlantCareStatic />
            <GreenExpert />
            <EcoDecor />
            <PlantCommunity />
            <Footer />
        </div>
    );
};

export default LandingPage;