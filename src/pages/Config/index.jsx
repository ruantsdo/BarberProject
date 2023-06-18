//React 
import React, { useContext, useState } from "react";
import { Text, KeyboardAvoidingView, TouchableWithoutFeedback, 
            ScrollView, Keyboard, TouchableOpacity, Switch } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";

import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Config = ({ navigation }) => {
    const { firebaseSignOut } = useContext(AuthContext)

    const [location, setLocation] = useState(true);
    const [data, setData] = useState(true)

    return(
    <ScrollView contentContainerStyle={GS.ScrollContainer} >
    <KeyboardAvoidingView
        style={GS.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <> 
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("AutenticadedPasswordChange")}>
            <Entypo name="key" size={24} color="black" style={styles.icon} />
            <Text style={styles.text} >Mudar senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setLocation(!location)} >
            <Entypo name="location-pin" size={24} color="black" style={styles.icon} />
            <Text style={styles.text} >Permitir localização</Text>
            <Switch 
                value={location} 
                onValueChange={() => setLocation(!location)} 
                style={styles.switchButton} 
                trackColor={{false: '#767577', true: '#767577'}}
                thumbColor={location ? DefaultTheme.color.positive : "#f4f3f4"}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setData(!data)} >
            <MaterialIcons name="signal-cellular-alt" size={24} color="black" style={styles.icon} />
            <Text style={styles.text} >Permitir uso de dados</Text>
            <Switch 
                value={data} 
                onValueChange={() => setData(!data)} 
                style={styles.switchButton} 
                trackColor={{false: '#767577', true: '#767577'}}
                thumbColor={data ? DefaultTheme.color.positive : "#f4f3f4"}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={firebaseSignOut}>
            <Entypo name="log-out" size={24} color="black" style={styles.icon}/>
            <Text style={styles.text} >Sair</Text>
        </TouchableOpacity>
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default Config