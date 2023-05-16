//React 
import React, { useContext, useEffect } from "react";
import { View, Button, Text } from "react-native";

//Contexts
import AuthContext from "../../contexts/auth";

//Firebase
import { auth } from "../../services/firebase";

const Home = () => {
    const {firebaseSignOut, user, token, handleUserData } = useContext(AuthContext)

    useEffect(()=>{
        console.log("Entrou na HOME")
        console.log("Token UID: ", token.uid)

        handleUserData()
    },[])

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Logado como: {token?.uid}</Text>
            <Text>Email: {token?.email}</Text>
            <Button title="Sair" onPress={() => firebaseSignOut(auth)} />
        </View>
    )
}

export default Home