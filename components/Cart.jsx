import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../slice/CartSlice";
import { resetProduct } from "../slice/ProductSlice";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [totalItem, setTotalItem] = useState(0);
  const [totalPay, setTotalPay] = useState(0);
  useEffect(() => {
    setTotalItem(FntotalItem());
    setTotalPay(FntotalPay());
  }, [cart]);
  const FntotalItem = () => {
    let sum = 0;
    cart.map((item) => {
      sum = sum + item.quantity;
    });
    return sum;
  };
  const FntotalPay = () => {
    let sum = 0;
    cart.map((item) => {
      sum = sum + item.price * item.quantity;
    });
    return sum.toFixed(0);
  };
  return (
    <>
      {cart.length > 0 ? (
        <View
          style={{
            margin: 10,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Pressable
            onPress={() => {
              dispatch(resetCart());
              dispatch(resetProduct());
            }}
          >
            <AntDesign name="closecircleo" size={24} color="black" />
          </Pressable>
          <View
            style={{
              backgroundColor: "#088F8F",
              marginTop: "auto",
              padding: 10,
              marginBottom: 40,
              margin: 15,
              borderRadius: 7,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
                {totalItem} items | $ {totalPay}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  color: "white",
                  marginVertical: 6,
                }}
              >
                extra charges might apply
              </Text>
            </View>

            <Pressable onPress={() => navigator.navigate(props.navigator)}>
              <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
                {props.button}
              </Text>
            </Pressable>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
