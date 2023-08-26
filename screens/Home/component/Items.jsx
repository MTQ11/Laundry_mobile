import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'

const Items = () => {
    const items = [
        {
            id: 0,
            image: 'https://cdn-icons-png.flaticon.com/128/4643/4643574.png',
            name: 'shirt',
            quantity: 0,
            price: 10,
        },
        {
            id: 1,
            image: 'https://cdn-icons-png.flaticon.com/128/892/892458.png',
            name: 'T-shirt',
            quantity: 2,
            price: 10,
        },
        {
            id: 2,
            image: 'https://cdn-icons-png.flaticon.com/128/9609/9609161.png',
            name: 'dresses',
            quantity: 0,
            price: 10,
        },
        {
            id: 3,
            image: 'https://cdn-icons-png.flaticon.com/128/599/599388.png',
            name: 'jeans',
            quantity: 0,
            price: 10,
        },
        {
            id: 4,
            image: 'https://cdn-icons-png.flaticon.com/128/9431/9431166.png',
            name: 'Sweater',
            quantity: 0,
            price: 10,
        },
        {
            id: 5,
            image: 'https://cdn-icons-png.flaticon.com/128/3345/3345397.png',
            name: 'shorts',
            quantity: 4,
            price: 10,
        },
        {
            id: 6,
            image: 'https://cdn-icons-png.flaticon.com/128/293/293241.png',
            name: 'Sleeveless',
            quantity: 4,
            price: 10,
        },
    ]
    return (
        <View style={{margin: 5}}>
            <Text>Items</Text>
            <ScrollView style={{ height: 320 }} showsVerticalScrollIndicator={false}>
                {items.map((item, i) =>
                    <Pressable key={i} style={{ flexDirection: "row", justifyContent: "space-between", margin: 5, padding: 10, borderRadius: 10, backgroundColor: "white" }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }}></Image>
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.price}$</Text>
                        </View>
                        <View style={{width: 100}}>
                            {
                                (item.quantity == 0)
                                    ? <Text
                                        style={{
                                            borderColor: "gray",
                                            borderRadius: 4,
                                            borderWidth: 0.8,
                                            marginVertical: 10,
                                            color: "#088F8F",
                                            textAlign: "center",
                                            padding: 5,
                                            fontSize: 17,
                                            fontWeight: "bold",
                                        }}>Add</Text>
                                    : <Pressable
                                        style={{
                                            flexDirection: "row",
                                            paddingHorizontal: 10,
                                            paddingVertical: 5,
                                        }}>
                                        <Pressable
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,
                                                borderColor: "#BEBEBE",
                                                backgroundColor: "#E0E0E0",
                                                justifyContent: "center",
                                                alignContent: "center",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 6,
                                                    fontWeight: "600",
                                                    textAlign: "center",
                                                }}>-</Text>
                                        </Pressable>

                                        <Pressable>
                                            <Text
                                                style={{
                                                    fontSize: 19,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 8,
                                                    fontWeight: "600",
                                                }}>{item.quantity}</Text>
                                        </Pressable>

                                        <Pressable
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,
                                                borderColor: "#BEBEBE",
                                                backgroundColor: "#E0E0E0",
                                                justifyContent: "center",
                                                alignContent: "center",
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 6,
                                                    fontWeight: "600",
                                                    textAlign: "center",
                                                }}>+</Text>
                                        </Pressable>
                                    </Pressable>
                            }
                        </View>
                    </Pressable>
                )}
            </ScrollView>
        </View>
    )
}

export default Items

const styles = StyleSheet.create({})