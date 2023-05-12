//React
import React from "react";

//React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Home from "../pages/Home";

const AppStack = createNativeStackNavigator()

const AppRoutes = () =>(
    <AppStack.Navigator initialRouteName="Home" >
        <AppStack.Screen name="Home" component={Home}/>
    </AppStack.Navigator>
)

export default AppRoutes

