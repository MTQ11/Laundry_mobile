import { StyleSheet, View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import React from 'react'

const ImageSlide = () => {
  const images = [
    "https://tse3.mm.bing.net/th?id=OIP.pdR9QbovI_yGhyy6XYgGDQHaFJ&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.ZzmAoPnlAMg5-l1-tah-cQHaE8&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.Ri1K6sIyuKuvJNJI9-xXFgHaE8&pid=Api&P=0&h=180"
  ]
  return (
    <View style={styles.ImageSlide}>
      <SliderBox
        // autoplay
        // circleLoop
        dotColor="#FFEE58"
        ImageComponentStyle={{borderRadius: 15, width: '95%'}}
        images={images} />
    </View>
  )
}

export default ImageSlide

const styles = StyleSheet.create({
  ImageSlide: {
    marginVertical: 10
  }
})