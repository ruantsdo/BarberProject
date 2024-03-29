//React 
import React, { useContext, useEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView, Modal, TouchableOpacity, 
        ScrollView, Keyboard, TouchableWithoutFeedback, Platform, Image } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";
import { TextInput } from "@react-native-material/core";


//Contexts
import AuthContext from "../../contexts/auth";
import { MaterialIcons } from '@expo/vector-icons';

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons"

import DateTimePicker from '@react-native-community/datetimepicker'

const StoreRegister = ({ }) => {
    const { writeStoreInDB, pickImage, selectedImage, setSelectedImage, setImageUrl } = useContext(AuthContext)

    useEffect(()=>{
        setSelectedImage(null)
        setImageUrl(null)
    }, [])

    const [name, setName] = useState(null)
    const [address, setAddress] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [site, setSite] = useState(null)
    const [desc, setDesc] = useState(null)

    const [type, setType] = useState(null)
    const [show, setShow] = useState(false)
    
    const [warningMenssage, setWarningMenssage] = useState(false)

    const [opens, setOpens] = useState(null)
    const [selectedOpens, setSelectedOpens] = useState(new Date());
    const [showOpens, setShowOpens] = useState(false)

    const [closes, setCloses] = useState(null)
    const [selectedCloses, setSelectedCloses] = useState(new Date());
    const [showCloses, setShowCloses] = useState(false)
  
    const handleOpens = (event, selected) => {
        const currentTime = selected || selectedOpens;
        setShowOpens(false);
        setSelectedOpens(currentTime);
        const formattedTime = currentTime.toISOString().split('T')[1].split('.')[0];
        const timeWithoutSeconds = formattedTime.slice(0, -3);
        setOpens(timeWithoutSeconds)
    };

    const handleCloses = (event, selected) => {
        const currentTime = selected || selectedCloses;
        setShowCloses(false);
        setSelectedCloses(currentTime);
        const formattedTime = currentTime.toISOString().split('T')[1].split('.')[0];
        const timeWithoutSeconds = formattedTime.slice(0, -3);
        setCloses(timeWithoutSeconds)
    };


    return(
    <ScrollView contentContainerStyle={styles.ScrollContainer} >
    <KeyboardAvoidingView
        style={GS.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss ; setShow(false) }}>
    <>
            <Text style={styles.title}>Insira os dados do seu estabelecimento</Text>
            {selectedImage ? (
                <TouchableOpacity style={styles.imageContainer} onPress={pickImage} >
                    <Image source={{ uri: selectedImage }} style={styles.image} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.imageContainer} onPress={pickImage} >
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
                label="Nome do estabelecimento*"
                type="text"
                onChangeText={(text) => { setName(text) ; setWarningMenssage(false)}}
                value={name}
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Endereço*"
                type="text"
                onChangeText={(text) => { setAddress(text) ; setWarningMenssage(false)}}
                value={address}
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Email do estabelecimento"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Telefone*"
                keyboardType="numeric"
                onChangeText={(text) => {setPhone(text) ; setWarningMenssage(false)}}
                value={phone}
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Site"
                type="text"
                onChangeText={(text) => setSite(text)}
                value={site}
                autoCapitalize="none"
            />
            <TextInput 
                showSoftInputOnFocus={false}
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Tipo do estabelecimento*"
                onPressOut={() => {setShow(true) ; setWarningMenssage(false)}}
                value={type}
            />
            <Modal
                animationType='slide'
                transparent={true}
                visible={show}
            >
                <View style={GS.modalContainer}>
                    <View style={GS.modalView}>
                        <TouchableOpacity
                            style={styles.option} 
                            onPress={() => {setType("Barbearia"); setShow(false)}}
                        >
                            <Text>Barbearia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.option} 
                            onPress={() => {setType("Salão"); setShow(false)}}
                        >
                            <Text>Salão</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.option} 
                            onPress={() => {setType("Pet Shop"); setShow(false)}}
                        >
                            <Text>Pet Shop</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setShow(false)} style={{marginTop: 15}}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.timeConteiner}>
                <TextInput 
                    showSoftInputOnFocus={false}
                    style={styles.timeInput}
                    color={DefaultTheme.color.tertiary}
                    label="Abre as*"
                    type="text"
                    onPressOut={() => {setShowOpens(true)}}
                    value={opens}
                />
                {showOpens && (
                    <DateTimePicker
                        value={selectedOpens}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleOpens}
                    />
                )}
                <TextInput 
                    showSoftInputOnFocus={false}
                    style={styles.timeInput}
                    color={DefaultTheme.color.tertiary}
                    label="Fecha as*"
                    type="text"
                    onPressOut={() => {setShowCloses(!showCloses)}}
                    value={closes}
                />
                {showCloses && (
                    <DateTimePicker
                        value={selectedCloses}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleCloses}
                    />
                )}
            </View>
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Descrição do estabelecimento"
                type="text"
                onChangeText={(text) => setDesc(text)}
                value={desc}
                multiline
            />
            {warningMenssage ? 
            <View style={GS.alertContainer}>
                <MaterialCommunityIcons 
                    name="alert-circle"
                    size={24}
                    color={DefaultTheme.color.gray}
                />
                <Text style={GS.alertText}>Todos os campos com "*" são obrigatórios</Text>
            </View>
            :
            <View />
            }
            {name === null || address === null || phone === null || type === null || opens === null || closes === null ?
                <TouchableOpacity 
                    title="Cadastrar" 
                    style={GS.button} 
                    onPress={() => setWarningMenssage(true)} >
                        <Text style={GS.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity 
                    title="Cadastrar" 
                    style={GS.button} 
                    onPress={() => writeStoreInDB( name, address, email, phone, site, type, desc, opens, closes)} >
                        <Text style={GS.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            }
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default StoreRegister