//React
import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

//Contexts
import AuthContext from "../../contexts/auth";

//Styles
import styles from './styles'
import { MaterialCommunityIcons } from "@expo/vector-icons"


const SignIn = ({ navigation }) => {
    const { signIn, setUser } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const loginFirebase = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            console.log(user)
        })
        .catch((error) => {
            setError(true)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    useEffect(()=>{

    }, [])

    function handleSignIn(){
        signIn()
    }

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
                value={email}
            />
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
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
                style={styles.buttonLogin}
            >
                <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>  
            :
            <TouchableOpacity 
                style={styles.buttonLogin}
                onPress={loginFirebase}
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
        
        /*
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Button title="Entrar" onPress={handleSignIn} />
                <Button title="Cadastro" onPress={() => navigation.navigate('UserRegister')} />
        </View>
        */
    )
}

export default SignIn