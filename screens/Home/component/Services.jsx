import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'

const Services = () => {
  const services = [
    {
      id: 0,
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "washing"
    },
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry"
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron"
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning"
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/512/2890/2890981.png",
      name: "Dry"
    }
  ]
  return (
    <View style={{margin: 5}}>
      <Text>Service Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((item, i) =>
          <Pressable key={i} style={{ margin: 5, padding: 10, borderRadius: 10, backgroundColor: "white" }}>
            <Image style={{ width: 80, height: 80 }} source={{ uri: item.image }}></Image>
            <Text>{item.name}</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})