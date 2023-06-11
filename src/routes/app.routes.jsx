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

//Styles
import { DefaultTheme } from "../themes/colors&sizes.theme";

const AppStack = createNativeStackNavigator()


const transparent = {
    headerMode: 'float',
    headerTransparent: true,
    headerTintColor: DefaultTheme.color.white,
    headerStyle: {
        backgroundColor: 'transparent',
    },  
};

const style = {
    headerTitleAlign: 'center',
    headerTintColor: DefaultTheme.color.white,
    headerStyle: {
        backgroundColor: DefaultTheme.color.primary,
    }, 
}

const AppRoutes = () =>(
    <AppStack.Navigator initialRouteName="Home" screenOptions={style} >
        <AppStack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <AppStack.Screen name="StoreRegister" component={StoreRegister} options={{headerTitle: 'Novo estabelecimento'}}/>
        <AppStack.Screen name="Config" component={Config} options={{headerTitle: 'Configurações'}}/>
        <AppStack.Screen name="Map" component={Maps} options={{headerTitle: 'Mapa'}}/>
        <AppStack.Screen name="AutenticadedPasswordChange" component={AutenticadedPasswordChange} options={{headerShown: false}} />
        <AppStack.Screen name="UserProfile" component={UserProfile} options={{headerTitle: 'Perfil'}}/>
    </AppStack.Navigator>
)

export default AppRoutes

