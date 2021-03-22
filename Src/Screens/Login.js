import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
      style={{width: 200, height: 200, resizeMode: 'contain'  }} 
      source={ {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fstLlGCp8TFFvEy3gLmAwOvttrHPiL8eNQ&usqp=CAU.png"}}
      />
      
        {/* <TextInput style={styles.input}
        keyboardType={"email-address"}
         placeholder="Email" />

        <TextInput style={styles.input}
        keyboardType={"email-address"}
         placeholder="Email" /> */}
      
      
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
    height: 40,
    borderColor: "green",
    borderWidth: 1,
    width: "80%"
  },
});