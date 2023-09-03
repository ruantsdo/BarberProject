//React
import React from "react";

//React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import SignIn from "../pages/SignIn";
import UserRegister from "../pages/UserRegister";
import PasswordChange from "../pages/PasswordChange";
import { DefaultTheme } from "../themes/colors&sizes.theme";

const AuthStack = createNativeStackNavigator()

const headerStyle = {
    headerMode: 'float',
    headerTintColor: DefaultTheme.color.white,
    headerStyle: {
        backgroundColor: DefaultTheme.color.primary,
    },  
};

const AuthRoutes = () =>(
    <AuthStack.Navigator initialRouteName="SignIn" screenOptions={headerStyle} >
        <AuthStack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <AuthStack.Screen name="UserRegister" component={UserRegister} options={{title:"Cadastro"}} />
        <AuthStack.Screen name="PasswordChange" component={PasswordChange}  options={{title:"Alterar senha"}} />
    </AuthStack.Navigator>
)

export default AuthRoutes
    
