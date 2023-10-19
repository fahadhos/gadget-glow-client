import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'


import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


 
    export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {


    const [user,setUser]=useState(null)
    const [loading, setLoading]= useState(true)



const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
}
const signUp =( email,password)=>{

    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
}

const googleprovider = new GoogleAuthProvider()
const signUpGoogle =()=>{

    setLoading(true)
    return signInWithPopup(auth,googleprovider)
}

const logOut =()=>{
    setLoading(true)
    return signOut (auth);
}

useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
       
        setUser(currentUser)
        setLoading(false)
    }) 
    return ()=>{unSubscribe()}

},[])

    const authInfo ={
        user,
    loading,
    signIn,
    signUp,
    logOut,
    signUpGoogle,
    setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;