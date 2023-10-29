import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const PickUp = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "1",
      time: "1:00 PM",
    },
    {
      id: "2",
      time: "2:00 PM",
    },
    {
      id: "3",
      time: "3:00 PM",
    },
    {
      id: "4",
      time: "4:00 PM",
    },
    {
      id: "5",
      time: "5:00 PM",
    },
    {
      id: "6",
      time: "6:00 PM",
    },
  ];
  const navigation = useNavigation();
  const proceedToCart = () => {
      if(!selectedDate || !selectedTime || !delivery){
        Alert.alert(
            "Empty or invalid",
            "Please select all the fields",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      }
      if(selectedDate && selectedTime && delivery){
        navigation.replace("CartScreen",{
            pickUpDate:selectedDate,
            selectedTime:selectedTime,
            no_Of_days:delivery,

        })
      }
  }

  return (
    <>
    <SafeAreaView>
    <View>
           <Ionicons
            style={{flexDirection: "row", padding: 10, marginTop: 30 }}
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
        </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginHorizontal: 10,
          marginTop: 40,
        }}
      >
        Address
      </Text>
      <TextInput
        style={{
          padding: 40,
          borderColor: "gray",
          borderWidth: 0.7,
          paddingVertical: 50,
          borderRadius: 9,
          margin: 10,
        }}
        placeholder="Enter Address"
        r
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        Pick Up Date
      </Text>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2023-10-22")}
        endDate={new Date("2023-10-31")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        Select Time
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, i) => (
            <Pressable            
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      backgroundColor: "#222831",
                      borderWidth: 1.5,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 1.5,
                    }
              }
              key={i}
              onPress={() => setSelectedTime(item.time)}
            >
              <Text style={
                selectedTime.includes(item.time) 
                ? {color: "white"} :
                {color: "black"}
              }>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        Delivery Date
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      backgroundColor: "#222831",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text style={
                delivery.includes(item.name) 
                ? {color: "white"} :
                {color: "black"}
              }>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
    </SafeAreaView>
    {total === 0 ? null : (
      <Pressable
        style={{
          backgroundColor: "#088F8F",
          marginTop:"auto",
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
            {cart.length} items | $ {total}
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

        <Pressable onPress={proceedToCart}>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
            Proceed to Cart
          </Text>
        </Pressable>
      </Pressable>
    )}
    </>
  );
};

export default PickUp;

const styles = StyleSheet.create({});
