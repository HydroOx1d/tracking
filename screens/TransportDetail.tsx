import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View, Linking, Alert } from "react-native";
import { RootStackParamList } from "./index";
import MapView, { Marker } from "react-native-maps";
import getCarImage from "../helpers/getCarImage";
import { useTranslation } from "react-i18next";

const TransportDetail: React.FC<
  NativeStackScreenProps<RootStackParamList, "Transport">
> = ({ route, navigation }) => {
  const transport = route.params;

  const {t, i18n} = useTranslation()
  const codeLang = i18n.language;

  React.useEffect(() => {
    navigation.setOptions({ title: `${t('transport')}: ${transport.id}` });
  }, []);

  const call = async () => {
    try {
      await Linking.openURL(`tel:${transport.driverContact}`);
    } catch (err) {
      Alert.alert("something went wrong");
    }
  };

  const message = async () => {
    const text = t('messageText');
    
    try {
      await Linking.openURL(
        `whatsapp://send?text=${text}&phone=${transport.driverContact}`
      );
    } catch (err) {
      Alert.alert("something went wrong");
    }
  };

  const categories = ['special', 'cargo', 'passenger']

  return (
    <View style={style.wrapper}>
      <View style={style.title}>
        <Text style={style.titleText}>
          {t("transport")}: #{transport.id}
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <View style={style.infoItem}>
          <Text style={style.infoItemText}>{t("phoneNumber")}</Text>
          <Text style={style.infoItemText}>{transport.driverContact}</Text>
        </View>
        <View style={style.infoItem}>
          <Text style={style.infoItemText}>{t("driverName")}</Text>
          <Text style={style.infoItemText}>
            {
              transport.driverName[
                codeLang as keyof typeof transport.driverName
              ]
            }
          </Text>
        </View>
        <View style={style.infoItem}>
          <Text style={style.infoItemText}>{t("transportCategory")}:</Text>
          <Text style={style.infoItemText}>{categories.includes(transport.category) ? t(transport.category) : t('unknown')}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", width: "100%", marginBottom: 20 }}>
        <View style={{ marginRight: 10, flex: 1 }}>
          <Button title={t("call")} onPress={call} />
        </View>
        <View style={{ flex: 1 }}>
          <Button title={t("message")} color={"#25D366"} onPress={message} />
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
