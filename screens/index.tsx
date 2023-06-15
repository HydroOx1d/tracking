import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './home/Home'
import TransportDetail from './TransportDetail'
import { Transport } from '../types'
import Settings from './Settings'

export type RootStackParamList = { 
  Home: undefined,
  Transport: Transport,
  Settings: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Transport' component={TransportDetail}/>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens