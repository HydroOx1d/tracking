import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import data from '../../db.json'
import getCarImage from "../../helpers/getCarImage";
import React from "react";
import { Transport } from "../../types";

type Props = {
  onNavigateToTransportDetail: (transport: Transport) => void
}

const Map: React.FC<Props> = ({ onNavigateToTransportDetail }) => {
  const [cars, setCars] = React.useState<Array<Transport>>(data)

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
        {cars.map(car => {
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