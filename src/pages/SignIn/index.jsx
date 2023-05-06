import React, { useContext } from "react";
import { Button, View } from "react-native";

import { signIn } from './../../services/auth';
import AuthContext from "../../contexts/auth";

const SignIn = () => {
    const { signed, signIn } = useContext(AuthContext)

    function handleSignIn(){
        signIn()
    }

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Button title="Entrar" onPress={handleSignIn} />
        </View>
    )
}

export default SignIn