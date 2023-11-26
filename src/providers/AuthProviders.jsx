import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const [bookmarkedList, setBookmarkedList] = useState([]);

    // Google Sign in
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
   
    // GitHub Sign in
    const gitHubSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    //  Create User Function
    // ----------------------------------------------------------------
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update User
    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }

    // SignIn User Function
    // ----------------------------------------------------------------
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

     // Display User Using SideEffect 
    // ----------------------------------------------------------------
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // Display User Using SideEffect 
    // ----------------------------------------------------------------
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('Logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    // Data Send to Component
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        googleSignIn,
        logOut,
        bookmarkedList,
        setBookmarkedList,
        gitHubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;