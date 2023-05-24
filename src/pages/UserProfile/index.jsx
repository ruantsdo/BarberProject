//React 
import React, { useContext } from "react";
import { View, Button, Text } from "react-native";

//Styles
import styles from "./styles"
import { DefaultTheme } from "../../themes/colors&sizes.theme";
import { GS } from "../../styles/global.styles";

//Contexts
import AuthContext from "../../contexts/auth";

const UserProfile = ({ navigation }) => {
    const {} = useContext(AuthContext)

    return(
        <View>
            <Text>Está na página de UserProfile</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

export default UserProfile