//React 
import React, { useContext, useEffect } from "react";
import { View, Button, Text } from "react-native";

//Contexts
import AuthContext from "../../contexts/auth";

//Firebase
import { auth } from "../../services/firebase";

const Home = () => {
    const {firebaseSignOut, user} = useContext(AuthContext)

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Logado como: {user?.uid}</Text>
            <Text>Email: {user?.email}</Text>
            <Button title="Sair" onPress={() => firebaseSignOut(auth)} />
        </View>
    )
}

export default Home