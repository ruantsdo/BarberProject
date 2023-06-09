//React 
import React, { useContext, useEffect } from "react";
import { View, Text, Image, 
        KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard } from "react-native";

//Contexts
import AuthContext from "../../contexts/auth";

//Styles
import styles from "./styles"
//import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

import { AppBar, HStack, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    const {firebaseSignOut, user, setErrorText } = useContext(AuthContext)

    useEffect(()=>{
        setErrorText("")
    },[])

    return(
    <ScrollView contentContainerStyle={GS.ScrollContainer} >
    <KeyboardAvoidingView
        style={GS.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <AppBar
        title={"Olá, " + user.name}
        style={styles.header}
        leading={user.photoUrl ? 
            <TouchableWithoutFeedback onPress={() => navigation.navigate("UserProfile")}>
                <Image 
                    source={{ uri: (user.photoUrl) }} 
                    style={styles.profilePhoto} 
                />
            </TouchableWithoutFeedback>
            :
            <IconButton 
                icon={props => <AntDesign name="user" size={32} color="white" />} 
                onPress={() => navigation.navigate("UserProfile")} 
                style={styles.profilePhoto} 
            />
        }
        trailing={props => (
            <HStack>
            <IconButton
                onPress={() => navigation.navigate("Config")}
                icon={props => <Icon name="cog-outline" {...props} />}
                {...props}
            />
            </HStack>
        )}
        />
        <View>
            <Text style={GS.titleMicro} > Atalhos </Text>
                <HStack style={styles.hstack} >
                    <IconButton 
                        icon={props => <Icon name="store-plus-outline" {...props} style={styles.buttonIcon} size={50} />} 
                        onPress={() => navigation.navigate("StoreRegister")} 
                        style={styles.buttonContainer} 
                    />
                    <IconButton 
                        icon={props => <Icon name="cog-outline" {...props} style={styles.buttonIcon} size={50} />} 
                        onPress={() => navigation.navigate("Config")} 
                        style={styles.buttonContainer} 
                    />
                    <IconButton 
                        icon={props => <Icon name="map" {...props} style={styles.buttonIcon} size={50} />} 
                        onPress={() => navigation.navigate("Map")} 
                        style={styles.buttonContainer} 
                    />
                    <IconButton 
                        icon={props => <Icon name="account-edit" {...props} style={styles.buttonIcon} size={50} />} 
                        onPress={() => navigation.navigate("UserProfile")} 
                        style={styles.buttonContainer} 
                    />
                </HStack>
        </View>
        <View style={styles.body}>
            <Text style={GS.titleMicro} > Nas Proximidades </Text>
            <Button onPress={firebaseSignOut} style={{width: '60%', alignSelf: 'center'}} variant="contained" title="Sair" />
        </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default Home
