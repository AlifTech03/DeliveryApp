import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasket, selectBasketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasket);
  const navigation = useNavigation();
  const total = useSelector(selectBasketTotal);
  if (items.length===0) return null;
  return (
    <View className="absolute z-50 w-full bottom-7">
      <TouchableOpacity
        className="bg-[#00ccbb] flex-row items-center space-x-1 mx-4 p-5 rounded-lg "
        onPress={()=> navigation.navigate("Basket")}
      >
        <Text className="font-extrabold text-lg text-white bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 font-extrabold text-lg text-white text-center">
          {" "}
          View Basket{" "}
        </Text>
        <Text className="font-extrabold text-lg text-white">
          <Currency quantity={total} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
