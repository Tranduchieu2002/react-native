import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ImageBackground, View } from 'react-native'
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
                    <Text style={styles.textDescBelow} text="PM demands TikTok take down graphic video" />
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = ScaledSheet.create({
    overLayDescribeBottom: {
        position: "absolute",
        top: "60%",
        bottom: 0,
        backgroundColor: "transparent",
        zIndex: 30,
        height: "40%",
        width: "100%",
    },
    textDescBelow: {
        color: "#fff",
        fontSize: "14@ms",
        lineHeight: 18,
        fontWeight: "600",
        fontFamily: fontFamily.medium,
        alignItems: "center",
        position: "absolute",
        bottom: 12,
        left: 16,
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