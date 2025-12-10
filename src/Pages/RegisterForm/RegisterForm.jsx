import NavBar from '@/Components/NavBar/NavBar';
import React from 'react';

const RegisterForm = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div class="min-h-screen bg-linear-to-br from-primary-lightest via-white to-green-50 flex items-center justify-center p-6">
                    <div class="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

                        {/* <!-- Left Side - Form --> */}
                        <div class="w-full">
                            <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                                <div class="mb-10">
                                    <h2 class="text-gray-800 text-3xl font-bold mb-3">Create Account</h2>
                                    <p class="text-gray-600 text-lg">Join our green community today</p>
                                </div>

                                <form id="signup-form" class="space-y-5">
                                    <div id="signup-error" class="bg-red-50 text-red-600 px-5 py-4 rounded-2xl text-sm border border-red-100 hidden"></div>

                                    <div class="space-y-2">
                                        <label for="signup-name" class="text-sm text-gray-700 pl-1 font-medium">
                                            Full Name
                                        </label>
                                        <div class="relative">
                                            <i class="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input id="signup-name" type="text" placeholder="John Doe" class="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all"/>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label for="signup-email" class="text-sm text-gray-700 pl-1 font-medium">
                                            Email Address
                                        </label>
                                        <div class="relative">
                                            <i class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input id="signup-email" type="email" placeholder="you@example.com" class="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all"/>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label for="signup-photo" class="text-sm text-gray-700 pl-1 font-medium">
                                            Photo URL <span class="text-gray-400">(Optional)</span>
                                        </label>
                                        <div class="relative">
                                            <i class="fas fa-image absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input id="signup-photo" type="url" placeholder="https://example.com/photo.jpg" class="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all"/>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label for="signup-password" class="text-sm text-gray-700 pl-1 font-medium">
                                            Password
                                        </label>
                                        <div class="relative">
                                            <i class="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input id="signup-password" type="password" placeholder="Minimum 6 characters" class="w-full pl-12 pr-14 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all"/>
                                                <button type="button" onclick="togglePassword('signup-password')" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                        </div>
                                        <div id="password-rules" class="text-xs text-gray-500 mt-1 space-y-1 hidden">
                                            <div id="rule-uppercase" class="flex items-center gap-1"><i class="fas fa-times text-red-500"></i> Must have an uppercase letter</div>
                                            <div id="rule-lowercase" class="flex items-center gap-1"><i class="fas fa-times text-red-500"></i> Must have a lowercase letter</div>
                                            <div id="rule-length" class="flex items-center gap-1"><i class="fas fa-times text-red-500"></i> Must be at least 6 characters</div>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label for="signup-confirm" class="text-sm text-gray-700 pl-1 font-medium">
                                            Confirm Password
                                        </label>
                                        <div class="relative">
                                            <i class="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input id="signup-confirm" type="password" placeholder="Re-enter your password" class="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all"/>
                                        </div>
                                    </div>

                                    <div class="flex items-start gap-3 py-2">
                                        <input type="checkbox" id="terms" class="w-5 h-5 mt-0.5 rounded-lg border-2 border-gray-300 text-primary focus:ring-2 focus:ring-primary/20 accent-primary cursor-pointer" required=""/>
                                            <label for="terms" class="text-sm text-gray-600 cursor-pointer">
                                                I agree to the <a href="#" class="text-primary hover:underline">Terms of Service</a> and <a href="#" class="text-primary hover:underline">Privacy Policy</a>
                                            </label>
                                    </div>

                                    <button type="button" onclick="handleSignup()" class="w-full py-4 bg-primary text-white rounded-2xl hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 font-medium">
                                        Create Account
                                    </button>

                                    <div class="relative py-4">
                                        <div class="absolute inset-0 flex items-center">
                                            <div class="w-full border-t border-gray-200"></div>
                                        </div>
                                        <div class="relative flex justify-center">
                                            <span class="px-4 bg-white text-sm text-gray-500">Or sign up with</span>
                                        </div>
                                    </div>

                                    <button type="button" onclick="googleLogin()" class="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all">
                                        <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5"/>
                                            <span class="text-gray-700 text-sm font-medium">Continue with Google</span>
                                    </button>
                                </form>

                                <div class="mt-8 text-center">
                                    <span class="text-gray-600">Already have an account? </span>
                                    <button onclick="showPage('login')" class="text-primary hover:text-primary-light transition-colors font-medium">
                                        Sign in
                                    </button>
                                </div>
                            </div>

                            <div class="mt-6 text-center">
                                <button onclick="showPage('home')" class="text-gray-600 hover:text-primary transition-colors text-sm">
                                    <i class="fas fa-arrow-left mr-2"></i>Back to Home
                                </button>
                            </div>
                        </div>

                        {/* <!-- Right Side - Branding --> */}
                        <div class="hidden lg:flex flex-col justify-center space-y-8 px-12">
                            <div class="space-y-4">
                                <div class="inline-flex items-center gap-3">
                                    <div class="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                                        <i class="fas fa-leaf text-white text-2xl"></i>
                                    </div>
                                    <span class="text-4xl text-primary tracking-tight font-bold">GreenNest</span>
                                </div>
                                <h1 class="text-gray-800 text-5xl font-bold leading-tight">
                                    Start Your Plant<br/>Journey Today
                                </h1>
                                <p class="text-xl text-gray-600 leading-relaxed">
                                    Discover the joy of indoor gardening with personalized care tips, expert advice, and a supportive community.
                                </p>
                            </div>

                            <div class="space-y-4">
                                <div class="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-100">
                                    <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <i class="fas fa-check text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h5 class="text-gray-800 font-semibold mb-1">Expert Plant Care</h5>
                                        <p class="text-gray-600 text-sm">Get personalized tips from certified botanists</p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-100">
                                    <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <i class="fas fa-users text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h5 class="text-gray-800 font-semibold mb-1">Growing Community</h5>
                                        <p class="text-gray-600 text-sm">Connect with fellow plant enthusiasts</p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-100">
                                    <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <i class="fas fa-seedling text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h5 class="text-gray-800 font-semibold mb-1">Premium Selection</h5>
                                        <p class="text-gray-600 text-sm">Access 500+ curated plant varieties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;