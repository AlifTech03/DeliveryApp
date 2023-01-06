import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CatagoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image
        source={{uri:imgUrl}}
        className='relative h-20 w-20 rounded mr-2'
      />
      <Text className='font-bold absolute bottom-1 left-1 text-white'>{title}</Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;
