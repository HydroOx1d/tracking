import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeTabProps } from "./Home";
import { useTranslation } from "react-i18next";


const Lists: React.FC<HomeTabProps> = ({ onNavigateToTransportDetail, cars }) => {
  const {t, i18n} = useTranslation()
  const codeLang = i18n.language

  return (
    <View>
      <FlatList
        data={cars}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => onNavigateToTransportDetail({ ...item })}
            >
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
                    {t("transport")}:
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
                    {t("driverName")}:
                  </Text>
                  <Text style={{ fontSize: 18, color: "#00aaf8" }}>
                    {item.driverName[codeLang as keyof typeof item.driverName]}
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
                    {t("transportCategory")}:
                  </Text>
                  <Text style={{ fontSize: 18, color: "#00aaf8" }}>
                    {t(item.category)}
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