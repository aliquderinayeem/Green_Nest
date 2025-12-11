import { AuthContext } from '@/Components/Context/AuthContext/AuthContext';
import Footer from '@/Components/Footer/Footer';
import NavBar from '@/Components/NavBar/NavBar';
import { SpinnerNew } from '@/Components/Spinner/SpinnerNew';
import React, { use, useState } from 'react';

const MyProfile = () => {
    const [open, setOpen] = useState(false);
    const { user, updateUser } = use(AuthContext);
    //  const [loading, setLoading] = useState(false);
    const handleProfileChange = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const url = event.target.photo.value;
        
        // setLoading(true);
        
        try {
            // Pass parameters separately, not as an object
            const success = await updateUser(name, url);
            if (success) {
                setOpen(false);
                // Optionally reset form
                event.target.reset();
            }
        } catch (error) {
            console.error("Update failed:", error);
        } finally {
            // setLoading(false);
        }
    }
    if (user)
        return (
            <>
                <NavBar></NavBar>
                <div className="min-h-screen bg-linear-to-b from-primary-lightest to-white py-12 px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
                            {/* <!-- Header --> */}
                            <div className="bg-linear-to-r from-primary to-primary-light h-32"></div>
                            {/* <!-- Profile Content --> */}
                            <div className="px-8 pb-8">
                                {/* <!-- Avatar --> */}
                                <div className="relative -mt-16 mb-6">
                                    <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                                        <div id="profile-avatar" className="w-full h-full rounded-full bg-primary-light overflow-hidden flex items-center justify-center">
                                            <img src={user ? user.photoURL : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'} alt="User" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    {/* <button className="absolute bottom-2 right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-light transition-colors shadow-lg">
                                        <i className="fas fa-camera"></i>
                                    </button> */}
                                </div>

                                {/* <!-- View Mode --> */}
                                <div>
                                    <div className="mb-6">
                                        <h2 id="profile-name" className="text-gray-800 text-2xl font-bold mb-1">{user ? user.displayName : ''}</h2>
                                        <p id="profile-email" className="text-gray-600">{user ? user.email : ''}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-primary-lightest p-4 rounded-lg">
                                            <div className="text-sm text-gray-600 mb-1">Member Since</div>
                                            <div className="text-gray-800 font-medium"> {user.metadata.creationTime}</div>
                                        </div>
                                        <div className="bg-primary-lightest p-4 rounded-lg">
                                            <div className="text-sm text-gray-600 mb-1">Plants Owned</div>
                                            <div className="text-gray-800 font-medium">12 Plants</div>
                                        </div>
                                        <div className="bg-primary-lightest p-4 rounded-lg">
                                            <div className="text-sm text-gray-600 mb-1">Total Purchases</div>
                                            <div className="text-gray-800 font-medium">$345.67</div>
                                        </div>
                                        <div className="bg-primary-lightest p-4 rounded-lg">
                                            <div className="text-sm text-gray-600 mb-1">Consultations</div>
                                            <div className="text-gray-800 font-medium">3 Booked</div>
                                        </div>
                                    </div>

                                    <button onClick={() => { setOpen(!open) }} className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors">
                                        Edit Profile
                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Edit Mode --> */}
                        <div className={`bg-white rounded-lg shadow-lg overflow-hidden pb-8 px-8 pt-0  ${!open ? 'hidden' : ''}`}>
                            <div id="profile-edit" className={`mt-12`}>
                                <h3 className="text-gray-800 text-xl font-bold mb-6">Edit Profile</h3>

                                <form onSubmit={handleProfileChange} className="space-y-5">
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input type="text" name="name" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* <div>
                                        <label className="block text-gray-700 mb-2 font-medium">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="email" type="email" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                                        </div>
                                    </div> */}

                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">
                                            Photo URL
                                        </label>
                                        <div className="relative">
                                            <i className="fas fa-image absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input name="photo" type="url" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button type="submit" className="flex-1 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center gap-2">
                                            <i className="fas fa-save"></i>
                                            Save Changes
                                        </button>
                                        <button type="button" className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors" onClick={()=>setOpen(!open)}>
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Recent Activity --> */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
                            <h4 className="text-gray-800 text-xl font-bold mb-6">Recent Activity</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <div>
                                        <div className="text-gray-800 font-medium">Purchased Monstera Deliciosa</div>
                                        <div className="text-sm text-gray-500">Nov 28, 2025</div>
                                    </div>
                                    <div className="text-primary font-medium">$45.99</div>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <div>
                                        <div className="text-gray-800 font-medium">Booked consultation with Sarah Martinez</div>
                                        <div className="text-sm text-gray-500">Nov 25, 2025</div>
                                    </div>
                                    <div className="text-gray-500">-</div>
                                </div>
                                <div className="flex items-center justify-between py-3">
                                    <div>
                                        <div className="text-gray-800 font-medium">Purchased Succulent Collection</div>
                                        <div className="text-sm text-gray-500">Nov 20, 2025</div>
                                    </div>
                                    <div className="text-primary font-medium">$24.99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    else
        return (
            <><SpinnerNew></SpinnerNew></>
        )
};

export default MyProfile;