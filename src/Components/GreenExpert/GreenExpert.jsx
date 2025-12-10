import React from 'react';
import Expert1 from "../../assets/oldMan.png";
import Expert2 from "../../assets/photo-1500648767791-00dcc994a43e.jpg";
import Expert3 from '../../assets/photo-1494790108377-be9c29b29330.jpg'
const GreenExpert = () => {
    return (
        <>
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-primary text-3xl font-bold mb-4">Meet Our Green Experts</h2>
                        <p className="text-gray-600 mx-auto">Our certified specialists are here to help you create your perfect indoor garden</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-72 overflow-hidden">
                                <img src={Expert1} alt="Sarah Martinez" className="w-full h-full object-cover"/>
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white rounded-full text-sm flex items-center gap-1">
                                        <i className="fas fa-award text-xs"></i>
                                        10+ years
                                    </div>
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-1">Sarah Martinez</h4>
                                <p className="text-primary text-sm mb-1">Lead Botanist</p>

                                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                                    <i className="fas fa-leaf text-primary"></i>
                                    <span>Tropical Plants</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">Expert in exotic tropical species and indoor plant care.Experience of 12 years</p>

                                <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary-lightest transition-colors flex items-center justify-center gap-2">
                                    <i className="fas fa-book-open"></i>
                                    Book Consultation
                                </button>
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-72 overflow-hidden">
                                <img src={Expert2} alt="Michael Chen" className="w-full h-full object-cover"/>
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white rounded-full text-sm flex items-center gap-1">
                                        <i className="fas fa-award text-xs"></i>
                                        8+ years
                                    </div>
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-1">Michael Chen</h4>
                                <p className="text-primary text-sm mb-1">Plant Care Specialist</p>

                                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                                    <i className="fas fa-leaf text-primary"></i>
                                    <span>Succulents &amp; Cacti</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">Specializes in desert plants and low-maintenance varieties</p>

                                <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary-lightest transition-colors flex items-center justify-center gap-2">
                                    <i className="fas fa-book-open"></i>
                                    Book Consultation
                                </button>
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-72 overflow-hidden">
                                <img src={Expert3} alt="Emily Johnson" className="w-full h-full object-cover"/>
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white rounded-full text-sm flex items-center gap-1">
                                        <i className="fas fa-award text-xs"></i>
                                        12+ years
                                    </div>
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-1">Emily Johnson</h4>
                                <p className="text-primary text-sm mb-1">Horticultural Advisor</p>

                                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                                    <i className="fas fa-leaf text-primary"></i>
                                    <span>Indoor Air Quality</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">Focuses on air-purifying plants and wellness benefits on health</p>

                                <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary-lightest transition-colors flex items-center justify-center gap-2">
                                    <i className="fas fa-book-open"></i>
                                    Book Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GreenExpert;