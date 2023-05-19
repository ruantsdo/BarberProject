import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent: 'center', 
        alignItems:'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 50,
    },
    title:{
        fontSize: 32,
        marginBottom: 10,
        fontWeight: "bold",
    },
    input:{
        width: 300,
        height: 50,
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        marginLeft:"auto",
        marginRight:"auto",
    },
    buttonRegister:{
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f92e6a",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister:{
        color:"#ffffff",
    },
    contentAlert:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert:{
        paddingLeft: 10,
        color:"#bdbdbd",
        fontSize: 16,
    },
    registration:{
        marginTop:20,
        color: "#4d5156",
        fontSize: 16,
    },
    linkSubscribe:{
        color:"#1877f2",
        fontSize: 16,
    },
    centeredView: {
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

export default styles