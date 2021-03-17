import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
      style={{width: 200, height: 200, resizeMode: 'contain'  }} 
      source={ {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fstLlGCp8TFFvEy3gLmAwOvttrHPiL8eNQ&usqp=CAU.png"}}
      />
      
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
      />
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});