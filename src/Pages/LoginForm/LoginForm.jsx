import NavBar from '@/Components/NavBar/NavBar';
import React from 'react';
import { NavLink } from 'react-router';

const LoginForm = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div id="login-page" class="">
                <div class="min-h-screen bg-linear-to-br from-primary-lightest via-white to-green-50 flex items-center justify-center p-6">
                    <div class="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

                         {/* Left Side - Branding  */}
                        <div class="hidden lg:flex flex-col justify-center space-y-8 px-12">
                            <div class="space-y-4">
                                <div class="inline-flex items-center gap-3">
                                    <div class="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                                        <i class="fas fa-leaf text-white text-2xl"></i>
                                    </div>
                                    <span class="text-4xl text-primary tracking-tight font-bold">GreenNest</span>
                                </div>
                                <h1 class="text-gray-800 text-5xl font-bold leading-tight">
                                    Welcome to Your<br/>Green Sanctuary
                                </h1>
                                <p class="text-xl text-gray-600 leading-relaxed">
                                    Join thousands of plant lovers cultivating beautiful indoor gardens with expert care and guidance.
                                </p>
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <div class="text-4xl text-primary font-bold">10K+</div>
                                    <div class="text-gray-600">Happy Plant Parents</div>
                                </div>
                                <div class="space-y-2">
                                    <div class="text-4xl text-primary font-bold">500+</div>
                                    <div class="text-gray-600">Plant Varieties</div>
                                </div>
                            </div>

                            <div class="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1585213303783-2044a119f9e4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ0ODY3NDF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Plants" class="w-full h-full object-cover"/>
                            </div>
                        </div>

                        {/* <!-- Right Side - Form --> */}
                        <div class="w-full">
                            <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                                <div class="mb-10">
                                    <h2 class="text-gray-800 text-3xl font-bold mb-3">Sign In</h2>
                                    <p class="text-gray-600 text-lg">Enter your credentials to continue</p>
                                </div>

                                <form id="login-form" class="space-y-6">
                                    <div id="login-error" class="bg-red-50 text-red-600 px-5 py-4 rounded-2xl text-sm border border-red-100 hidden"></div>

                                    <div class="space-y-2">
                                        <label for="login-email" class="text-sm text-gray-700 pl-1 font-medium">
                                            Email Address
                                        </label>
                                        <div class="relative">
                                            <i class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input id="login-email" type="email" placeholder="you@example.com" class="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all"/>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label for="login-password" class="text-sm text-gray-700 pl-1 font-medium">
                                            Password
                                        </label>
                                        <div class="relative">
                                            <i class="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input id="login-password" type="password" placeholder="Enter your password" class="w-full pl-12 pr-14 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all"/>
                                                <button type="button" onclick="togglePassword('login-password')" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                        </div>
                                    </div>

                                    <div class="flex items-center justify-between text-sm">
                                        <label class="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" class="w-5 h-5 rounded-lg border-2 border-gray-300 text-primary focus:ring-2 focus:ring-primary/20 accent-primary cursor-pointer"/>
                                                <span class="text-gray-600">Remember me</span>
                                        </label>
                                        <button type="button" onclick="forgotPassword()" class="text-primary hover:text-primary-light transition-colors">
                                            Forgot password?
                                        </button>
                                    </div>

                                    <button type="button" onclick="handleLogin()" class="w-full py-4 bg-primary text-white rounded-2xl hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 font-medium">
                                        Sign In
                                    </button>

                                    <div class="relative py-4">
                                        <div class="absolute inset-0 flex items-center">
                                            <div class="w-full border-t border-gray-200"></div>
                                        </div>
                                        <div class="relative flex justify-center">
                                            <span class="px-4 bg-white text-sm text-gray-500">Or continue with</span>
                                        </div>
                                    </div>

                                    <button type="button" onclick="googleLogin()" class="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all">
                                        <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5"/>
                                            <span class="text-gray-700 text-sm font-medium">Continue with Google</span>
                                    </button>
                                </form>

                                <div class="mt-8 text-center">
                                    <span class="text-gray-600">Don't have an account? </span>
                                    <button onclick="showPage('signup')" class="text-primary hover:text-primary-light transition-colors font-medium">
                                        Create one now
                                    </button>
                                </div>
                            </div>

                            <div class="mt-6 text-center">
                                <button class="text-gray-600 hover:text-primary transition-colors text-sm">
                                    <NavLink to='/'><i class="fas fa-arrow-left mr-2"></i>Back to Home</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;