import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './component/Header'
import ImageSlide from './component/ImageSlide'
import Service from './component/Services'
import Items from './component/Items'

const Home = () => {
    return (
        <View style={{backgroundColor: "#F0F0F0", paddingTop: 25}}>
           <Header></Header>
           <ImageSlide></ImageSlide>
           <Service></Service>
           <Items></Items>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})