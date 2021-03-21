import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Files from '../Screens/Files';
// import Camra from '../Screens/Camra'


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Files" component={Files} />
        {/* <Stack.Screen name="Camra" component={Camra} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;