//React 
import React, { useContext, useState } from "react";
import { Text, KeyboardAvoidingView, TouchableWithoutFeedback, 
            ScrollView, Keyboard, TouchableOpacity, View, Switch } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";

import { Entypo, FontAwesome5 } from '@expo/vector-icons';

const Config = ({ navigation }) => {
    const {} = useContext(AuthContext)

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
        <TouchableOpacity style={styles.buttonContainer}>
            <Entypo name="key" size={24} color="black" />
            <Text>Mudar senha</Text>
            <View style={{width:90}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setLocation(!location)} >
            <Entypo name="location-pin" size={24} color="black" />
            <Text>Permitir localização</Text>
            <Switch 
                value={location} 
                onValueChange={() => setLocation(!location)} 
                style={styles.switchButton} 
                trackColor={{false: '#767577', true: '#767577'}}
                thumbColor={location ? DefaultTheme.color.positive : "#f4f3f4"}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setData(!data)} >
            <FontAwesome5 name="signal" size={24} color="black" />
            <Text>Permitir uso de dados</Text>
            <Switch 
                value={data} 
                onValueChange={() => setData(!data)} 
                style={styles.switchButton} 
                trackColor={{false: '#767577', true: '#767577'}}
                thumbColor={data ? DefaultTheme.color.positive : "#f4f3f4"}
            />
        </TouchableOpacity>
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default Config