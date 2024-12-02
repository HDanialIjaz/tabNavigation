import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Setting =() => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Setting Screen</Text>
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
