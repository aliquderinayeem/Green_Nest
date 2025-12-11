import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
const PlantCommunity = () => {
    const [testimonials,setTestimonials]=useState([])
    fetch('../plantcarecommunity.json').then(res=>res.json()).then(data=>setTestimonials(data))
    return (
        <>
            <section className="py-16 bg-gradient-to-b from-white to-[#F8FFFE]">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-primary text-3xl font-bold mb-4">Plant Parent Stories</h2>
                        <p className="text-gray-600 mx-auto">
                            Join thousands of happy plant parents who have transformed their spaces with GreenNest.
                            Here's what our community has to say about their green journey.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-4 right-4 text-[#90EE90] opacity-20 group-hover:opacity-30 transition-opacity">
                                    <Quote size={48} fill="currentColor" />
                                </div>

                                {/* User Info */}
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-[#90EE90]"
                                    />
                                    <div>
                                        <h4 className="text-gray-800">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="text-[#3CB371] fill-[#3CB371]"
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {testimonial.text}
                                </p>

                                {/* Plant Purchased */}
                                <div className="pt-3 border-t border-gray-100">
                                    <p className="text-xs text-[#2E8B57]">
                                        Purchased: <span className="font-medium">{testimonial.plantPurchased}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl text-[#2E8B57] mb-2">10K+</div>
                            <p className="text-sm text-gray-600">Happy Customers</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl text-[#2E8B57] mb-2">500+</div>
                            <p className="text-sm text-gray-600">Plant Varieties</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl text-[#2E8B57] mb-2">98%</div>
                            <p className="text-sm text-gray-600">Satisfaction Rate</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl text-[#2E8B57] mb-2">24/7</div>
                            <p className="text-sm text-gray-600">Plant Care Support</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlantCommunity;