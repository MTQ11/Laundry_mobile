import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../slice/CartSlice';
import { resetProduct } from '../slice/ProductSlice';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Cart = (props) => {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const navigator = useNavigation()
    const [totalItem, setTotalItem] = useState(0)
    const [totalPay, setTotalPay] = useState(0)
    useEffect(() => {
        setTotalItem(FntotalItem())
        setTotalPay(FntotalPay())
    }, [cart])
    const FntotalItem = () => {
        let sum = 0;
        cart.map((item) => {
            sum = sum + item.quantity;
        });
        return sum;
    }
    const FntotalPay = () => {
        let sum = 0
        cart.map((item) => {
            sum = sum + item.price * item.quantity;
        });
        return sum.toFixed(1);
    }
    return (
        <>
            {
                cart.length > 0
                    ?
                    <View style={{ margin: 10, padding: 5,  backgroundColor: "#019417", borderRadius: 10}}>
                        <Pressable
                            onPress={() => {
                                dispatch(resetCart())
                                dispatch(resetProduct())
                            }}>
                            <AntDesign name="closecircleo" size={24} color="black" />
                        </Pressable>
                        <View style={{ height: 100, flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                            <View style={{ width: 120, flexDirection: "row", justifyContent: "space-between" }}>
                                <Feather name="shopping-cart" size={35} color="black" />
                                <View>
                                    <Text>{totalItem} items</Text>
                                    <Text>Total: {totalPay}$</Text>
                                </View>
                            </View>
                            <Pressable 
                                onPress={navigator.navigate(props.navigator)}
                                style={{
                                    backgroundColor: "white "
                                }}
                            >
                                <Text>{props.button}</Text>
                            </Pressable>
                        </View>
                    </View>
                    :
                    null
            }
        </>
    )
}

export default Cart

const styles = StyleSheet.create({})