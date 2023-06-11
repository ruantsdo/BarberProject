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


import MapView from 'react-native-maps'


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
        <MapView
            style={styles.mapView}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
        <Button title="Obter Localização" />
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default Maps