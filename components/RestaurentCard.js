import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurentCard = ({
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
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white rounded-md mr-3 shadow"
      onPress={() =>
        navigation.push("Restaurant", {
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
      }
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-t-md"
      />
      <View className="px-3 pb-4 ">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row space-x-1">
          <StarIcon color="green" opacity={0.3} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-300">{rating}</Text> {"\u2027"} {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500">
            NearBy {"\u2027"} {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurentCard;
