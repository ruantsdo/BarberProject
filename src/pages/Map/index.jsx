//React 
import React, { useContext, useState, useEffect } from "react";
import { View, Text, ActivityIndicator, RefreshControl,
        KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";

import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';

// Firebase
import { db } from "../../services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import TargetInHome from '../../components/TargetInHome'


const Maps = ({ navigation }) => {
    const {} = useContext(AuthContext)

    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleGetLocation()
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
            setLocation(location);
        } catch (error) {
            setErrorMsg('Erro ao obter a localização');
            console.log(errorMsg);
        } finally {
            setLoading(false)
        }
    }; 

    const [refreshing, setRefreshing] = useState(false);
    const [targetData, setTargetData] = useState([])

    const fetchTargetData = async () => {
        try {
            const q = query(collection(db, "establishments"));
            const querySnapshot = await getDocs(q);
            const targetsData = [];
            querySnapshot.forEach((doc) => {
                targetsData.push(doc.data());
            });
            setTargetData(targetsData);
        } catch (error) {
            console.error("Erro ao ler dados do Firestore:", error);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
    
        fetchTargetData()
    
        setRefreshing(false);
    };
    
    return(
    <ScrollView contentContainerStyle={GS.ScrollContainer} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
    <KeyboardAvoidingView
        style={GS.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <>
    <View style={styles.mapContainer} >
        { loading ? 
            <View style={styles.mapView}>
                <ActivityIndicator size="large" />
                <Text style={{color:DefaultTheme.color.white}}> Obtendo localização </Text>
            </View>  
        :
            <MapView
                style={styles.mapView}
                zoomControlEnabled
                region={{
                latitude: location?.coords.latitude || -23.545822589523894,
                longitude: location?.coords.longitude || -46.62765349290326,
                latitudeDelta: 0.0,
                longitudeDelta: 0.0,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location?.coords.latitude || -23.545822589523894,
                        longitude: location?.coords.longitude || -46.62765349290326,
                    }}
                    title="Minha Localização"
                    description="Você está aqui!"
                />  
            </MapView> 
        }
    </View>
    <View style={styles.cardsContainer} >
        <TargetInHome targetData={targetData} fetchTargetData={fetchTargetData} />
    </View>
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default Maps