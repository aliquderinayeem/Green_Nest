import NavBar from '@/Components/NavBar/NavBar';
import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { EyeOff, Eye } from 'lucide-react';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast, Toaster } from 'sonner';
import { auth } from '@/FireBase/FireBase.init';
import { AuthContext } from '@/Components/Context/AuthContext/AuthContext';
const googleProvider = new GoogleAuthProvider();



const LoginForm = () => {
    const [show, setShow] = useState(false);
    const ShowPassword = () => {
        setShow(!show);
    }


    const { signInWithGoogle, signInUser } = use(AuthContext);
    // console.log(SignInWithGoogle,SignInUser)
    // Google Sign In
    const GoogleSignInHandle = () => {
        signInWithGoogle(auth, googleProvider)
            .then(result => { toast("Logged In With Google") })
            .catch(error => console.log(error));

    }
    //Local User Sign In
    const HandleLoginFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInUser(email, password)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    const navigate = useNavigate();
    return (
        <div>
            <Toaster position="top-right"></Toaster>
            <NavBar></NavBar>
            <div id="login-page">
                <div className="min-h-screen bg-linear-to-br from-primary-lightest via-white to-green-50 flex items-center justify-center p-6">
                    <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

                        {/* Left Side - Branding  */}
                        <div className="hidden lg:flex flex-col justify-center space-y-8 px-12">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-3">
                                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                                        <i className="fas fa-leaf text-white text-2xl"></i>
                                    </div>
                                    <span className="text-4xl text-primary tracking-tight font-bold">GreenNest</span>
                                </div>
                                <h1 className="text-gray-800 text-5xl font-bold leading-tight">
                                    Welcome to Your<br />Green Sanctuary
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Join thousands of plant lovers cultivating beautiful indoor gardens with expert care and guidance.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="text-4xl text-primary font-bold">10K+</div>
                                    <div className="text-gray-600">Happy Plant Parents</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl text-primary font-bold">500+</div>
                                    <div className="text-gray-600">Plant Varieties</div>
                                </div>
                            </div>

                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1585213303783-2044a119f9e4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ0ODY3NDF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Plants" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* <!-- Right Side - Form --> */}
                        <div className="w-full">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                                <div className="mb-10">
                                    <h2 className="text-gray-800 text-3xl font-bold mb-3">Sign In</h2>
                                    <p className="text-gray-600 text-lg">Enter your credentials to continue</p>
                                </div>

                                <form onSubmit={HandleLoginFormSubmit} className="space-y-6">
                                    <div id="login-error" className="bg-red-50 text-red-600 px-5 py-4 rounded-2xl text-sm border border-red-100 hidden"></div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-700 pl-1 font-medium">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="email" type="email" placeholder="you@example.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-700 pl-1 font-medium">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="password" type={show ? 'text' : 'password'} placeholder="Enter your password" className="w-full pl-12 pr-14 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all" />
                                            <button type="button" onClick={ShowPassword} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                {show ? <Eye></Eye> : <EyeOff></EyeOff>}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-300 text-primary focus:ring-2 focus:ring-primary/20 accent-primary cursor-pointer" />
                                            <span className="text-gray-600">Remember me</span>
                                        </label>
                                        <button type="button" className="text-primary hover:text-primary-light transition-colors">
                                            Forgot password?
                                        </button>
                                    </div>

                                    <button type="submit" className="w-full py-4 bg-primary text-white rounded-2xl hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 font-medium">
                                        Sign In
                                    </button>

                                    <div className="relative py-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="px-4 bg-white text-sm text-gray-500">Or continue with</span>
                                        </div>
                                    </div>

                                    <button type="button" onClick={GoogleSignInHandle} className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all">
                                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                                        <span className="text-gray-700 text-sm font-medium">Continue with Google</span>
                                    </button>
                                </form>

                                <div className="mt-8 text-center">
                                    <span className="text-gray-600">Don't have an account? </span>
                                    <button onClick={() => navigate('/register')} className="text-primary hover:text-primary-light transition-colors font-medium">
                                        Create one now
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button className="text-gray-600 hover:text-primary transition-colors text-sm">
                                    <NavLink to='/'><i className="fas fa-arrow-left mr-2"></i>Back to Home</NavLink>
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