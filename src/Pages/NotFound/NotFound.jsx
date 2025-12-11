import React from 'react';
import { Leaf, Home, Search, ArrowLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-br from-primary-lightest via-white to-green-50 flex items-center min-h-screen justify-center p-6">
            <div className="max-w-4xl w-full">
                <div className="text-center space-y-2">
                    {/* 404 Visual */}
                    <div className="relative inline-block">
                        <div className="text-[180px] md:text-[240px] leading-none text-primary/10 select-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                                <Leaf className="w-16 h-16 md:w-20 md:h-20 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 px-4">
                        <h1 className="text-gray-800">
                            Oops! Page Not Found
                        </h1>
                        <p className="text-xl text-gray-600 mx-auto">
                            Looks like this plant got lost in the garden. The page you're looking for doesn't exist or has been moved to a sunnier spot.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <NavLink to='/'>
                            <button

                                className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                            >
                                <Home className="w-5 h-5" />
                                <span>Back to Home</span>
                            </button>
                        </NavLink>
                        <button

                            className="flex items-center gap-3 px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all"
                            onClick={() => { navigate('/plants') }}
                        >
                            <Search className="w-5 h-5" />
                            <span>Browse Plants</span>
                        </button>
                    </div>

                    {/* Decorative Plant Images */}
                    <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-12">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-32 md:h-40">
                            <img
                                src="https://images.unsplash.com/photo-1459156212016-c812468e2115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                                alt="Plant 1"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg h-32 md:h-40">
                            <img
                                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                                alt="Plant 2"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg h-32 md:h-40">
                            <img
                                src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                                alt="Plant 3"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Helpful Links */}
                    <div className="pt-8 space-y-3">
                        <p className="text-gray-600">Maybe these pages can help:</p>
                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                            <button
                                onClick={() => navigate('/')}
                                className="text-primary hover:text-primary-light transition-colors hover:underline"
                            >
                                Home
                            </button>
                            <span className="text-gray-300">•</span>
                            <button
                                onClick={() => navigate('/')}
                                className="text-primary hover:text-primary-light transition-colors hover:underline"
                            >
                                Plant Care Tips
                            </button>
                            <span className="text-gray-300">•</span>
                            <button
                                onClick={() => navigate('/')}
                                className="text-primary hover:text-primary-light transition-colors hover:underline"
                            >
                                Shop Plants
                            </button>
                            <span className="text-gray-300">•</span>
                            <button
                                onClick={() => navigate('/login')}
                                className="text-primary hover:text-primary-light transition-colors hover:underline"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;