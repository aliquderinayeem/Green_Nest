import React from 'react';

const PlantCard = ({plant}) => {
    console.log(plant);
    return (
        <>
            <div class="plant-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onclick="viewPlantDetails(1)">
                <div class="relative h-64 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1634803534299-56378af8fa70?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBtb25zdGVyYXxlbnwxfHx8fDE3NjQ0ODY3Mzl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Monstera Deliciosa" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    <div class="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-primary font-medium">
                        Air Purifier
                    </div>
                    <div class="absolute top-3 left-3 px-3 py-1 bg-primary text-white rounded-full text-sm">
                        <i class="fas fa-star mr-1"></i> 4.8
                    </div>
                </div>

                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Monstera Deliciosa</h3>
                    <p class="text-gray-600 text-sm mb-4">A hardy plant that purifies indoor air and thrives in low light</p>

                    <div class="flex items-center justify-between">
                        <div>
                            <span class="text-primary text-2xl font-bold">$18.00</span>
                            <span class="text-gray-500 text-sm ml-2">10 in stock</span>
                        </div>
                        <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors flex items-center gap-2">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlantCard;