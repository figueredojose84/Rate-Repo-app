import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Main from "./Main";
import SignIn from "./SIgnIn";

const Tab = createBottomTabNavigator();

function myTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Repositorios"
            screenOptions={{
              tabBarActiveTintColor: '#0070f3',
              headerShown: false,
            }}
        >
            <Tab.Screen 
            name="Repositorios"
             component={Main} 
                options={{
                    tabBarIcon
                    : ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),        
                }}
             />
            <Tab.Screen 
            name="SignIn" 
            component={SignIn}
            options={{
                tabBarIcon
                : ({ color, size }) => (
                    <FontAwesome name="sign-in" color={color} size={size} />
                ),        
            }}
             />
        </Tab.Navigator>
    );
}   

export default function Navigation() {
    return (
        <NavigationContainer>
            {myTabs()}
        </NavigationContainer>
    );
}