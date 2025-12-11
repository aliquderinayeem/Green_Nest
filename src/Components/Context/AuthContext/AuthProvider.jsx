import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '@/FireBase/FireBase.init';
import { toast } from 'sonner';

const AuthProvider = ({ children }) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
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
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                if (result.user) {
                    toast.success("Logged In With Google");
                } else {
                    return;
                }
            })
            .catch(error => console.log(error));
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(() => toast.success("Logged In Successfully"))
            .catch(error => console.log(error));
    }
    const signOutUser = () => {
        setLoading(true);
        signOut(auth)
            .then(() => toast.success("Logged Out Successfully"))
            .catch(error => console.log(error))
    }
    // const updateUser = (name, photo) => {
    //     console.log(auth.currentUser)
    //     return updateProfile(auth.currentUser, { displayName:name, photoURL:photo });
    // }
    const updateUser = async (displayName, photoURL) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName,
                photoURL
            });

            // Update local user state to trigger re-render
            setUser({ ...auth.currentUser, displayName, photoURL });
            toast.success("Profile updated successfully");
            return true;
        } catch (error) {
            console.error("Update error:", error);
            toast.error(error.message || "Failed to update profile");
            return false;
        }
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password Reset Mail Sent Successfully")
            })
            .catch((error) => {
                toast.error("Something Error Happened")
            });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signInWithGoogle,
        signInUser,
        signOutUser,
        updateUser,
        resetPassword,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;