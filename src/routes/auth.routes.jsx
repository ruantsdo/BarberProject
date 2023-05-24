//React
import React from "react";

//React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import SignIn from "../pages/SignIn";
import UserRegister from "../pages/UserRegister";
import PasswordChange from "../pages/PasswordChange";

const AuthStack = createNativeStackNavigator()

const AuthRoutes = () =>(
    <AuthStack.Navigator initialRouteName="SignIn" >
        <AuthStack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <AuthStack.Screen name="UserRegister" component={UserRegister} options={{title:"Cadastro"}} />
        <AuthStack.Screen name="PasswordChange" component={PasswordChange}  options={{headerShown: false}} />
    </AuthStack.Navigator>
)

export default AuthRoutes
    
