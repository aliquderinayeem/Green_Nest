import React from 'react';
import { useNavigate } from 'react-router';

const PlantCard = ({plant}) => {
    // console.log(plant);
    const navigate=useNavigate();
    const {plantName,category,image,rating,description,price,availableStock,plantId}=plant;
    return (
        <>
            <div className="plant-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={()=>navigate(`/plants/${plantId}`)}>
                <div className="relative h-64 overflow-hidden">
                    <img src={image} alt="Monstera Deliciosa" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-primary font-medium">
                        {category}
                    </div>
                    <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white rounded-full text-sm">
                        <i className="fas fa-star mr-1"></i>{rating}
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{plantName}</h3>
                    <p className="text-gray-600 text-sm mb-4">{description}</p>

                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-primary text-2xl font-bold">${price}</span>
                            <span className="text-gray-500 text-sm ml-2">{availableStock} in stock</span>
                        </div>
                        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors flex items-center gap-2">
                            <i className="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlantCard;