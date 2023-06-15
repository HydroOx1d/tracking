import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CarsCategory, Transport } from '../../types'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '..'
import SelectDropdown from 'react-native-select-dropdown'
import Lists from './Lists'
import Map from './Map'
import data from '../../db.json'
import { useTranslation } from 'react-i18next'

// Пропсы для Map и Lists
export type HomeTabProps = {
  onNavigateToTransportDetail: (transport: Transport) => void;
  cars: Array<Transport>;
};

// Страницы Map и Lists (undefined означает, что страницы ничего не принимают в качестве параметров)
type TabParam = RootStackParamList & {
  Lists: undefined;
  Map: undefined;
};

// Создаём собственно сами страницы
const Tab = createBottomTabNavigator<TabParam>();

const Home: React.FC<NativeStackScreenProps<TabParam, "Home">> = ({
  navigation,
}) => {
  const {t} = useTranslation()


  // Категория транспортных средств для рендера в SelectDropdown компонент
  const carsCategory: Array<CarsCategory> = [
    {
      name: t("passenger"),
      type: "passenger",
    },
    {
      name: t("cargo"),
      type: "cargo",
    },
    {
      name: t("special"),
      type: "special",
    },
  ];

  // здесь хранится данные о транспортах
  const [cars, setCars] = React.useState(data as Array<Transport>);
  // для хранения текущей категории
  const [currentCategory, setCurrentCategory] = React.useState<CarsCategory>()
  // Этот ref нужен для сохранения ссылки на массив, что бы по нему фильтровать state (cars), т.е категория транспорта
  const carsRef = React.useRef(cars)

  React.useEffect(() => {
    // Если категория уже выбрана, то начинаем фильтрацию 
    if(currentCategory) {
      setCars(() => {
        return carsRef.current.filter((car) => car.category === currentCategory?.type);
      });
    }
  }, [currentCategory])

  // Функция для перенаправления на детальную страницу с информацией о транспорте
  const onNavigateToTransportDetail = (transport: Transport) => {
    navigation.navigate("Transport", {...transport});
  };

  // Выбор категории
  const onSelectCategory = (category: CarsCategory) => {
    setCurrentCategory(category)
  }

  return (
    <View style={styles.wrapper}>
      <View style={{ marginBottom: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image source={require("../../assets/settings-2-line.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 20 }}>
        <SelectDropdown
          data={carsCategory}
          onSelect={(item: CarsCategory) => onSelectCategory(item)}
          buttonStyle={{ borderWidth: 1 }}
          defaultButtonText={t("category") || "Категория"}
          rowTextForSelection={(item: CarsCategory) => item.name}
          buttonTextAfterSelection={(item: CarsCategory) => t(item.type)}
        />
      </View>
      <Tab.Navigator
        initialRouteName="Lists"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Lists"
          children={() => (
            <Lists
              cars={cars}
              onNavigateToTransportDetail={onNavigateToTransportDetail}
            />
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
            <Map
              cars={cars}
              onNavigateToTransportDetail={onNavigateToTransportDetail}
            />
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