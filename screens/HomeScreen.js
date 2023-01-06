import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

//  Files
import AndroidSafeArea from "../AndroidSafeArea";
import Catagories from "../components/Catagories";
import FeaturedRows from "../components/FeaturedRows";
import client from "../sanity";

const HomeScreen = ({ navigation }) => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    setTimeout(
      () =>
        client
          .fetch(
            `*[_type == "featured"]{
      ...,
      restaurant[]->{
        ...,
        dish[]->,
        type->{
          name
        } 
      }
    }`
          )
          .then((data) => setFeaturedCategories(data)),
      100
    );
  }, []);

  return (
    <View style={AndroidSafeArea.AndroidSafeArea}>
      {/* header  */}
      <View className="flex-2 pt-3 pb-3 bg-white ">
        <View className="flex-row item-center space-x-2 px-4 pb-4">
          <Image
            source={require("../assets/images/images.jpg")}
            className="h-7 w-7 bg-gray-300 mt-3 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Delivar now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={18} color="#00ccbb" />
            </Text>
          </View>
          <UserIcon size={30} color="#00ccbb" className="item-center pt-2" />
        </View>
        {/* serachbar */}
        <View className="flex-row items-center px-4">
          <View className="flex-row space-x-2 flex-1 items-center bg-gray-200 p-2 rounded-md">
            <MagnifyingGlassIcon size={18} color="gray" />
            <TextInput
              placeholder="Reastaurents and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon size={30} color="#00ccbb" />
        </View>
      </View>
      {/* body */}
      <ScrollView
        className=" bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Catagories />

        {featuredCategories?.map((item) => (
          <FeaturedRows
            key={item._id}
            id={item._id}
            title={item.name}
            description={item.short_description}
            restaurants={item.restaurant}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
