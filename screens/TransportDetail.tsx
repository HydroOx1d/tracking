import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View, Linking, Alert } from "react-native";
import { RootStackParamList } from "./index";
import MapView, { Marker } from "react-native-maps";
import getCarImage from "../helpers/getCarImage";

const TransportDetail: React.FC<
  NativeStackScreenProps<RootStackParamList, "Transport">
> = ({ route, navigation }) => {
  const transport = route.params;

  React.useEffect(() => {
    navigation.setOptions({ title: `ТС: ${transport.id}` });
  }, []);

  const call = async () => {
    try {
      await Linking.openURL(`tel:${transport.driverContact}`);
    } catch (err) {
      Alert.alert("something went wrong");
    }
  };

  const message = async () => {
    const text = "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе";
    
    try {
      await Linking.openURL(
        `whatsapp://send?text=${text}&phone=${transport.driverContact}`
      );
    } catch (err) {
      Alert.alert("something went wrong");
    }
  };

  return (
    <View style={style.wrapper}>
      <View style={style.title}>
        <Text style={style.titleText}>ТС: #{transport.id}</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <View style={style.infoItem}>
          <Text style={style.infoItemText}>Номер телефона</Text>
          <Text style={style.infoItemText}>{transport.driverContact}</Text>
        </View>
        <View style={style.infoItem}>
          <Text style={style.infoItemText}>Имя водителя</Text>
          <Text style={style.infoItemText}>{transport.driverName}</Text>
        </View>
        <View style={style.infoItem}>
          <Text style={style.infoItemText}>Категория ТС:</Text>
          <Text style={style.infoItemText}>{transport.category}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", width: "100%", marginBottom: 20 }}>
        <View style={{ marginRight: 10, flex: 1 }}>
          <Button title="Позвонить" onPress={call} />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Написать" color={"#25D366"} onPress={message} />
        </View>
      </View>
      <MapView
        style={{ width: "100%", height: 300 }}
        initialRegion={{
          latitude: transport.location.latitude,
          longitude: transport.location.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        <Marker
          coordinate={{
            latitude: transport.location.latitude,
            longitude: transport.location.longitude,
          }}
          image={getCarImage(transport.category)}
        />
      </MapView>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    padding: 10,
  },

  title: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  titleText: {
    fontSize: 28,
    fontWeight: "bold",
  },

  infoItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  infoItemText: {
    fontSize: 18,
  },
});

export default TransportDetail;
