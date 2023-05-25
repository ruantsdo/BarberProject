import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    option: {
        backgroundColor: DefaultTheme.color.gray,
        width: 100,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,

        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        width: '90%',
        textAlign: 'center',
        fontSize: DefaultTheme.fontSize.titleMicro,
        marginTop: 15,
        marginBottom: 15,
        fontWeight: "bold",
        color: DefaultTheme.color.white
    },
})

export default styles