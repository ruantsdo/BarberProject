import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    ScrollContainer:{
        flexGrow: 1,
        backgroundColor: DefaultTheme.color.primary,
        paddingBottom: 80,
    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: DefaultTheme.color.primary,
    },
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
        marginBottom: 15,
        fontWeight: "bold",
        color: DefaultTheme.color.white
    },
    imageContainer: {
        width: '85%',
        height: '20%',

        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderColor: DefaultTheme.color.white,
        borderRadius: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '95%',
        height: 'auto',
        padding: 25,
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    timeConteiner: {
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',

        flexDirection: 'row',
    },
    timeInput: {
        width: '50%',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
    },  
})

export default styles