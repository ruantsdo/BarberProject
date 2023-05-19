//React 
import React, { useContext, useEffect } from "react";
import { View, Button, Text } from "react-native";

//Contexts
import AuthContext from "../../contexts/auth";

//Firebase


const Home = () => {
    const {firebaseSignOut, user, setErrorText } = useContext(AuthContext)

    useEffect(()=>{
        setErrorText("")
    },[])

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Logado como: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
            <Button title="Sair" onPress={() => firebaseSignOut()} />
        </View>
    )
}

export default Home