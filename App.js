import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store";
import { Provider } from "react-redux";
//screens
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import DelivaryScreen from "./screens/DelivaryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />

          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen
            name="PlaceOrder"
            component={PlaceOrderScreen}
            options={{
              presentation: "fullScreenModal",
              animation: "slide_from_bottom",
              animationDuration: 2000,
            }}
          />
          <Stack.Screen
            name="Delivary"
            component={DelivaryScreen}
            options={{
              presentation: "fullScreenModal",
              animation: "slide_from_bottom",
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
