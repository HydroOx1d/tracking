import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './home/Home'
import TransportDetail from './TransportDetail'
import { Transport } from '../types'

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens