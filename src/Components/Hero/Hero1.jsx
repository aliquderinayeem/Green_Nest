import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';

const Hero1 = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideInterval, setSlideInterval] = useState(null);

    const slides = [
        {
            id: 'slide-1',
            img: 'https://images.unsplash.com/photo-1634803534299-56378af8fa70?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBtb25zdGVyYXxlbnwxfHx8fDE3NjQ0ODY3Mzl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080',
            title: 'Bring Nature Home',
            description: 'Discover the perfect plants for your living space',
            buttonText: 'Explore Plants',
            buttonAction: () => navigate('/plants')
        },
        {
            id: 'slide-2',
            img: 'https://images.unsplash.com/photo-1585213303783-2044a119f9e4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ0ODY3NDF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080',
            title: 'Expert Plant Care',
            description: 'Learn from our certified plant specialists',
            buttonText: 'Book Consultation',
            buttonAction: () => navigate('/')
        },
        {
            id: 'slide-3',
            img: 'https://images.unsplash.com/photo-1634513980958-2ea35f23de68?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudHMlMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzY0NDg2NzQyfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080',
            title: 'Transform Your Space',
            description: 'Create your own green sanctuary',
            buttonText: 'Shop Now',
            buttonAction: () => navigate('/plants')
        }
    ];

    const slidesCount = slides.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % slidesCount);
    }, [slidesCount]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev - 1 + slidesCount) % slidesCount);
    }, [slidesCount]);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
        // Restart the slideshow
        clearInterval(slideInterval);
        startSlideShow();
    }, [slideInterval]);

    const startSlideShow = useCallback(() => {
        clearInterval(slideInterval);
        const interval = setInterval(nextSlide, 3000); // Changed to 3 seconds to match Swiper's default
        setSlideInterval(interval);
        return interval;
    }, [nextSlide, slideInterval]);

    // Initialize slideshow on component mount
    useEffect(() => {
        const interval = startSlideShow();
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="relative h-[500px] md:h-[600px] overflow-hidden">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id}
                        id={slide.id}
                        className={`hero-slide absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
                        <img 
                            src={slide.img} 
                            alt={slide.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="text-center px-4 max-w-3xl">
                                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-white/90 text-xl mb-8">
                                    {slide.description}
                                </p>
                                <button 
                                    className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium"
                                    onClick={slide.buttonAction}
                                >
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                    {slides.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 slide-dot ${currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Hero1;