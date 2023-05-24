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
    }
})

export default styles