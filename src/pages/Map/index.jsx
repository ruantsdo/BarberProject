//React 
import React, { useContext, useState, useEffect } from "react";
import { View, Button, Text,
        KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";


import MapView from 'react-native-maps'
import * as Location from 'expo-location';


const Maps = ({ navigation }) => {
    const {} = useContext(AuthContext)

    const [location, setLocation] = useState(null);
    
    const handleGetLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permissão para acessar a localização foi negada');
            return;
        }

        try {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        } catch (error) {
            setErrorMsg('Erro ao obter a localização');
            console.log(error);
        }
    };


    function exibir(){
        console.log(location)
        //console.log("Latitude: ", location.coords.latitude)
        //console.log("Longitude: ", location.coords.longitude)
    }
    
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
        <Button title="Obter Localização" onPress={handleGetLocation} />
        <Button title="Exibir" onPress={() => exibir()} />
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default Maps