import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import PickUp from "./screens/PickUp/PickUp";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import CartScreen from "./screens/CartScreen/CartScreen";
import Profile from "./screens/Profile/Profile";
import Order from "./screens/Order/Order";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PickUp"
          component={PickUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
