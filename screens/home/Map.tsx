import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import getCarImage from "../../helpers/getCarImage";
import { HomeTabProps } from "./Home";

const Map: React.FC<HomeTabProps> = ({ onNavigateToTransportDetail, cars }) => {

  return (
    <View>
      <MapView
        style={{ height: "100%", width: "100%" }}
        zoomEnabled
        initialRegion={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        {cars.map((car) => {
          return (
            <Marker
              key={car.id}
              coordinate={{
                latitude: car.location.latitude,
                longitude: car.location.longitude,
              }}
              image={getCarImage(car.category)}
              onPress={() => onNavigateToTransportDetail({ ...car })}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default Map