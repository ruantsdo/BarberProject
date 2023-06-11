//React 
<<<<<<< Updated upstream
import React, { useContext } from "react";
import { View, Button, Text,
=======
import React, { useContext, useState, useEffect } from "react";
import { View, Button, Text, ActivityIndicator,
>>>>>>> Stashed changes
        KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";


<<<<<<< Updated upstream
import MapView from 'react-native-maps'
=======
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';
>>>>>>> Stashed changes


const Maps = ({ navigation }) => {
    const {} = useContext(AuthContext)

<<<<<<< Updated upstream
=======
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleGetLocation()
        .then((location) => {
            setLocation(location)
            setLoading(false)
        })
    }, [])
    
    const handleGetLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permissão para acessar a localização foi negada');
            setLoading(false)
            return;
        }

        try {
            let location = await Location.getCurrentPositionAsync({});
            return location;
        } catch (error) {
            setErrorMsg('Erro ao obter a localização');
            console.log(errorMsg);
        } finally {
            setLoading(false)
        }
    };
    
>>>>>>> Stashed changes
    return(
    <ScrollView contentContainerStyle={GS.ScrollContainer} >
    <KeyboardAvoidingView
        style={GS.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <>
    {/*{   loading ? 
        <View style={styles.mapView}>
            <ActivityIndicator size="large" />
            <Text style={{color:DefaultTheme.color.white}}> Obtendo localização </Text>
        </View>  
    :
        <MapView
            style={styles.mapView}
            region={{
            latitude: location.coords.latitude || -23.545822589523894,
            longitude: location.coords.longitude || -46.62765349290326,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
            }}
        >
             <Marker
                coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                }}
                title="Minha Localização"
                description="Você está aqui!"
            />
        </MapView>
    }*/}
    <MapView
       style={styles.mapView}
       region={{
         latitude: -23.545822589523894,
         longitude: -46.62765349290326,
         latitudeDelta: 0.0,
         longitudeDelta: 0.0,
       }}
    >
        <Marker
            coordinate={{
                latitude: -23.545822589523894,
                longitude: -46.62765349290326,
            }}
            title="Minha Localização"
            description="Você está aqui!"
        />
<<<<<<< Updated upstream
        <Button title="Obter Localização" />
=======
    </MapView>
>>>>>>> Stashed changes
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default Maps