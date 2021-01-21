import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './assets/components/LoginScreen';
import RegisterScreen from './assets/components/RegisterScreen';
import LocationScreen from './assets/components/LocationScreen';


const Stack = createStackNavigator();


export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
        <Stack.Screen name='LocationScreen' component={LocationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

