import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from "../services/auth";

const AuthContext = createContext({signed:true})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadStoragedData(){
            const storagedUser = await AsyncStorage.getItem('@APPAuth:user')
            const storagedToken = await AsyncStorage.getItem('@APPAuth:token')

            if(storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser))
                setLoading(false)
            }
        }

        setLoading(false)
        loadStoragedData()
    }, [])

    async function signIn(){
       setLoading(true)

       const response = await auth.signIn()

       setUser(response.user)

       await AsyncStorage.setItem('@APPAuth:user', JSON.stringify(response.user))
       await AsyncStorage.setItem('@APPAuth:token', response.token)

       setLoading(false)
    }

    function signOut(){
        setLoading(true)

        AsyncStorage.clear().then(()=>{
            setUser(null)
        })

        setLoading(false)
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, loading}}>
            {children}
        </AuthContext.Provider>
    ) 
}

export default AuthContext