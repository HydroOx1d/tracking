import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Lists from './Lists'
import Map from './Map'

const Tab = createBottomTabNavigator()

type Props = {
  Home: undefined;
  Lists: undefined
  Map: undefined
};


const Home: React.FC<NativeStackScreenProps<Props, "Home">> = () => {
  return (
    <View style={styles.wrapper}>
      <Tab.Navigator
        initialRouteName="Lists"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Lists"
          component={Lists}
          options={{
            tabBarIcon: ({ size }) => {
              return (
                <Image
                  source={require("../../assets/file-list-2-line.png")}
                  style={{ width: size, height: size }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ size }) => {
              return (
                <Image
                  source={require("../../assets/road-map-line.png")}
                  style={{ width: size, height: size }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingHorizontal: 10,
    height: '100%'
  }
})


export default Home