import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AuthScreen from '../screens/AuthScreen';
import ProductDetScreen from '../screens/ProductDetScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function AppNav() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Produt Detail Screen" component={ProductDetScreen} />
      <Stack.Screen name="Shopping Screen" component={ShoppingScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}