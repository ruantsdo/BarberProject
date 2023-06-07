//React
import React, { useContext, useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, KeyboardAvoidingView, 
        Platform, TouchableWithoutFeedback, ScrollView, Button, Image } from "react-native";

//Styles
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons';
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from '../../styles/global.styles'

// Material UI
import { TextInput } from "@react-native-material/core"

//Contexts
import AuthContext from "../../contexts/auth"

// Date Picker
import DatePicker from "react-native-modern-datepicker";

// Image Picker
import * as ImagePicker from 'expo-image-picker';


const UserRegister = () => {
    const { resgisterWithEmail, registerError, setRegisterError, setLoginError, 
        setErrorText, pickImage, selectedImage } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")
    const [birth, setBirth] = useState("")

    const [warning, setWarning] = useState(<View style={{height:10}} />)
    const [openCalendar, setOpenCalendar] = useState(false)


    useEffect(()=>{
        setErrorText("")
        setLoginError(false)
    }, [])

    function checkPassword() {
        if(password === passwordConfirm){
            setWarning(<Text style={GS.alertText}>As senhas devem ser iguais.</Text>)
        } else {
            setWarning(<View style={{height:10}}/>)
        }
    }

    
    //{imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />}
    return(
        <ScrollView contentContainerStyle={GS.ScrollContainer}>
        <KeyboardAvoidingView 
            style={GS.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss}}>
        <>
            <Text style={GS.titleSmall}>Crie sua conta</Text>
            {selectedImage ? (
                // Renderiza a imagem selecionada se ela estiver disponível
                <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100 }} />
            ) : (
                // Renderiza o ícone se nenhuma imagem estiver selecionada
                <TouchableOpacity onPress={pickImage}>
                <MaterialIcons 
                    name="add-a-photo"
                    size={64}
                    color={DefaultTheme.color.gray}
                />
                </TouchableOpacity>
            )}
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Digite seu nome"
                type="text"
                onChangeText={(text) => setName(text)}
                value={name}
                autoCapitalize="words"
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Informe seu email"
                type="email"
                onChangeText={(text) => setEmail(text)}
                onChange={()=> setRegisterError(false)}
                value={email}
                autoCapitalize="none"
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
                onChangeText={(text) => {setPassword(text) ; checkPassword()}}
                onChange={()=> setRegisterError(false)}
                value={password}
                autoCapitalize="none"
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Confirme a senha"
                secureTextEntry={true}
                type="text"
                onChangeText={(text) => {setPasswordConfirm(text) ; checkPassword()}}
                onChange={()=> setRegisterError(false)}
                value={passwordConfirm}
                autoCapitalize="none"
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
            {warning}
            {name === "" || email === "" || birth === "" || password === "" || passwordConfirm === "" && password === passwordConfirm ? 
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
        </>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default UserRegister