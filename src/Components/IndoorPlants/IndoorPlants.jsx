import React from 'react';
import PlantCard from '../PlantCard/PlantCard';
import Useplants from '@/Hooks/CustomHook';

const IndoorPlants = () => {
    const {plants,loading}=Useplants();
    // console.log(plants.length)
    return (
        <>
            <section class="py-16 px-4 bg-white">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-primary text-3xl font-bold mb-4">Top Rated Indoor Plants</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">Discover our most loved plants, carefully selected and nurtured by our experts</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            plants.map(plant=><PlantCard plant={plant}></PlantCard>)
                        }
                    </div>

                    <div class="text-center mt-12">
                        <button onclick="showPage('plants')" class="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium">View All Plants</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndoorPlants;