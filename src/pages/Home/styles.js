import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        height: '100%',
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
        width: 50,
        height: 50,
        backgroundColor: DefaultTheme.color.tertiary,
        borderRadius: 5,
    },
    hstack: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        width: 70,
        height: 70,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: DefaultTheme.color.primary,
    },
    buttonIcon: {
        color: 'white',
    }
})

export default styles