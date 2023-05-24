//React 
import React, { useContext, useState } from "react";
import { View, Button, Text, KeyboardAvoidingView, Modal, TouchableOpacity } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";
import { TextInput } from "@react-native-material/core";


//Contexts
import AuthContext from "../../contexts/auth";


const StoreRegister = ({ navigation }) => {
    const { token, writeStoreInDB } = useContext(AuthContext)

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [site, setSite] = useState("")
    const [type, setType] = useState("")
    const [desc, setDesc] = useState("")

    const [show, setShow] = useState(false)

    return(
        <KeyboardAvoidingView style={GS.container}>
            <Text style={GS.titleMicro}>Insira os dados do seu estabelecimento</Text>
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Nome do estabelecimento"
                type="text"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput 
                style={GS.textInput}
                color={DefaultTheme.color.tertiary}
                label="Endereço"
                type="text"
                onChangeText={(text) => setAddress(text)}
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
                label="Telefone"
                type="text"
                onChangeText={(text) => setPhone(text)}
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
                label="Tipo do estabelecimento"
                onPressIn={() => setShow(!show)}
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
                            <Text>Voltar</Text>
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
            <TouchableOpacity 
                title="Cadastrar" 
                style={GS.button} 
                onPress={() => writeStoreInDB( name, address, email, phone, site, type, desc)} >
                    <Text style={GS.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default StoreRegister