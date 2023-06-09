//React 
import React, { useContext } from "react";
import { View, Button, Text,
        KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";

const Maps = ({ navigation }) => {
    const {} = useContext(AuthContext)

    return(
    <ScrollView contentContainerStyle={GS.ScrollContainer} >
    <KeyboardAvoidingView
    style={GS.container}
    behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <>
        <Text>Está na página de Maps</Text>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default Maps