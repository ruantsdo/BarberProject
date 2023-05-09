import React from "react";
import Home from "../pages/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AppStack = createNativeStackNavigator()

const AppRoutes = () =>(
    <AppStack.Navigator initialRouteName="Home" >
        <AppStack.Screen name="Home" component={Home}/>
    </AppStack.Navigator>
)

export default AppRoutes

