import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    mapView: {
        width: '95%',
        height: '40%',

        marginTop: 10,
        backgroundColor: DefaultTheme.color.primaryContrast,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles