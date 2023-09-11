import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Header from './component/Header'
import ImageSlide from './component/ImageSlide'
import Service from './component/Services'
import Items from './component/Items'
import Cart from '../../components/Cart'

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <Header></Header>
            <ImageSlide></ImageSlide>
            <Service></Service>
            <Items></Items>
            <Cart
                button="PickUp"
                navigator="PickUp"
            ></Cart>
        </ScrollView >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        paddingTop: 25
    }
});