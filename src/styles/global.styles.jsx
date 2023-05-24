import { Platform, StyleSheet } from "react-native"
import { DefaultTheme } from "../themes/colors&sizes.theme";

export const GS = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: DefaultTheme.color.primary ,
        justifyContent: 'center', 
        alignItems:'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 10,
    },
    titleBig:{
        fontSize: DefaultTheme.fontSize.titleBig,
        marginBottom: 10,
        fontWeight: "bold",
        color: DefaultTheme.color.white
    },
    titleSmall:{
        fontSize: DefaultTheme.fontSize.titleSmall,
        marginBottom: 10,
        fontWeight: "bold",
        color: DefaultTheme.color.white
    },
    titleMicro:{
        fontSize: DefaultTheme.fontSize.titleMicro,
        marginTop: 50,
        marginBottom: 10,
        fontWeight: "bold",
        color: DefaultTheme.color.white
    },
    textInput:{
        width: 320,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
    },
    button:{
        width: 280,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: DefaultTheme.color.positive,
        borderRadius: 10,
        marginTop: 30,
    },
    textButton:{
        fontSize: DefaultTheme.fontSize.text,
        color: DefaultTheme.color.white,
    },
    alertContainer:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    alertText:{
        paddingLeft: 10,
        color: DefaultTheme.color.gray,
        fontSize: DefaultTheme.fontSize.text,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '95%',
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

})