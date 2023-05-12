//React
import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

//Contexts
import AuthContext from "../../contexts/auth";

//Styles
import styles from './styles'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { auth } from "../../services/firebase";


const SignIn = ({ navigation }) => {
    const { signInWithEmail, loginError, setLoginError ,errorText, setRegisterError } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        setRegisterError(false)
    }, [])

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <Text style={styles.title}>BarberApp</Text>
            <TextInput 
                style={styles.input}
                placeholder="Email"
                type="text"
                onChangeText={(text) => setEmail(text)}
                onChange={()=> setLoginError(false)}
                value={email}
            />
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
                type="text"
                onChangeText={(text) => setPassword(text)}
                onChange={()=> setLoginError(false)}
                value={password}
            />
            {loginError === true ? 
            <View style={styles.contentAlert}>
                <MaterialCommunityIcons 
                    name="alert-circle"
                    size={24}
                    color="#bdbdbd"
                />
                <Text style={styles.warningAlert}>Email ou Senha Inválidos</Text>
            </View>
            :
                <View></View>
            }
            {email === "" || password === "" ? 
            <TouchableOpacity 
                disabled={true}
                style={styles.buttonLogin}
            >
                <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>  
            :
            <TouchableOpacity 
                style={styles.buttonLogin}
                onPress={() => signInWithEmail(auth, email, password)}
            >
                <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>              
            }
            <Text style={styles.registration}>
                Ainda não tem uma conta?
                <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("UserRegister")}>
                Cadastre-se
                </Text>
            </Text>
            <View style={{height:10}}/>
        </KeyboardAvoidingView>   
    )
}

export default SignIn