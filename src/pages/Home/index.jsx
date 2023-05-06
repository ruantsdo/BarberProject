import React, { useContext } from "react";
import { View, Button, Text } from "react-native";
import AuthContext from "../../contexts/auth";

const Home = () => {
    const {signOut, user} = useContext(AuthContext)


    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Logado como: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
            <Button title="Sair" onPress={signOut} />
        </View>
    )
}

export default Home