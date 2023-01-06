import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import RestaurentCard from "./RestaurentCard";

const FeaturedRows = ({ id, title, description, restaurants, navigation }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      {/* restaurent Card */}
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants.map((restaurant) => {
          return (
            <RestaurentCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type.name}
              address={restaurant.address}
              dishes={restaurant.dish}
              shortDescription={restaurant.short_description}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
