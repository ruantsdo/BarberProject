//React
import React, { createContext, useEffect, useState } from "react";

//Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Firebase
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from '../services/firebase'
import { doc, setDoc } from "firebase/firestore"

//Contexts Calls
const AuthContext = createContext({ signed: true })

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loginError, setLoginError] = useState(false)
    const [registerError, setRegisterError] = useState(false)
    const [signOutError, setSignOutError] = useState(false)
    const [errorText, setErrorText] = useState("")

    useEffect(()=>{
        loadStoragedData()
    }, [])

    async function loadStoragedData(){
        const storagedUser = await AsyncStorage.getItem('@APPAuth:user')

        if(storagedUser){
            setUser(JSON.parse(storagedUser))
            setLoading(false)
        }

        setLoading(false)
    }

    async function signInWithEmail(auth, email , password){
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            AsyncStorage.setItem('@APPAuth:user', JSON.stringify(user))
            setUser(user)  
        })
        .catch((error) => {
            setLoginError(true)
            setErrorText("Erro ao tentar fazer login / Login Error")
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        setLoading(false)   
    }

    async function resgisterWithEmail(auth, email, password, displayName){
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((userCredential) => {
            const user = userCredential.user;
            const uid = user.uid

            AsyncStorage.setItem('@APPAuth:user', JSON.stringify(user))

            writeInDB(uid, email, displayName)

            setUser(user)
        }).catch((error) => {
            setRegisterError(true)
            setErrorText("Erro ao fazer o cadastro / Register Error")
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        setLoading(false)
    }

    async function firebaseSignOut(auth){
        setLoading(true)

        signOut(auth).then(() => {
            AsyncStorage.clear().then(()=>{
                setUser(null)
            })
          }).catch((error) => {
            setSignOutError(true)
            setErrorText("Erro ao fazer logout / Logout Error")
          });

        setLoading(false)
    }

    async function writeInDB(uid, email, displayName){
        await setDoc(doc(db, "users", uid), {
            name: displayName,
            email: email,
          });
    }

    return(
        <AuthContext.Provider 
            value={{ 
                    signed: !!user, 
                    user, 
                    signInWithEmail, 
                    resgisterWithEmail, 
                    firebaseSignOut, 
                    loading, 
                    errorText, 
                    loginError,
                    setLoginError, 
                    registerError,
                    setRegisterError, 
                    signOutError,
                    setSignOutError,
                    writeInDB,
                }}>
            {children}
        </AuthContext.Provider>
    ) 
}

export default AuthContext