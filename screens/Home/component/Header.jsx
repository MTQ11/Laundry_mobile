import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location'

const Header = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);


    // lấy địa chỉ
    const getPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let { coords } = await Location.getCurrentPositionAsync();
        if (coords) {
            const { latitude, longitude } = coords;
            console.log("coords: ", coords)
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            console.log("response: ", response)

            for (let item of response) {
                let address = `${item.city} ${item.country} ${item.postalCode}`;
                setLocation(address);
            }
        }
        console.log("Location: ", location)
    }



    useEffect(() => {
        getPermission()
    }, [])
    return (
        <View>
            <View style={{flexDirection: "row", alignItems: "center", padding: 10}}>
                <Entypo name="location" size={30} color="red" />
                <View>
                    <Text>Home</Text>
                    <Text style={styles.paragraph}>{location}</Text>
                </View>
                <Image style={{ width: 50, height: 50, borderRadius: 50, marginLeft: "auto", marginRight: 7 }} source={{ uri: "https://yt3.ggpht.com/yti/AOXPAcXCZI-YFRcjBulRs-YgyY1zJ20Ud0uF1RtA9swf=s88-c-k-c0x00ffffff-no-rj" }}></Image>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 50, paddingHorizontal: 10, marginHorizontal: 10, borderWidth: 0.8, borderColor: "grey", borderRadius: 10}}> 
                <TextInput placeholder='Search item'></TextInput>
                <FontAwesome name="search" size={24} color="black" />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})