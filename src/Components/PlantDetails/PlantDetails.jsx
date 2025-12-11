import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { SpinnerNew } from '../Spinner/SpinnerNew';
import { ArrowLeft, Calendar, Heart, ShoppingCart, Star } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const PlantDetails = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [plants, setPlants] = useState([]);
    const { id } = useParams();
    const DummyFunctionality=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const date=e.target.date.value;
        const time=e.target.time.value;
        // console.log(name,date,time)
        toast.success(`${name} booked a slot for Consultation at ${date}, ${time}`)
    }
    useEffect(() => {
        fetch('../plants.json')
            .then(res => res.json())
            .then(plants => {
                setPlants(plants);
                setLoading(false);
            });
    }, [])
    if (!loading) {
        const desiredPlant = plants.find(plant => plant.plantId == id);
        const { plantName, category, price, rating, availableStock, careLevel, Bdescription, image, providerName } = desiredPlant;
        return (
            <>
                <div className="min-h-screen bg-primary-lightest py-8 px-4">
                    <Toaster richColors position="top-right" ></Toaster>
                    <div className="max-w-7xl mx-auto">
                        {/* Back Button */}
                        <button
                            onClick={() => navigate('/plants')}
                            className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Plants
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            <div>
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4">
                                    <img
                                        src={image}
                                        alt={plantName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 className="text-gray-800 mb-2">{plantName}</h2>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(rating)
                                                            ? 'fill-yellow-400 text-yellow-400'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                {rating} 
                                            </span>
                                        </div>
                                    </div>
                                    <button className="p-2 rounded-full hover:bg-gray-100">
                                        <Heart className="w-6 h-6 text-gray-400" />
                                    </button>
                                </div>

                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-4xl text-primary">${price}</span>
                                    <span className="text-gray-500">Free shipping</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-primary-lightest p-4 rounded-lg">
                                        <div className="text-sm text-gray-600 mb-1">Category</div>
                                        <div className="text-primary">{category}</div>
                                    </div>
                                    <div className="bg-primary-lightest p-4 rounded-lg">
                                        <div className="text-sm text-gray-600 mb-1">Care Level</div>
                                        <div className="text-primary">{careLevel}</div>
                                    </div>
                                    <div className="bg-primary-lightest p-4 rounded-lg">
                                        <div className="text-sm text-gray-600 mb-1">Available Stock</div>
                                        <div className="text-primary">{availableStock}</div>
                                    </div>
                                    <div className="bg-primary-lightest p-4 rounded-lg">
                                        <div className="text-sm text-gray-600 mb-1">Provider Name</div>
                                        <div className="text-primary">{providerName}</div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 flex-1">{Bdescription}</p>

                                {/* <div className="mb-6">
                                    <h5 className="text-gray-800 mb-3">Key Features</h5>
                                    <ul className="space-y-2">
                                        {plant.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-600">
                                                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}

                                <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center gap-2 mb-3">
                                    <ShoppingCart className="w-5 h-5" />
                                    Add to Cart
                                </button>
                                <button className="w-full py-3 border border-primary text-primary rounded-lg hover:bg-primary-lightest transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Consultation Booking  */}
                         <div className="bg-white rounded-lg shadow-lg p-8 mx-auto">
                            <div className="text-center mb-6">
                                <Calendar className="w-12 h-12 text-primary mx-auto mb-3" />
                                <h3 className="text-gray-800 text-[30px] mb-2">Book a Plant Care Consultation</h3>
                                <p className="text-gray-600">
                                    Get personalized advice from our experts on caring for your {plantName}
                                </p>
                            </div>

                            <form onSubmit={DummyFunctionality}className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                    required
                                        name="name"
                                        type="text"
                                        placeholder="Plant Lover"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-gray-700 mb-2">
                                            Preferred Date
                                        </label>
                                        <input
                                        required
                                            name="date"
                                            type="date"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="time" className="block text-gray-700 mb-2">
                                            Preferred Time
                                        </label>
                                        <input
                                        required
                                            name="time"
                                            type="time"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                                >
                                    Book Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div></>
        );
    }
    if (loading) {
        return (
            <>
                <SpinnerNew></SpinnerNew>
            </>
        )
    }
};

export default PlantDetails;