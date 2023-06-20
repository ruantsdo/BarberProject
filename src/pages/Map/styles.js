import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    mapView: {
        width: '100%',
        height: '100%',

        marginTop: 10,
        backgroundColor: DefaultTheme.color.primaryContrast,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapContainer: {
        width: '95%',
        height: 250,

        marginBottom: 30,
    },
    cardsContainer: {
        flexGrow: 1,

        width: '100%',
        height: '100%',
    }
})

export default styles