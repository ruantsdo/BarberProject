//React 
import React, { useContext, useState } from "react";
import { View, Button, Text, 
        KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard, TouchableOpacity  } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";

// Material UI
import { TextInput } from "@react-native-material/core"

const AutenticadedPasswordChange = ({ navigation }) => {
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
        <TouchableOpacity style={GS.button}>
            <Text style={GS.textButton} >Alterar Senha</Text>
        </TouchableOpacity>
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default AutenticadedPasswordChange