//React
import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

//Contexts
import AuthContext from "../contexts/auth";

//Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
    const {signed, loading} = useContext(AuthContext)

    if(loading){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large' color='#666'/>
            </View>
        )
    }

    return(
        signed ? <AppRoutes /> : <AuthRoutes/>
    )
}

export default Routes