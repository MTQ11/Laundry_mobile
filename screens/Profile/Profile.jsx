import { StyleSheet, Text, View,SafeAreaView,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
    const user = auth.currentUser;
    const navigation = useNavigation();
    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace("Login");
        }).catch(err => {
            console.log(err);
        })
    }
  return (
    <SafeAreaView style={{flex:1, marginTop: 50}}>
      <View>
           <Ionicons
            style={{flexDirection: "row", padding: 10, alignItems: "flex-start" }}
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
        </View>
      <Pressable style={{marginVertical:10, alignItems: "center"}}>
        <Text style={{fontSize: 20, fontWeight: 500, color: "blue"}}>Welcome {user.email}</Text>
      </Pressable>

      <Pressable onPress={signOutUser}  style={{marginVertical:10, alignItems: "center", fontWeight: 500, fontSize: 30}}>
          <Text>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})