import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* <!-- Brand --> */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                    <i className="fas fa-leaf text-white text-sm"></i>
                                </div>
                                <span className="text-xl font-semibold">GreenNest</span>
                            </div>
                            <p className="text-gray-400 mb-4 max-w-md">
                                Your trusted partner in creating beautiful indoor gardens.
                                We bring nature into your home with expert care and guidance.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://instagram.com" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://pinterest.com" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Quick Links --> */}
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        Our Plants
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        Care Guides
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Support --> */}
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Support</h5>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        Shipping
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        Returns
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                        <p>© 2025 GreenNest. All rights reserved. Cultivating green spaces with care.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;