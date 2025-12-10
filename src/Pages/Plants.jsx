import Footer from '@/Components/Footer/Footer';
import IndoorPlants from '@/Components/IndoorPlants/IndoorPlants';
import NavBar from '@/Components/NavBar/NavBar';
import PlantCard from '@/Components/PlantCard/PlantCard';
import Useplants from '@/Hooks/CustomHook';
import { HomeIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const Plants = () => {
    const navigate = useNavigate();
    const { plants, loading } = Useplants();
    return (
        <>
            <NavBar></NavBar>
            <div class="py-8 px-4 bg-primary-lightest">
                <div class="max-w-7xl mx-auto">
                    <div class="mb-8">
                        <h1 class="text-primary text-3xl font-bold mb-2">All Indoor Plants</h1>
                        <p class="text-gray-600">Browse our complete collection of indoor plants</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    </div>
                </div>
            </div>
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            plants.map((plant, index) => <PlantCard key={index} plant={plant}></PlantCard>)
                        }
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium flex mx-auto gap-4 items-center" onClick={() => navigate('/')}><HomeIcon></HomeIcon>Home</button>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Plants;