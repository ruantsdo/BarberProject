import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    title: {
        color: DefaultTheme.color.white,
        fontSize: DefaultTheme.fontSize.titleMicro
    },
    buttonContainer: {
        backgroundColor: DefaultTheme.color.white,
        width: '90%',
        height: 50,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

        padding: 10,
        borderRadius: 10,
        gap: 15,
        marginTop: 15, 
    },
    switchButton: {
        color: 'red',
    },

})

export default styles