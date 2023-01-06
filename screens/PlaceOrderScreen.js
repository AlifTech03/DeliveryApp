import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const PlaceOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivary");
    }, 3000);
  });
  return (
    <View className="flex-1 bg-[#00ccbb] justify-center items-center">
      <Animatable.Image
        source={require("../assets/images/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="font-bold text-white text-lg my-10"
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </View>
  );
};

export default PlaceOrderScreen;
