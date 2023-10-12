import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigation = useNavigation();
  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert("Invalid Details", "Please fill all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${myUserUid}`), {
          email: user,
          phone: phone,
        });
       
      }
      
    );
       

    navigation.replace("Login");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#662d91" }}>
            Register
          </Text>
          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
            Create a new Account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              placeholder="Email"
              placeholderTextColor="black"
              onChange={(e) => setEmail(e.nativeEvent.text)}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 300,
                marginVertical: 10,
                marginLeft: 20,
                fontSize: password ? 18 : 18,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="key-outline" size={24} color="black" />
            <TextInput
              onChange={(e) => setPassword(e.nativeEvent.text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 300,
                marginVertical: 10,
                marginLeft: 20,
                fontSize: password ? 18 : 18,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="phone" size={24} color="black" />
            <TextInput
              value={phone}
              onChange={(e) => setPhone(e.nativeEvent.text)}
              placeholder="Phone"
              keyboardType="numeric"
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 300,
                marginVertical: 10,
                marginLeft: 20,
                fontSize: password ? 18 : 18,
              }}
            />
          </View>

          <Pressable
            onPress={register}
            style={{
              width: 200,
              backgroundColor: "#318CE7",
              padding: 15,
              borderRadius: 7,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 20 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "gray",
                fontWeight: "500",
              }}
            >
              Already have a account? Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Register;
