//React
import React from "react";

//React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Home from "../pages/Home";
import StoreRegister from "../pages/StoreRegister"
import UserProfile from "../pages/UserProfile"
import Config from "../pages/Config"
import Maps from "../pages/Map"
import AutenticadedPasswordChange from "../pages/AutenticadedPasswordChange"

const AppStack = createNativeStackNavigator()

const AppRoutes = () =>(
    <AppStack.Navigator initialRouteName="Home" >
        <AppStack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <AppStack.Screen name="StoreRegister" component={StoreRegister} options={{title: "Novo estabelecimento"}} headerTransparent/>
        <AppStack.Screen name="Config" component={Config} options={{title: "Configurações"}} />
        <AppStack.Screen name="Map" component={Maps} options={{title: "Mapa"}} />
        <AppStack.Screen name="AutenticadedPasswordChange" component={AutenticadedPasswordChange} options={{headerShown: false}} />
        <AppStack.Screen name="UserProfile" component={UserProfile} options={{title: "Perfil"}} />
    </AppStack.Navigator>
)

export default AppRoutes

