import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  removeToBasket, 
  selectBasketWithId,
} from "../features/basketSlice";

const DishRow = ({ id, image, title, price, description }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, image, title, price, description }));
  };

  const removeItemToBasket = () => {
    if(!items.length > 0) return;
    dispatch(removeToBasket({ id, image, title, price, description }));
  };
  return (
    <>
        <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
          <View
            className={`flex-row items-center px-2 pt-3 bg-white border-b border-gray-200 ${
              isPressed && "border-b-0"
            }`}
          >
            <View className="flex-1">
              <Text className="font-semibold text-lg px-3">{title}</Text>
              <Text className="text-xs px-3 py-1 text-gray-400">
                {" "}
                {description}
              </Text>
              <Text className="text-xs px-3 pb-3 text-gray-400">
                <Currency quantity={price} currency="GBP" />
              </Text>
            </View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 rounded-md mx-2"
            />
          </View>
        </TouchableOpacity>
        {isPressed && (
          <View className="flex-row bg-white items-center px-4 py-3">
            <TouchableOpacity
              onPress={() => removeItemToBasket()}
              disabled={!items.length ? true : false}
            >
              <MinusCircleIcon
                size={30}
                color={items.length > 0 ? "#00ccbb" : "gray"}
              />
            </TouchableOpacity>

            <Text> {items.length} </Text>

            <TouchableOpacity onPress={() => addItemToBasket()}>
              <PlusCircleIcon size={30} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        )}
   
    </>
  );
};

export default DishRow;
