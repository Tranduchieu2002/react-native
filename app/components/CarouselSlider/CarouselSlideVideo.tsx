import { LinearGradient } from 'expo-linear-gradient'
import React, { useCallback, useRef } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { VideoProperties } from 'react-native-video'
import { fontFamily } from '../../theme/fonts'
import { Text } from '../text/text'

export default function CarouselSlideVideo() {
    const videoRef = useRef<VideoProperties>(null)
    const _onError = useCallback(() => {
        console.log("error");
    }, [])
    return (
        <View style={styles.videoContainer}>
            <LinearGradient
                colors={["rgba(24, 24, 24,0.0)", "#181818"]}
                style={styles.overLayDescribeBottom}
            >
                <Text style={styles.textDescBelow} text="PM demands TikTok take down graphic video" />
            </LinearGradient>
        </View>
    )
}

const styles = ScaledSheet.create({
    videoContainer: {
        flex: 1,
    },
    video: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        zIndex: 10,
    },
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
})