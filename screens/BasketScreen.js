import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { removeToBasket, selectBasket } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { selectBasketTotal } from "../features/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasket);
  const [groupedItemInBasket, setGroupedItemInBasket] = useState([]);
  const dispatch = useDispatch();
  useMemo(() => {
    const groupedItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});
    setGroupedItemInBasket(groupedItems);
  }, [items]);
  const subTotal = useSelector(selectBasketTotal);
  const delivaryFee = 5.99;
  return (
    <View className="flex-1">
      <View>
        <View className="rounded-b-lg bg-white py-9  shadow-lg shadow-black">
          <Text className="font-bold text-lg text-center">Basket</Text>
          <Text className="text-center text-gray-400">
            {" "}
            {restaurant.title}{" "}
          </Text>
          <TouchableOpacity
            className="absolute right-5 top-10 "
            onPress={() => navigation.goBack()}
          >
            <XCircleIcon size={40} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center my-5 px-4 py-4 space-x-4 bg-white">
          <Image
            source={require("../assets/images/top.jpg")}
            className="h-10 w-10 rounded-full"
          />
          <Text className="font-bold text-gray-400 flex-1">
            {" "}
            Delivar in 40-45 min
          </Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]"> Change </Text>
          </TouchableOpacity>
        </View>
      </View>
      {items.length !== 0 && (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          className="bg-gray  mb-6"
          showsVerticalScrollIndicator={false}
        >
          {Object.entries(groupedItemInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center bg-white space-x-2 px-4 py-3"
            >
              <Text className="text-[#00ccbb]"> {items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-10 w-10 rounded-full"
              />
              <Text className="flex-1 font-bold"> {items[0].title} </Text>
              <Text className="text-gray-400">
                <Currency quantity={items[0].price} currency="GBP" />
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeToBasket({ id: key }))}
              >
                <Text className="text-[#00ccbb]"> Remove </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
      <View className="p-5 bg-white space-y-4 ">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Subtotal</Text>
          <Text className="text-gray-400">
            <Currency quantity={subTotal} currency="GBP" />
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Delivary Fee</Text>
          <Text className="text-gray-400">
            <Currency
              quantity={items.length !== 0 ? delivaryFee : 0}
              currency="GBP"
            />
          </Text>
        </View>
        <View className="flex-row justify-between mb-6">
          <Text classsName='font-bold'>Order Total</Text>
          <Text className='font-bold'>
            <Currency
              quantity={items.length !== 0 ? subTotal + delivaryFee : 0}
              currency="GBP"
            />
          </Text>
        </View>
        <TouchableOpacity className=' py-4 bg-[#00ccbb] rounded-lg' onPress={()=> navigation.navigate('PlaceOrder')}>
          <Text className='font-bold text-center text-white'>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
