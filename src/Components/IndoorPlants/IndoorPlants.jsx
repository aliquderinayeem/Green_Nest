import React, { useEffect, useState } from 'react';
import PlantCard from '../PlantCard/PlantCard';
import { useNavigate } from 'react-router';
import { SpinnerNew } from '../Spinner/SpinnerNew';

const IndoorPlants = ({ onLoad }) => {
    const [HomePlants, setHomePlants] = useState([]);
    const navigate = useNavigate();
    // const {plants,loading}=Useplants();
    useEffect(() => {
        fetch('../plants.json')
            .then(res => res.json())
            .then(plants => {
                const HomePlants = plants.slice(0, 3);
                setHomePlants(HomePlants);
                if (onLoad) {
                    onLoad();
                }
            });
    }, );
    return (
        <>
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-primary text-3xl font-bold mb-4">Top Rated Indoor Plants</h2>
                        <p className="text-gray-600 mx-auto">Discover our most loved plants, carefully selected and nurtured by our experts</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            HomePlants.map((plant, index) => <PlantCard key={index} plant={plant}></PlantCard>)
                        }
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium" onClick={() => navigate('/plants')}>View All Plants</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndoorPlants;