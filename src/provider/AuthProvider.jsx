import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [loading, setLoading]= useState(true)
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    // Register user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn user
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authData = {
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
    }
    return (
        <AuthContext  value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;