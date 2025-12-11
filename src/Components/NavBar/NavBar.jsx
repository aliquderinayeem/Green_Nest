import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
// import { Toaster, toast } from "sonner"

const NavBar = () => {
    const { user, signOutUser } = use(AuthContext);
    const [expand, setExpand] = useState(false)
    const handleSignOut = () => {
        signOutUser();
    }
    const linksMiddle = <>
        <NavLink className="font-medium text-gray-600 hover:text-primary transition-colors" to='/'>Home</NavLink>
        <NavLink className="font-medium text-gray-600 hover:text-primary transition-colors" to='/Plants'>Plants</NavLink>
        {

            user && <NavLink className="font-medium text-gray-600 hover:text-primary transition-colors" to='/myprofile'>My Profile</NavLink>
        }
    </>
    const linksLeft1 = <>
        <NavLink to='/login' className="px-4 py-2 text-primary hover:bg-primary-light rounded-lg hover:text-white transition-colors">Login</NavLink>
        <NavLink to='/register' className="px-6 py-2 text-primary rounded-lg hover:bg-primary-light hover:text-white transition-colors">Register</NavLink>
    </>
    return (
        <>
            <nav className="sticky top-0 z-40 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <i className="fas fa-leaf text-white text-sm"></i>
                            </div>
                            <NavLink to='/' className="text-primary text-xl font-semibold">GreenNest</NavLink>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            {linksMiddle}
                        </div>
                        {
                            !user ?
                                <div className="md:flex items-center gap-4">
                                    {linksLeft1}
                                </div>
                                :
                                <div className="hidden md:flex items-center gap-4">
                                    <div className="relative">
                                        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => { setExpand(!expand) }}>
                                            <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
                                                <img id="user-avatar" src={user ? user.photoURL : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'} alt="User" className="w-full h-full object-cover" />
                                            </div>
                                            <span id="user-name" className="text-md font-bold text-gray-700">{user ? user.displayName : ''}</span>
                                            <i className="fas fa-chevron-down text-gray-400 text-xs"></i>
                                        </button>
                                        <div className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100 ${!expand ? 'hidden' : ''}`}>
                                            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                                                <NavLink to='/myprofile'>
                                                    <i className="fas fa-user text-sm mr-3"></i>
                                                    My Profile</NavLink>
                                            </button>
                                            <button onClick={handleSignOut} className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2">
                                                <i className="fas fa-sign-out-alt text-sm"></i>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        }


                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                            <i className="fas fa-bars text-gray-700"></i>
                        </button>
                    </div>

                    {/* Mobile Menu 
                    <div id="mobile-menu" className="md:hidden hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col gap-2">
                            <button onclick="showPage('home')" className="px-4 py-2 text-left rounded-lg transition-colors text-primary font-medium">Home</button>
                            <button className="px-4 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">Plants</button>
                            <button className="px-4 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">My Profile</button>

                            <div id="mobile-auth" className="flex flex-col gap-2 mt-2">
                                <button className="px-4 py-2 text-primary hover:bg-primary-lightest rounded-lg transition-colors">Login</button>
                                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors">Register</button>
                            </div>

                            <div id="mobile-user" className="hidden flex-col gap-2 mt-2">
                                <div className="flex items-center gap-3 px-4 py-2">
                                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" alt="User" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Plant Lover</div>
                                        <div className="text-sm text-gray-500">plantlover@example.com</div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">My Profile</button>
                                <button onclick="logout()" className="px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors">Logout</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </nav>
        </>
    );
};

export default NavBar;