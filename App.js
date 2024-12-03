import React from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon  from "react-native-vector-icons/Ionicons";
import Home from "./home_screen.js"
import Notification from "./notification_screen.js"
import Setting from "./setting_screen.js"

const Tab = createBottomTabNavigator();

const App =()=>(
  <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
     tabBarIcon:({ focused,color,size }) => {
      let iconName;
      if(route.name === "Home"){
        iconName = focused ? "home" : "home-outline"
      }
      if( route.name === "Notification"){
        iconName = focused ? "notificatioins" : "notifications-outline"
      }
      if(route.name === "Setting"){
        iconName = focused ? "settings" : "settings-outline"
      }
      return <Icon name={iconName} color={color} size={size} />
     }, 
      tabBarActiveTintColor : "blue",
      tabBarInactiveTintColor : "gray",
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  </NavigationContainer>
    
);

export default App;