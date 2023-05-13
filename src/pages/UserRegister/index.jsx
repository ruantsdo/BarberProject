//React
import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

//Styles
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"

//Contexts
import AuthContext from "../../contexts/auth"

import { auth } from "../../services/firebase";

const UserRegister = () => {
    const { resgisterWithEmail, registerError, setRegisterError ,errorText, setLoginError } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")

    useEffect(()=>{
        setLoginError(false)
    }, [])

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <Text style={styles.title}>Criar uma conta</Text>
            <TextInput 
                style={styles.input}
                placeholder="Informe um email válido"
                type="email"
                onChangeText={(text) => setEmail(text)}
                onChange={()=> setRegisterError(false)}
                value={email}
            />
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite sua nova senha"
                type="text"
                onChangeText={(text) => setPassword(text)}
                onChange={()=> setRegisterError(false)}
                value={password}
            />
            <TextInput 
                style={styles.input}
                placeholder="Digite seu nome de usuário"
                type="text"
                onChangeText={(text) => setDisplayName(text)}
                value={displayName}
            />

            {registerError === true ? 
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons 
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>Erro ao tentar fazer o cadastro.</Text>
                </View>
            :
                <View></View>
            }
            {email === "" || password === "" ? 
                <TouchableOpacity 
                    disabled={true}
                    style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>  
            :
                <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={() => resgisterWithEmail( auth, email, password )}
                >
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>              
            }
            <View style={{height:10}}/>
        </KeyboardAvoidingView>
    )
}

export default UserRegister