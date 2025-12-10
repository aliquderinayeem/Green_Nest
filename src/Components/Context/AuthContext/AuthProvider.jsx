import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '@/FireBase/FireBase.init';

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //get Current User Info
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log('inside observer if', currentUser)
        } else {
            console.log('inside observer else', currentUser)
        }
    })
    const authInfo = {
        createUser,
        signInWithGoogle,
        signInUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;