import { StyleSheet } from "react-native"
import { DefaultTheme } from "../../themes/colors&sizes.theme";

const styles = StyleSheet.create({
    //Image
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    ImageContainer: {
        position: 'relative',

        width: '95%',
        height: 250,
        marginTop: 10,
        marginBottom: 10,

        borderRadius: 20,
    },
    image:{
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    inImageUserInfos: {
        position: 'absolute',
        width: '90%',

        bottom: 16,
        right: 16,

        justifyContent: 'space-between',

        flexDirection: 'row',
    },
    imageText: {
        color: DefaultTheme.color.white,
        fontSize: DefaultTheme.fontSize.titleMicro,
        fontWeight: 'bold',
        textShadowColor: DefaultTheme.color.primary,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },

    // Image -- End

    // User Infos

    userInfosContainer: {
        width: '95%',
        borderRadius: 10,

        backgroundColor: DefaultTheme.color.primaryContrast,
        marginBottom: 10,
    },
    infoTitle: {
        fontSize: DefaultTheme.fontSize.text,
        color: DefaultTheme.color.white,
        marginLeft: 10,
    },
    infoDesc: {
        fontSize: DefaultTheme.fontSize.text,
        color: DefaultTheme.color.white,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
    },

    //User Infos -- End

    editButton: {
        position: "absolute",
        bottom: 16,
        right: 16,
        zIndex: 999,

        backgroundColor: DefaultTheme.color.positive,
        width: 50,
        height: 50,
        borderRadius: 50,

        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default styles