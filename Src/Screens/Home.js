import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        
        <Button
        title="Logout" 
        onPress={() => navigation.navigate('Login')}
      />
        <Text>Home Page</Text>
        <Button
        title="Open Camera" 
        onPress={() => navigation.navigate('Camra')}
      />
        <Button
        title="Open Files" 
        onPress={() => navigation.navigate('Files')}
      />
      <Image 
      style={{width: 200, height: 200, resizeMode: 'contain'  }} 
      source={ {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fstLlGCp8TFFvEy3gLmAwOvttrHPiL8eNQ&usqp=CAU.png"}}
      />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});