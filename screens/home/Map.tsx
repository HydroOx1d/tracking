import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import cars from '../../db.json'
import getCarImage from "../../helpers/getCarImage";

const Map = () => {
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
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default Map