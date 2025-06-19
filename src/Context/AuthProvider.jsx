import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>
    {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
          const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            //
            if(currentUser?.email)
            {
                const userData={email:currentUser.email};
                axios.post('http://localhost:3000/jwt',userData,{withCredentials:true})
                .then(res=>{
                    console.log('token after jwt',res.data)
                   // const token=res.data.token;
                    //localStorage.setItem('token',token);
                })
                .catch(error=>console.log(error))
            }
            console.log('currentUser',currentUser);
          })
          return()=>{
            unsubscribe();
          }
    },[])
  
    const authInfo={
        createUser,loading,loginUser,setLoading,user,logOut,signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;