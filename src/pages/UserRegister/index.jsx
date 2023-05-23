//React
import React, { useContext, useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

//Styles
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from '../../styles/global.styles'

// Material UI
import { TextInput } from "@react-native-material/core"

//Contexts
import AuthContext from "../../contexts/auth"

// Date Picker
import DatePicker from "react-native-modern-datepicker";

const UserRegister = () => {
    const { resgisterWithEmail, registerError, setRegisterError, setLoginError, setErrorText } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")
    const [birth, setBirth] = useState("")
    const [passwordCheck, setPasswordCheck] = useState(true)

    const [openCalendar, setOpenCalendar] = useState(false)

    useEffect(()=>{
        setErrorText("")
        setLoginError(false)
    }, [])

    useEffect(()=>{
        if(password ==! passwordConfirm){
            setPasswordCheck(!passwordCheck)
        }
    },[password, passwordConfirm])

    return(
        <KeyboardAvoidingView 
            style={GS.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text style={GS.titleSmall}>Crie sua conta</Text>
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Digite seu nome"
                type="text"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Informe seu email"
                type="email"
                onChangeText={(text) => setEmail(text)}
                onChange={()=> setRegisterError(false)}
                value={email}
            />
            <TextInput 
                showSoftInputOnFocus={false}
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Data de nascimento"
                onPressIn={() => setOpenCalendar(!openCalendar)}
                value={birth}
            />
            <Modal
                animationType='slide'
                transparent={true}
                visible={openCalendar}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker 
                            mode='calendar'
                            date={birth}
                            onDateChange={(date) => setBirth(date)}
                            locale="de"
                        />
                        <TouchableOpacity onPress={() => setOpenCalendar(!openCalendar)}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Digite sua nova senha"
                secureTextEntry={true}
                type="text"
                onChangeText={(text) => setPassword(text)}
                onChange={()=> setRegisterError(false)}
                value={password}
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Confirme a senha"
                type="text"
                onChangeText={(text) => setPasswordConfirm(text)}
                onChange={()=> setRegisterError(false)}
                value={passwordConfirm}
            />
            {registerError === true ? 
                <View style={GS.alertContainer}>
                    <MaterialCommunityIcons 
                        name="alert-circle"
                        size={24}
                        color={DefaultTheme.color.gray}
                    />
                    <Text style={GS.alertText}>Erro ao tentar fazer o cadastro.</Text>
                </View>
            :
                <View />
            }
            {passwordCheck === false ?
                <Text style={GS.alertText}>As senhas devem ser iguais.</Text> 
                :
                <View style={{height:10}}/>
            }
            {name === "" || email === "" || birth === "" || password === "" || passwordConfirm === "" && passwordCheck === true ? 
                <TouchableOpacity 
                    disabled={true}
                    style={GS.button}
                >
                    <Text style={GS.textButton}>Cadastrar</Text>
                </TouchableOpacity>  
            :
                <TouchableOpacity 
                    style={GS.button}
                    onPress={() => resgisterWithEmail( name, email, birth, password )}
                >
                    <Text style={GS.textButton}>Cadastrar</Text>
                </TouchableOpacity>              
            }  
            <View style={{height:10}}/>
        </KeyboardAvoidingView>
    )
}

export default UserRegister