//React
import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, 
        TouchableWithoutFeedback, ScrollView, Image, Keyboard, Platform } from "react-native";

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
import DateTimePicker from '@react-native-community/datetimepicker';


const UserRegister = () => {
    const { resgisterWithEmail, registerError, setRegisterError, setLoginError, 
        setErrorText, pickImage, selectedImage, setSelectedImage, setImageUrl } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")
    
    const [bio, setBio] = useState(null)
    const [city, setCity] = useState("")

    const [warning, setWarning] = useState(<View style={{height:10}} />)
    const [openCalendar, setOpenCalendar] = useState(false)

    const [birth, setBirth] = useState(null)
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDate = (event, selected) => {
        const currentTime = selected || selectedDate;
        setOpenCalendar(false)
        setSelectedDate(currentTime)
        const formattedDate = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`
        setBirth(formattedDate)
    };


    useEffect(()=>{
        setSelectedImage(null)
        setImageUrl(null)
        setLoginError(false)
        setErrorText("")
    }, [])

    function checkPassword() {
        if(password === passwordConfirm){
            setWarning(<Text style={GS.alertText}>As senhas devem ser iguais.</Text>)
        } else {
            setWarning(<View style={{height:10}}/>)
        }
    }

    return(
    <ScrollView contentContainerStyle={GS.ScrollContainer} >
    <KeyboardAvoidingView
        style={GS.innerContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <>  
            <Text style={GS.titleSmall}>Crie sua conta</Text>
            {selectedImage ? (
                <TouchableOpacity onPress={pickImage}>
                    <Image source={{ uri: selectedImage }} style={styles.image} />
                </TouchableOpacity>
            ) : (
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
                label="Nome"
                type="text"
                onChangeText={(text) => setName(text)}
                value={name}
                autoCapitalize="words"
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Fale um pouco sobre você"
                type="text"
                onChangeText={(text) => setBio(text)}
                value={bio}
                multiline
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Email"
                type="email"
                onChangeText={(text) => setEmail(text)}
                onChange={()=> setRegisterError(false)}
                value={email}
                autoCapitalize="none"
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Cidade"
                type="email"
                onChangeText={(text) => setCity(text)}
                onChange={()=> setRegisterError(false)}
                value={city}
                autoCapitalize="words"
            />
            <TextInput 
                showSoftInputOnFocus={false}
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Data de nascimento"
                onPressIn={() => setOpenCalendar(!openCalendar)}
                value={birth}
            />
            {openCalendar && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleDate}
                />
            )}
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Nova senha"
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
                    onPress={() => resgisterWithEmail( name, email, birth, password, bio, city )}
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