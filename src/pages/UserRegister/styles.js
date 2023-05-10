import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent: 'center', 
        alignItems:'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 50,
    },
    title:{
        fontSize: 48,
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
})

export default styles