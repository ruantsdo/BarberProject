import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: DefaultTheme.color.primary ,
        paddingTop: Platform.OS === 'ios' ? 0 : 5,
    },
    header: {
        backgroundColor: DefaultTheme.color.primary,
    },
    headerText: {
        fontSize: DefaultTheme.fontSize.text,
        color: DefaultTheme.color.white,
    },
    profilePhoto: {
        backgroundColor: 'red',
        borderRadius: 5,
    },
    hstack: {
        display: 'flex',
        justifyContent: 'center'
    },
    buttonContainer :{
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: DefaultTheme.color.tertiary,
    },
    buttonIcon :{
        color: 'white',
    }
})

export default styles