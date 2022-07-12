import { LinearGradient } from 'expo-linear-gradient'
import React, { useCallback, useRef } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Video, { VideoProperties } from 'react-native-video'
import { fontFamily } from '../../theme/fonts'
import { Text } from '../text/text'

export default function CarouselSlideVideo() {
    const videoRef = useRef<VideoProperties>(null)
    const _onError = useCallback(() => {
        console.log("error");
    }, [])
    return (
        <View style={styles.videoContainer}>
            <Video
                ref={videoRef} style={styles.video}
                onError={_onError}
                controls={true}
                playInBackground
                playWhenInactive
                source={{ uri: "https://v16-webapp.tiktok.com/6751a58b11bc4cd4c6b923dced024498/62c85304/video/tos/useast2a/tos-useast2a-pve-0037-aiso/010d154775d4425a91ab32a7390d9f0c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3838&bt=1919&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZzL~Mwe2NHpHrl7Gb&mime_type=video_mp4&qs=0&rc=aDk7NGc6OGRpaTYzaWZkOEBpMzloOmQ6Zjc0ZTMzZjgzM0AvMDEuLzI2Xy4xYWJhYmAxYSNvX3JmcjRfMC9gLS1kL2Nzcw%3D%3D&l=202207080953240102510031890E255342" }}>
            </Video>
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