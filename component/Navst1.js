import React from "react";
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Home from "./Home";
import Imageclick from "./Imageclick";
import Signup from "./Signup";
import Login1 from "./Login1";
// Capitalize the navigator variable name
import Mycart from "./Mycart";
import Wish from "./Wish";
import Error from "./Error";
function Navst1() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Imageclick" component={Imageclick} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="Login1" component={Login1} options={{headerShown:false}}/>
        <Stack.Screen name="Mycart" component={Mycart} options={{headerShown:false}}/>
        <Stack.Screen name="Wish" component={Wish} options={{headerShown:false}}/>
        <Stack.Screen name="Error" component={Error} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navst1;
