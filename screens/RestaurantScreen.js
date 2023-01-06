import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { useFonts } from "expo-font";
import { useDispatch } from "react-redux";

import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";

//files
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      rating,
      title,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        rating,
        title,
        genre,
        address,
        shortDescription,
        dishes,
        long,
        lat,
      })
    );
  });
  return (
    <>
      <BasketIcon />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative  flex-6">
          <Image
            className="h-56 w-full bg-gray-300"
            source={{ uri: urlFor(imgUrl).url() }}
          />
          <TouchableOpacity
            className="absolute bg-slate-100 rounded-full top-8 left-4 p-2"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
          <View className="px-2 pt-4 bg-slate-50 ">
            <Text className="font-bold text-3xl t.fontMono"> {title} </Text>
            <View className="flex-row space-x-1 mx-2 my-1 ">
              <StarIcon size={15} color="#BDBDBD" />
              <Text className="text-xs text-gray-400">
                {rating} {"\u2027"} {genre}
              </Text>
              <MapPinIcon size={15} color="#BDBDBD" />
              <Text className="text-xs text-gray-400">
                {" "}
                NearBy {"\u2027"} {address}
              </Text>
            </View>
            <View className="my-3">
              <Text className="font-bold text-xs px-2 text-gray-400">
                {" "}
                {shortDescription}{" "}
              </Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row justify-between items-center px-4 py-4 bg-white">
            <QuestionMarkCircleIcon size={20} color="#bdbdbd" />
            <Text className="font-extrabold flex-1 text-sm">
              {" "}
              Have a food allergy?{" "}
            </Text>
            <ChevronRightIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
          <View className="bg-gray-100 px-5 py-3 pt-5">
            <Text className="font-bold text-xl">Menu</Text>
          </View>
        </View>
        <View className="flex-4 bg-red-50 pb-28">
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              image={dish.image}
              title={dish.name}
              price={dish.price}
              description={dish.short_description}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
