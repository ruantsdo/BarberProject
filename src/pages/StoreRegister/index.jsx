//React 
import React, { useContext, useState } from "react";
import { View, Button, Text, KeyboardAvoidingView, Modal, TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";
import { TextInput } from "@react-native-material/core";

//Contexts
import AuthContext from "../../contexts/auth";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons"


const StoreRegister = ({ navigation }) => {
    const { writeStoreInDB } = useContext(AuthContext)

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [site, setSite] = useState("")
    const [type, setType] = useState("")
    const [desc, setDesc] = useState("")

    const [show, setShow] = useState(false)
    const [warningMenssage, setWarningMenssage] = useState(false)


    return(
        <ScrollView>
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={GS.container}
        >
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss ; setShow(!show)}}>
        <>
            <Text style={styles.title}>Insira os dados do seu estabelecimento</Text>
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
            />
            <TextInput 
                showSoftInputOnFocus={false}
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Tipo do estabelecimento*"
                onPressIn={() => {setShow(!show) ; setWarningMenssage(false)}}
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
                            onPress={() => {setType("Barbearia"); setShow(!show)}}
                        >
                            <Text>Barbearia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.option} 
                            onPress={() => {setType("Salão"); setShow(!show)}}
                        >
                            <Text>Salão</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.option} 
                            onPress={() => {setType("Pet Shop"); setShow(!show)}}
                        >
                            <Text>Pet Shop</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setShow(!show)} style={{marginTop: 15}}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Descrição do estabelecimento"
                type="text"
                onChangeText={(text) => setDesc(text)}
                value={desc}
            />
            {warningMenssage == true ? 
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