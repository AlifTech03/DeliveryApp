import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { XCircleIcon, XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import MapView, { Marker } from "react-native-maps";

const DelivaryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="flex-1 bg-[#00ccbb]">
      <View className="flex-row justify-between items-center py-10 px-4">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <XMarkIcon size={30} color="#ffff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="font-light text-lg text-white">Order Help</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-white mx-5 my-2 p-5 rounded-md z-50 shadow-md shadow-black">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-4xl font-bold">40-45 Minutes</Text>
          </View>
          <Image
            source={require("../assets/images/rider.jpg")}
            className="h-20 w-20 bg-gray-400"
          />
        </View>
        <Progress.Bar size={30} indeterminate={true} color="#00ccbb" />
        <Text className="mt-3 text-gray-500">
          Your order at {restaurant.title} is being prepared
        </Text>
      </View>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          zoomEnabled: true,
          zoomControlEnabled: true,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="region"
          pinColor="#00ccbb"
        />
      </MapView>
      <View className="bg-white flex-row items-center p-5 space-x-3">
        <Image
          source={require("../assets/images/images.jpg")}
          className="h-10 w-10 rounded-full bg-gray"
        />
        <View className="flex-1">
          <Text className="text-lg">John Doe</Text>
          <Text className="text-gray-500">Your rider</Text>
        </View>

        <TouchableOpacity>
          <Text className="font-bold text-lg text-[#00ccbb]"> Call </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DelivaryScreen;
