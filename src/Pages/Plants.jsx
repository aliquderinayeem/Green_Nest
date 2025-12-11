import Footer from '@/Components/Footer/Footer';
import IndoorPlants from '@/Components/IndoorPlants/IndoorPlants';
import NavBar from '@/Components/NavBar/NavBar';
import PlantCard from '@/Components/PlantCard/PlantCard';
import { SpinnerNew } from '@/Components/Spinner/SpinnerNew';
import { HomeIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Plants = () => {
    const navigate = useNavigate();
    const [plants, setPlants] = useState([]);
    const [loading,setLoading]=useState(true);
    // const {plants,loading}=Useplants();
    useEffect(() => {
        fetch('../plants.json')
            .then(res => res.json())
            .then(plants => {
                setPlants(plants);
                setLoading(false);
            });
    }, );
    if(loading){
        return(
            <>
            <SpinnerNew></SpinnerNew>
            </>
        )
    }
    return (
        <>
            <NavBar></NavBar>
            <div className="py-8 px-4 bg-primary-lightest">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-primary text-3xl font-bold mb-2">All Indoor Plants</h1>
                        <p className="text-gray-600">Browse our complete collection of indoor plants</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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