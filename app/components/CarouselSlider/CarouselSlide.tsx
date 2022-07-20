import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { fontFamily } from '../../theme/fonts'
import { Text } from '../text/text'

export default function CarouselSlide({
  item
}) {
  return (
    <View>
      <ImageBackground source={item.image} style={styles.image}>
      <LinearGradient
        colors={["rgba(24, 24, 24,0.0)", "#181818"]}
        style={styles.overLayDescribeBottom}
      >
        <Text style={styles.textDescBelow} text={item.jobTitle} textBreakStrategy="highQuality" />
      </LinearGradient>
      </ImageBackground>
    </View>
  )
}

const styles = ScaledSheet.create({
  slideView: {
    width: "100%",
    height: "100%",
  },
  overLayDescribeBottom: {
    position: "absolute",
    top: "50%",
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 30,
    height: "50%",
    width: "100%",
  },
  textDescBelow: {
    marginHorizontal: 16,
    color: "#fff",
    fontSize: "15@ms",
    lineHeight: 23,
    fontWeight: "800",
    fontFamily: fontFamily.medium,
    alignItems: "center",
    position: "absolute",
    bottom: 30,
  },
  imageWraper: {
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 10,
  },
})
/* 
const ImageItem = ({ item }) => {
  return (
    <>
      <ImageBackground source={item.image} style={styles.image}>
        <LinearGradient
          colors={["rgba(24, 24, 24,0.0)", "#181818"]}
          style={styles.overLayDescribeBottom}
        >
          <Text style={styles.textDescBelow} text="PM demands TikTok take down graphic video" />
        </LinearGradient>
      </ImageBackground>
    </>
  )
}
 */