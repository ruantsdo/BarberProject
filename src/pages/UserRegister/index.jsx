//React
import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

//Styles
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"

//Contexts
import AuthContext from "../../contexts/auth"

const UserRegister = () => {
    const { resgisterWithEmail, registerError, setRegisterError, setLoginError, setErrorText } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")
    const [birth, setBirth] = useState("")
    const [passwordCheck, setPasswordCheck] = useState(true)

    useEffect(()=>{
        setErrorText("")
        setLoginError(false)
    }, [])

    useEffect(()=>{
        if(password === passwordConfirm){
            setPasswordCheck(true)
        } else {
            setPasswordCheck(false)
        }
    },[password, passwordConfirm])

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <Text style={styles.title}>Criar uma conta</Text>
            <TextInput 
                style={styles.input}
                placeholder="Digite seu nome"
                type="text"
                onChangeText={(text) => setName(text)}
                value={name}
            />
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
                placeholder="Data de nascimento"
                type="text"
                onChangeText={(text) => setBirth(text)}
                value={birth}
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
                secureTextEntry={true}
                placeholder="Confirme a senha"
                type="text"
                onChangeText={(text) => setPasswordConfirm(text)}
                onChange={()=> setRegisterError(false)}
                value={passwordConfirm}
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
            {passwordCheck === false ?
                <Text style={styles.warningAlert}>As senhas devem ser iguais.</Text> 
                :
                <View style={{height:10}}/>
            }
            {name === "" || email === "" || birth === "" || password === "" || passwordConfirm === "" && passwordCheck === true ? 
                <TouchableOpacity 
                    disabled={true}
                    style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>  
            :
                <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={() => resgisterWithEmail( name, email, birth, password )}
                >
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>              
            }
            <View style={{height:10}}/>
        </KeyboardAvoidingView>
    )
}

export default UserRegister