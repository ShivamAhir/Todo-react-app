import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header () {

  return (
   <View style={styles.header}>
    <Text style={styles.title}>TO DO List</Text>
   </View>
  );
}
const styles = StyleSheet.create({
  header:{
    height:80,
    paddingTop:38,
    backgroundColor:'coral',
  },
  title:{
    fontSize:25,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  }
});
