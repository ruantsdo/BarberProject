//React 
import React, { useContext, useState } from "react";
import { View, Text, KeyboardAvoidingView, Modal, TouchableOpacity, 
        ScrollView, Keyboard, TouchableWithoutFeedback, Platform } from "react-native";

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

const StoreRegister = ({ }) => {
    const { writeStoreInDB } = useContext(AuthContext)

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [site, setSite] = useState("")
    const [type, setType] = useState("")
    const [desc, setDesc] = useState("")
    const [opens, setOpens] = useState("")
    const [closes, setCloses] = useState("")

    const [show, setShow] = useState(false)
    const [showOpens, setShowOpens] = useState(false)
    const [showCloses, setShowCloses] = useState(false)
    const [warningMenssage, setWarningMenssage] = useState(false)


    return(
    
    <ScrollView contentContainerStyle={GS.ScrollContainer} >
    <KeyboardAvoidingView
        style={GS.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss ; setShow(false) }}>
    <>
            <Text style={styles.title}>Insira os dados do seu estabelecimento</Text>
            <TouchableOpacity style={styles.imageContainer}>
                    <MaterialIcons 
                        name="add-a-photo"
                        size={64}
                        color={DefaultTheme.color.gray}
                    />
            </TouchableOpacity>
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
                    label="Abre as"
                    type="text"
                    onPressOut={() => {setShowOpens(!showOpens)}}
                    value={opens}
                />
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={showOpens}
                >
                <View style={styles.centeredView} >
                    <View style={styles.modalView}>
                        
                        <TouchableOpacity onPress={() => setShowOpens(!showOpens)}>
                            <Text>Pronto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </Modal>
                <TextInput 
                    showSoftInputOnFocus={false}
                    style={styles.timeInput}
                    color={DefaultTheme.color.tertiary}
                    label="Fecha as"
                    type="text"
                    onPressOut={() => {setShowCloses(!showCloses)}}
                    value={closes}
                />
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={showCloses}
                >
                <View style={styles.centeredView} >
                    <View style={styles.modalView}>
                        
                        <TouchableOpacity onPress={() => setShowCloses(!showCloses)}>
                            <Text>Pronto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </Modal>
            </View>
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Descrição do estabelecimento"
                type="text"
                onChangeText={(text) => setDesc(text)}
                value={desc}
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
            {name === "" || address === "" || phone === "" || type === "" ?
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
                    onPress={() => writeStoreInDB( name, address, email, phone, site, type, desc)} >
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