/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext } from "react";
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from './firebase'
export const AuthContext = createContext();

const googleprovider = new GoogleAuthProvider();
const FirebaseProvider = ({ children }) => {
    const auth = getAuth(app)

    // googleuser 100%
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleprovider);
    };

    // creatuser
    const creatUser=( email,password)=>{
        createUserWithEmailAndPassword(auth, email,password)
    }

    // emailleuser100%
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };






    const allvalue = {
        signInWithGoogle,
        creatUser,
        signInWithEmail
    }



    return (
        <AuthContext.Provider value={allvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;