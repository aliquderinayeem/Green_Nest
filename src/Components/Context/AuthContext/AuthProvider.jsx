import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '@/FireBase/FireBase.init';
import { toast } from 'sonner';

const AuthProvider = ({ children }) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password, name, image) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccess(true);
                result && toast("Account Created Successfully");
                result.displayName = name;
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image,
                })
            })
            .catch(error => {
                const errorMessage = error.message || "Registration failed";
                setError(errorMessage);
                error &&
                    toast.error(error.message);
                return;
            }
            );
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                toast("Logged In With Google");
            })
            .catch(error => console.log(error));
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        signOut(auth)
            .then(() => toast.success("Logged Out Successfully"))
            .catch(error => console.log(error))
    }
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signInWithGoogle,
        signInUser,
        signOutUser,
        updateUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;