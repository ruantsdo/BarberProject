//React
import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

//Styles
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"

//Firebase
import { auth } from "../../services/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

//Contexts
import AuthContext from "../../contexts/auth"

const UserRegister = ({ navigation }) => {
    const { setUser } = useContext(AuthContext)


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [error, setError] = useState(false)

    const register = () =>{
        createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
        })
        .catch((error) => {
            setError(true)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }




    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text style={styles.title}>Criar uma conta</Text>
            <TextInput 
                style={styles.input}
                placeholder="Informe um email válido"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite sua nova senha"
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TextInput 
                style={styles.input}
                placeholder="Digite seu nome de usuário"
                type="text"
                onChangeText={(text) => setDisplayName(text)}
                value={displayName}
            />

            {error === true ? 
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
                    style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>  
            :
                <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={register}
                >
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>              
            }

        </KeyboardAvoidingView>
    )
}

export default UserRegister