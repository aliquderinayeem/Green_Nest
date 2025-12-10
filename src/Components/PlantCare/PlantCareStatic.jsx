import React, { useState } from 'react';

const PlantCareStatic = () => {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <section className="py-16 px-4 bg-gradient-to-b from-primary-lightest to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-primary text-3xl font-bold mb-4">Plant Care Tips</h2>
                        <p className="text-gray-600 mx-auto">Master the fundamentals of plant care with our expert guidance</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-tint text-primary text-xl"></i>
                            </div>

                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Watering</h4>
                            <p className="text-gray-600 text-sm mb-4">Learn the perfect watering schedule for each plant type</p>

                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Check soil moisture before watering</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Water thoroughly but avoid overwatering</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Use room temperature water</span>
                                </li>
                            </ul>
                        </div>


                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-sun text-primary text-xl"></i>
                            </div>

                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Sunlight</h4>
                            <p className="text-gray-600 text-sm mb-4">Understand your plant's light requirements</p>

                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Place near bright, indirect light</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Rotate plants weekly for even growth</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Avoid harsh direct sunlight</span>
                                </li>
                            </ul>
                        </div>


                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-seedling text-primary text-xl"></i>
                            </div>

                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Fertilizing</h4>
                            <p className="text-gray-600 text-sm mb-4">Nourish your plants for optimal growth</p>

                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Feed during growing season</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Use balanced liquid fertilizer</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Follow package instructions</span>
                                </li>
                            </ul>
                        </div>


                        <div className={"bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"}>
                            <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-thermometer-half text-primary text-xl"></i>
                            </div>

                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Temperature</h4>
                            <p className="text-gray-600 text-sm mb-4">Maintain ideal climate conditions</p>

                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Keep temperature between 65-75°F</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Avoid cold drafts and vents</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Maintain consistent humidity</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7  ${!expand ? 'hidden' : ''}`}>
                        {/* Pruning */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-cut text-primary text-xl"></i>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Pruning</h4>
                            <p className="text-gray-600 text-sm mb-4">Keep plants healthy and encourage new growth</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Remove dead or yellowing leaves</span></li>
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Trim leggy stems to promote bushier growth</span></li>
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Use clean, sharp scissors</span></li>
                            </ul>
                        </div>

                        {/* Repotting */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-leaf text-primary text-xl"></i>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Repotting</h4>
                            <p className="text-gray-600 text-sm mb-4">Refresh soil and give roots more space</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Repot every 1–2 years</span></li>
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Choose a pot 1–2 inches larger</span></li>
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Use fresh, well-draining soil</span></li>
                            </ul>
                        </div>

                        {/* Pest Control */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-bug text-primary text-xl"></i>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Pest Control</h4>
                            <p className="text-gray-600 text-sm mb-4">Protect plants from common pests</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Inspect leaves regularly</span></li>
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Wipe with neem oil or mild soap solution</span></li>
                                <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary mt-1"></i><span>Isolate infected plants</span></li>
                            </ul>
                        </div>
                        {/* Propagation */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-clone text-primary text-xl"></i>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Propagation</h4>
                            <p className="text-gray-600 text-sm mb-4">Multiply your plants with simple techniques</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Take stem or leaf cuttings</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Place cuttings in water or moist soil</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <i className="fas fa-check text-primary mt-1"></i>
                                    <span>Wait for roots before transplanting</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium" onClick={() => { setExpand(!expand) }}>
                            {!expand ? 'View Full Care Guide' : 'Collapse'}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlantCareStatic;