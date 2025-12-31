import NavBar from '@/Components/NavBar/NavBar';
import React, { use, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { EyeOff, Eye } from 'lucide-react';
import { AuthContext } from '@/Components/Context/AuthContext/AuthContext';
import { toast, Toaster } from 'sonner';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/FireBase/FireBase.init';
import Footer from '@/Components/Footer/Footer';
const googleProvider = new GoogleAuthProvider();
const RegisterForm = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('Error!!!');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const ShowPassword = () => {
        setShow(!show);
    }
    const { createUser, signInWithGoogle } = use(AuthContext);
    // Google Sign In
    const GoogleSignInHandle = () => {
        signInWithGoogle(auth, googleProvider)
            .then(result => {navigate(location.state || '/') })
            .catch(error => console.log(error));

    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmpassword.value;
        const image = event.target.photo.value;
        const terms = event.target.terms.checked;
        // Password Validation
        var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must have minimum 8 characters in length,at least one uppercase English letter,at least one lowercase English letter,at least one digit,at least one special character");
            return;
        }
        // console.log(email, ' ', name, ' ', password);
        setError('');
        setSuccess(false);
        if (!terms) {
            setError("Please Accept to the Terms of Service and Privacy Policy");
            toast(error);
            return;
        }
        if (password != confirmPassword) {
            toast.error("Passwords didn't match!!!!");
            return;
        }
        // Registering User
        createUser(email, password, name, image)
            .then(() => {
                navigate('/');
                // console.log(res)
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <Toaster position="top-right"></Toaster>
                <div className="min-h-screen bg-linear-to-br from-primary-lightest via-white to-green-50 flex items-center justify-center p-6">
                    <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

                        {/* <!-- Left Side - Form --> */}
                        <div className="w-full">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                                <div className="mb-10">
                                    <h2 className="text-gray-800 text-3xl font-bold mb-3">Create Account</h2>
                                    <p className="text-gray-600 text-lg">Join our green community today</p>
                                </div>

                                <form onSubmit={handleRegister} id="signup-form" className="space-y-5">
                                    <div id="signup-error" className="bg-red-50 text-red-600 px-5 py-4 rounded-2xl text-sm border border-red-100 hidden"></div>
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-700 pl-1 font-medium">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="name" type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all" />
                                        </div>
                                    </div>
                                    {/* Email address */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-700 pl-1 font-medium">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="email" type="email" placeholder="you@example.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all" />
                                        </div>
                                    </div>
                                    {/* PhotoURL */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-700 pl-1 font-medium">
                                            Photo URL <span className="text-gray-400">(Optional)</span>
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-image absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="photo" type="url" placeholder="https://example.com/photo.jpg" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all" />
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-700 pl-1 font-medium">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="password" type={show ? 'text' : 'password'} placeholder="Minimum 6 characters" className="w-full pl-12 pr-14 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all" />
                                            <button type="button" onClick={ShowPassword} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                {show ? <Eye></Eye> : <EyeOff></EyeOff>}
                                            </button>
                                        </div>
                                    </div>
                                    {/* Confirm PassWord */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-700 pl-1 font-medium">
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="confirmpassword" type={show ? 'text' : 'password'} placeholder="Re-enter your password" className="w-full pl-12 pr-14 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all" />
                                            <button type="button" onClick={ShowPassword} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                {show ? <Eye></Eye> : <EyeOff></EyeOff>}
                                            </button>
                                        </div>
                                    </div>
                                    {/* Terms Condition CheckBox */}
                                    <div className="flex items-start gap-3 py-2">
                                        <input type="checkbox" name="terms" className="w-5 h-5 mt-0.5 rounded-lg border-2 border-gray-300 text-primary focus:ring-2 focus:ring-primary/20 accent-primary cursor-pointer" required="" />
                                        <label className="text-sm text-gray-600 cursor-pointer">
                                            I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <button type="submit" className="w-full py-4 bg-primary text-white rounded-2xl hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 font-medium">
                                        Create Account
                                    </button>
                                    <div className="relative py-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="px-4 bg-white text-sm text-gray-500">Or sign up with</span>
                                        </div>
                                    </div>

                                    <button type="button" onClick={GoogleSignInHandle} className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all">
                                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                                        <span className="text-gray-700 text-sm font-medium">Continue with Google</span>
                                    </button>
                                </form>

                                <div className="mt-8 text-center">
                                    <span className="text-gray-600">Already have an account? </span>
                                    <button onClick={() => navigate('/login')} className="text-primary hover:text-primary-light transition-colors font-medium">
                                        Sign in
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button onClick={() => navigate('/')} className="text-gray-600 hover:text-primary transition-colors text-sm">
                                    <i className="fas fa-arrow-left mr-2"></i>Back to Home
                                </button>
                            </div>
                        </div>

                        {/* <!-- Right Side - Branding --> */}
                        <div className="hidden lg:flex flex-col justify-center space-y-8 px-12">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-3">
                                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                                        <i className="fas fa-leaf text-white text-2xl"></i>
                                    </div>
                                    <span className="text-4xl text-primary tracking-tight font-bold">GreenNest</span>
                                </div>
                                <h1 className="text-gray-800 text-5xl font-bold leading-tight">
                                    Start Your Plant<br />Journey Today
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Discover the joy of indoor gardening with personalized care tips, expert advice, and a supportive community.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-100">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <i className="fas fa-check text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h5 className="text-gray-800 font-semibold mb-1">Expert Plant Care</h5>
                                        <p className="text-gray-600 text-sm">Get personalized tips from certified botanists</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-100">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <i className="fas fa-users text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h5 className="text-gray-800 font-semibold mb-1">Growing Community</h5>
                                        <p className="text-gray-600 text-sm">Connect with fellow plant enthusiasts</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-100">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <i className="fas fa-seedling text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h5 className="text-gray-800 font-semibold mb-1">Premium Selection</h5>
                                        <p className="text-gray-600 text-sm">Access 500+ curated plant varieties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RegisterForm;