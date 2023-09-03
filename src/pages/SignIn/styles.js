import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    registration:{
        marginTop:20,
        color: DefaultTheme.color.white,
        fontSize: DefaultTheme.fontSize.text,
    },
    linkSubscribe:{
        color:DefaultTheme.color.link,
        fontSize: DefaultTheme.fontSize.text,
    },
    passwordChange:{
        color:DefaultTheme.color.white,
        fontSize: DefaultTheme.fontSize.text,

        alignSelf: 'flex-end',
        marginTop: 15,
        marginRight: 30,
    },
    imgContainer: {
        backgroundColor: DefaultTheme.color.white,
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: 100,
        height: 100,
    }
})

export default styles