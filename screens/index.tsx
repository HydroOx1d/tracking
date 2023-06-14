import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './home/Home'

export type RootStackParamList = { 
  Home: undefined,
  Transport: undefined,
  Settings: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens