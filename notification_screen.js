import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Notification =() => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Notification Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
  }
});
