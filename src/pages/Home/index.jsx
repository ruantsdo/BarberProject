//React 
import React, { useContext, useEffect } from "react";
import { View, Text, Image } from "react-native";

//Contexts
import AuthContext from "../../contexts/auth";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

import { AppBar, HStack, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Home = ({ navigation }) => {
    const {firebaseSignOut, user, setErrorText, setSelectedImage } = useContext(AuthContext)

    useEffect(()=>{
        setErrorText("")
    },[])

    return(
    <View style={styles.container}>
        <AppBar
        title={"Olá, " + user.name}
        style={styles.header}
        leading={props => (
            <IconButton 
                onPress={() => navigation.navigate("UserProfile")} 
                style={styles.profilePhoto} 
                icon={props => <Icon name="image" {...props} />} {...props} 
            />
        )}
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
        <Image source={{ uri: user.photoUrl }} style={{ width: 100, height: 100 }} />
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
            <Button onPress={firebaseSignOut} variant="contained" title="Sair" />
        </View>
    </View>
    )
}

export default Home