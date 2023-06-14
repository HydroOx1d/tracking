import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from '../../db.json'
import { Transport } from "../../types";
import React from "react";

type Props = {
  onNavigateToTransportDetail: (transport: Transport) => void
}

const Lists: React.FC<Props> = ({ onNavigateToTransportDetail }) => {
  const [cars, setCars] = React.useState<Array<Transport>>(data)
  return (
    <View>
      <FlatList
        data={cars}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onNavigateToTransportDetail({...item})}>
              <View style={styles.item}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginRight: 10, color: "#222222" }}
                  >
                    ТС:
                  </Text>
                  <Text style={{ fontSize: 18, color: "#00aaf8" }}>
                    #{item.id}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginRight: 10, color: "#222222" }}
                  >
                    Имя водителя:
                  </Text>
                  <Text style={{ fontSize: 18, color: "#00aaf8" }}>
                    {item.driverName}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginRight: 10, color: "#222222" }}
                  >
                    Категория ТС:
                  </Text>
                  <Text style={{ fontSize: 18, color: "#00aaf8" }}>
                    {item.category}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    borderColor: "#111111",
  },
});

export default Lists