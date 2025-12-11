import { AuthContext } from '@/Components/Context/AuthContext/AuthContext';
import { SpinnerNew } from '@/Components/Spinner/SpinnerNew';
import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    const location=useLocation();
    // console.log(location);
    if(loading){
        return <SpinnerNew></SpinnerNew>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;