//React 
import React, { useContext } from "react";
import { View, Text,
        KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard, Image, TouchableOpacity } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";

//Icons
import { IconButton } from "@react-native-material/core";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

//Date FNS
import { parse, differenceInYears } from "date-fns";


const UserProfile = ({ navigation }) => {
    const { user } = useContext(AuthContext)

    const calculateAge = () => {
        const currentDate = new Date();
        const [year, month, day] = user.birth.split('/')
        const birthDate = parse(`${year}-${month}-${day}`, 'yyyy-MM-dd', new Date());

        const age = differenceInYears(currentDate, birthDate);

        return age;
    };

    return(
    <>
    <ScrollView contentContainerStyle={GS.ScrollContainer} >
    <KeyboardAvoidingView
    style={GS.container}
    behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <>
        <TouchableOpacity style={styles.ImageContainer} >
            { user.photoUrl ?
                    <Image 
                        source={{ uri: (user.photoUrl) }}  
                        style={styles.image}   
                    />
                :
                    <IconButton 
                        icon={<AntDesign name="user" size={64} color="white" />} 
                        style={styles.image} 
                    />
            }
            <View style={styles.inImageUserInfos} >
                <Text style={styles.imageText} >{user.name}</Text>
                <Text style={styles.imageText} >{calculateAge()}</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.userInfosContainer}>
            <Text style={styles.infoTitle} >Bio</Text>
            <Text style={styles.infoDesc} >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Vero deleniti voluptate tempore impedit laudantium quos a praesentium blanditiis, 
                numquam optio? Minima, adipisci! Deserunt repellendus quis unde, debitis placeat quisquam magni. 
            </Text>
        </View>
        <View style={styles.userInfosContainer}>
            <Text style={styles.infoTitle} >Email</Text>
            <Text style={styles.infoDesc} >
                {user.email}
            </Text>
        </View>
        <View style={styles.userInfosContainer}>
            <Text style={styles.infoTitle} >Endereço</Text>
            <Text style={styles.infoDesc} >
                Cidade - Estado 
            </Text>
        </View>
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    <TouchableOpacity style={styles.editButton}>
        <MaterialIcons name="mode-edit" size={24} color="black" />
    </TouchableOpacity>
    </>
    )
}

export default UserProfile