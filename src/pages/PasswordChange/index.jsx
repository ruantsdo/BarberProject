//React 
import React, { useContext, useState } from "react";
import { Button, 
         KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";

const PasswordChange = ({ navigation }) => {
    const {} = useContext(AuthContext)

    const [email, setEmail] = useState("")

    return(
    <ScrollView contentContainerStyle={GS.ScrollContainer} >
    <KeyboardAvoidingView
        style={GS.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <> 
        <TextInput 
            style={GS.textInput}
            color={DefaultTheme.color.tertiary}
            label="Email"
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize="none"
        />
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default PasswordChange