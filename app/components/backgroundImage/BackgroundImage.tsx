import React from 'react'
import { ImageBackground, ImageSourcePropType, StyleSheet, View, ViewStyle } from 'react-native'

interface BackgroundImageProps {
    image?: ImageSourcePropType,
    urlImage?: string,
    style?: ViewStyle
}

const BackgroundImageItem = ({
    image,
    urlImage,
    style
}: BackgroundImageProps) => {
    return (
        <View style={[styles.container, style]} >
            {
                image && <ImageBackground source={image} style={styles.image} />
            }
            {
                urlImage && <ImageBackground source={{
                    uri: urlImage
                }}
                    style={styles.image}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
    },
    container: {
        width: 150,
        height: 100,
    }
})


export default BackgroundImageItem
