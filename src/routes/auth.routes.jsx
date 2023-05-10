import React from "react";
import SignIn from "../pages/SignIn";
import UserRegister from "../pages/UserRegister";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator()

const AuthRoutes = () =>(
    <AuthStack.Navigator initialRouteName="SignIn" >
        <AuthStack.Screen name="SignIn" component={SignIn} options={{headerShown: false,}} />
        <AuthStack.Screen name="UserRegister" component={UserRegister} options={{title:"Cadastro"}} />
    </AuthStack.Navigator>
)

export default AuthRoutes
    