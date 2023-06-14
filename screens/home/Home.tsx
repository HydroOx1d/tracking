import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Lists from './Lists'
import Map from './Map'
import { RootStackParamList } from '..'
import { Transport } from '../../types'


type StackParam = RootStackParamList & {
  Lists: undefined;
  Map: undefined;
};

const Tab = createBottomTabNavigator<StackParam>();

const Home: React.FC<NativeStackScreenProps<StackParam, "Home">> = ({
  navigation,
}) => {
  const onNavigateToTransportDetail = (transport: Transport) => {
    navigation.navigate("Transport", {...transport});
  };

  return (
    <View style={styles.wrapper}>
      <Tab.Navigator
        initialRouteName="Lists"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Lists"
          children={() => (
            <Lists onNavigateToTransportDetail={onNavigateToTransportDetail} />
          )}
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
          children={() => (
            <Map onNavigateToTransportDetail={onNavigateToTransportDetail} />
          )}
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
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingHorizontal: 10,
    height: '100%'
  }
})


export default Home