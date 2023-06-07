//React
import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from "react-native";

//Contexts
import AuthContext from "../../contexts/auth";

//Styles
import styles from './styles'
import { DefaultTheme } from "../../themes/colors&sizes.theme"
import { GS } from '../../styles/global.styles'

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons"

// Material UI
import { TextInput } from "@react-native-material/core"


const SignIn = ({ navigation }) => {
    const { signInWithEmail, loginError, setLoginError, setRegisterError, setErrorText, setSelectedImage, setImageUrl } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        setSelectedImage(null)
        setImageUrl(null)
        setRegisterError(false)
        setErrorText("")  
    }, [])

    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={GS.container}
        >
            <View style={styles.imgContainer}>
                <Image 
                    style={styles.img}
                    source={require('../../../assets/imgs/login-logo.png')}
                />
            </View>

            <Text style={GS.titleBig}>BarberApp</Text>
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Email"
                type="text"
                onChangeText={(text) => setEmail(text)}
                onChange={()=> setLoginError(false)}
                value={email}
                autoCapitalize="none"
            />
            <TextInput 
                style={GS.textInput}
                secureTextEntry={true}
                label="Senha"
                color={DefaultTheme.color.tertiary}
                type="text"
                onChangeText={(text) => setPassword(text)}
                onChange={()=> setLoginError(false)}
                value={password}
                autoCapitalize="none"
            />
            {loginError === true ? 
            <View style={GS.alertContainer}>
                <MaterialCommunityIcons 
                    name="alert-circle"
                    size={24}
                    color={DefaultTheme.color.gray}
                />
                <Text style={GS.alertText}>Email ou Senha Inválidos</Text>
            </View>
            :
            <View />
            }
            {email === "" || password === "" ? 
            <TouchableOpacity 
                disabled={true}
                style={GS.button}
            >
                <Text style={GS.textButton}>Entrar</Text>
            </TouchableOpacity>  
            :
            <TouchableOpacity 
                style={GS.button}
                onPress={() => signInWithEmail(email, password)}
            >
                <Text style={GS.textButton}>Entrar</Text>
            </TouchableOpacity>              
            }
            <Text style={styles.registration}>
                Ainda não tem uma conta?   
            </Text>
            <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("UserRegister")}>
                Cadastre-se
            </Text>
            <View style={{height:10}}/>
        </KeyboardAvoidingView >   
    )
}

export default SignIn