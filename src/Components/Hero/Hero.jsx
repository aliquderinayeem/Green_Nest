import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';

const Hero = () => {
    const navigate=useNavigate();
    const [currentSlide, setCurrentSlide] = useState(1); // Start with slide 2 active as per your HTML
    const [slideInterval, setSlideInterval] = useState(null);

    const slides = ['slide-1', 'slide-2', 'slide-3'];
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
        const interval = setInterval(nextSlide, 5000);
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
                {/* Slide 1 */}
                <div 
                    id="slide-1" 
                    className={`hero-slide absolute inset-0 ${currentSlide === 0 ? '' : 'hidden'}`}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/30 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1634803534299-56378af8fa70?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBtb25zdGVyYXxlbnwxfHx8fDE3NjQ0ODY3Mzl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Monstera Plants" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center px-4 max-w-3xl">
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Bring Nature Home</h1>
                            <p className="text-white/90 text-xl mb-8">Discover the perfect plants for your living space</p>
                            <button 
                                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium" onClick={()=>navigate('/plants')}
                            >
                                Explore Plants
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div 
                    id="slide-2" 
                    className={`hero-slide absolute inset-0 ${currentSlide === 1 ? '' : 'hidden'}`}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/30 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1585213303783-2044a119f9e4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ0ODY3NDF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Botanical Garden" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center px-4 max-w-3xl">
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Expert Plant Care</h1>
                            <p className="text-white/90 text-xl mb-8">Learn from our certified plant specialists</p>
                            <button
                                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium"
                            >
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div 
                    id="slide-3" 
                    className={`hero-slide absolute inset-0 ${currentSlide === 2 ? '' : 'hidden'}`}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/30 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1634513980958-2ea35f23de68?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudHMlMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzY0NDg2NzQyfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Home Decor with Plants" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center px-4 max-w-3xl">
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Transform Your Space</h1>
                            <p className="text-white/90 text-xl mb-8">Create your own green sanctuary</p>
                            <button
                                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium"
                            >
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                    <button 
                        onClick={() => goToSlide(0)}
                        className={`w-${currentSlide === 0 ? '8' : '2'} h-2 rounded-full transition-all slide-dot ${currentSlide === 0 ? 'bg-white' : 'bg-white/50'}`}
                    ></button>
                    <button 
                        onClick={() => goToSlide(1)}
                        className={`w-${currentSlide === 1 ? '8' : '2'} h-2 rounded-full transition-all slide-dot ${currentSlide === 1 ? 'bg-white' : 'bg-white/50'}`}
                    ></button>
                    <button 
                        onClick={() => goToSlide(2)}
                        className={`w-${currentSlide === 2 ? '8' : '2'} h-2 rounded-full transition-all slide-dot ${currentSlide === 2 ? 'bg-white' : 'bg-white/50'}`}
                    ></button>
                </div>
            </section>
        </>
    );
};

export default Hero;