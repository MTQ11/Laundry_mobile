import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../slice/CartSlice'
import { getProduct, incrementQty, decrementQty } from '../../../slice/ProductSlice'
import { incrementQuantity, decrementQuantity } from '../../../slice/CartSlice'
import { db } from '../../../firebase'
import { collection, getDocs } from 'firebase/firestore'

const Items = () => {
    const [item, setItem] = useState([])
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    const product = useSelector((state) => state.product.product)
    const productSearch = useSelector((state) => state.product.productSearch)
    const typeService = useSelector((state) => state.type.type)


    const addItemToCart = (item) => {
        dispatch(addCart(item)) //cart
        dispatch(incrementQty(item)) //product
    }


    useEffect(() => {
        if (product.length > 0) return;
        fetchProduct()
    }, [product.length])


    const fetchProduct = async () => {
        const array = []

        const laundry = collection(db, 'services/laundry/service')
        const docsSnapLaundry = await getDocs(laundry)
        docsSnapLaundry.forEach((doc) => {
            array.push(doc.data())
        })

        const washIron = collection(db, 'services/wash iron/service')
        const docsSnapWashIron = await getDocs(washIron)
        docsSnapWashIron.forEach((doc) => {
            array.push(doc.data())
        })

        const dryLaundry = collection(db, 'services/dry laundry/service')
        const docsSnapDryLaundry = await getDocs(dryLaundry)
        docsSnapDryLaundry.forEach((doc) => {
            array.push(doc.data())
        })

        const other = collection(db, 'services/other/service')
        const docsSnapOther = await getDocs(other)
        docsSnapOther.forEach((doc) => {
            array.push(doc.data())
        })

        array.map((item) =>
            dispatch(getProduct(item))
        )
        setItem(array)
    }

    //fetchProduct()
    // const items = [
    //     {
    //         id: 0,
    //         image: 'https://cdn-icons-png.flaticon.com/128/4643/4643574.png',
    //         name: 'shirt',
    //         quantity: 0,
    //         price: 1,
    //     },
    //     {
    //         id: 1,
    //         image: 'https://cdn-icons-png.flaticon.com/128/892/892458.png',
    //         name: 'T-shirt',
    //         quantity: 0,
    //         price: 0.5,
    //     },
    //     {
    //         id: 2,
    //         image: 'https://cdn-icons-png.flaticon.com/128/9609/9609161.png',
    //         name: 'dresses',
    //         quantity: 0,
    //         price: 1,
    //     },
    //     {
    //         id: 3,
    //         image: 'https://cdn-icons-png.flaticon.com/128/599/599388.png',
    //         name: 'jeans',
    //         quantity: 0,
    //         price: 1.2,
    //     },
    //     {
    //         id: 4,
    //         image: 'https://cdn-icons-png.flaticon.com/128/9431/9431166.png',
    //         name: 'Sweater',
    //         quantity: 0,
    //         price: 1.5,
    //     },
    //     {
    //         id: 5,
    //         image: 'https://cdn-icons-png.flaticon.com/128/3345/3345397.png',
    //         name: 'shorts',
    //         quantity: 0,
    //         price: 0.8,
    //     },
    //     {
    //         id: 6,
    //         image: 'https://cdn-icons-png.flaticon.com/128/293/293241.png',
    //         name: 'Sleeveless',
    //         quantity: 0,
    //         price: 0.2,
    //     },
    // ]
    return (
        <View style={styles.Item}>
            <Text>Items</Text>
            <View>
                {
                    typeService == "search"
                        ?
                        productSearch.length > 0
                            ?
                            productSearch.map((item, i) =>
                                <Pressable key={i} style={{ flexDirection: "row", justifyContent: "space-between", margin: 5, padding: 10, borderRadius: 10, backgroundColor: "white" }}>
                                    <Image style={{ width: 120, height: 120 }} source={{ uri: item.image }}></Image>
                                    <View style={{ width: 120 }} >
                                        <Text style={{ width: 150, height: 50, fontSize: 20 }}>{item.name}</Text>
                                        <Text style={{ fontSize: 10 }}>{item.note}</Text>
                                        <Text style={{ fontSize: 18, marginVertical: 20, color: "green" }}>{item.price} VNĐ</Text>
                                    </View>
                                    <View style={{ width: 100 }}>
                                        {
                                            (cart.some((c) => c.id === item.id))
                                                ?
                                                <Pressable
                                                    style={{
                                                        flexDirection: "row",
                                                        paddingHorizontal: 10,
                                                        paddingVertical: 5,
                                                    }}>
                                                    <Pressable
                                                        onPress={() => {
                                                            dispatch(decrementQty(item)) //product
                                                            dispatch(decrementQuantity(item)) //cart
                                                        }}
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
                                                        onPress={() => {
                                                            dispatch(incrementQty(item)) //product
                                                            dispatch(incrementQuantity(item)) //cart
                                                        }}
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
                                                :
                                                <Pressable onPress={() => addItemToCart(item)}>
                                                    <Text
                                                        style={{
                                                            marginVertical: 10,
                                                            color: "#088F8F",
                                                            textAlign: "center",
                                                            padding: 5,
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                        }}>Add</Text>
                                                </Pressable>
                                        }
                                    </View>
                                </Pressable>
                            )
                            :
                            <Text>Không có sản phẩm</Text>
                        :
                        product.map((item, i) =>
                            typeService.toLowerCase() == item.type
                                ?
                                <Pressable key={i} style={{ flexDirection: "row", justifyContent: "space-between", margin: 5, padding: 10, borderRadius: 10, backgroundColor: "white" }}>
                                    <Image style={{ width: 120, height: 120 }} source={{ uri: item.image }}></Image>
                                    <View style={{ width: 120 }} >
                                        <Text style={{ width: 150, height: 50, fontSize: 20 }}>{item.name}</Text>
                                        <Text style={{ fontSize: 10 }}>{item.note}</Text>
                                        <Text style={{ fontSize: 18, marginVertical: 20, color: "green" }}>{item.price} VNĐ</Text>
                                    </View>
                                    <View style={{ width: 100 }}>
                                        {
                                            (cart.some((c) => c.id === item.id))
                                                ?
                                                <Pressable
                                                    style={{
                                                        flexDirection: "row",
                                                        paddingHorizontal: 10,
                                                        paddingVertical: 5,
                                                    }}>
                                                    <Pressable
                                                        onPress={() => {
                                                            dispatch(decrementQty(item)) //product
                                                            dispatch(decrementQuantity(item)) //cart
                                                        }}
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
                                                        onPress={() => {
                                                            dispatch(incrementQty(item)) //product
                                                            dispatch(incrementQuantity(item)) //cart
                                                        }}
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
                                                :
                                                <Pressable onPress={() => addItemToCart(item)}>
                                                    <Text
                                                        style={{
                                                            marginVertical: 10,
                                                            color: "#088F8F",
                                                            textAlign: "center",
                                                            padding: 5,
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                        }}>Add</Text>
                                                </Pressable>
                                        }
                                    </View>
                                </Pressable>
                                :
                                <></>
                        )
                }
            </View>
        </View>
    )
}

export default Items

const styles = StyleSheet.create({
    Item: {
        margin: 5
    },
})