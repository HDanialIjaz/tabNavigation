import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";


const notification=()=>{
  return(
  <View style={style.container}>
    <Text style={style.text}>Notification</Text>
    </View>
  );

}
export default notification;

const style=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:25
  }
});