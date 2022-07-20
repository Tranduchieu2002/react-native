import React, { FC, useRef } from 'react';
import { Animated, Easing, NativeScrollEvent, NativeSyntheticEvent, StatusBar, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../../components';
import BackgroundImageItem from '../../components/backgroundImage/BackgroundImage';
import { useDimensions } from '../../hooks/useDemission';
import { RootStackScreenProps } from '../../navigators';

const BANNER_HEIGHT = 340;
const OPTIONBAR_HEIGHT = 48
const FONTSIZE = 26
const FONTSIZEAFTERSCROLLDOWN = 10
const { width: w, } = Dimensions.get('window')
const SPACCEINDEND = 40
const INDENTEDCONTENT = BANNER_HEIGHT - SPACCEINDEND
export const DetailNewScreen: FC<RootStackScreenProps<"detailNew">> = ({ navigation, route }) => {
    const id = route.params.newId
    const { height } = useDimensions("window")
    const animatedValue = useRef(new Animated.Value(0)).current;
    const bannerAnimation = {
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, BANNER_HEIGHT + OPTIONBAR_HEIGHT],
                    outputRange: [1, 2],
                    extrapolate: "clamp"
                })
            }
        ]
    }
    const wrapTextBannerAnimation = {
        fontSize: animatedValue.interpolate({
            inputRange: [0, BANNER_HEIGHT + OPTIONBAR_HEIGHT],
            outputRange: [FONTSIZE, FONTSIZEAFTERSCROLLDOWN],
            extrapolate: "clamp",
            easing: Easing.linear
        }),
        width: animatedValue.interpolate({
            inputRange: [0, BANNER_HEIGHT + OPTIONBAR_HEIGHT],
            outputRange: [w - 30, w - 120], // [0 - paddingX , 0 - paddingX - PaddingheadBar],
            extrapolate: "clamp",
            easing: Easing.linear
        }),
        transform: [{
            translateY: animatedValue.interpolate({
                inputRange: [0, BANNER_HEIGHT + OPTIONBAR_HEIGHT],
                outputRange: [-SPACCEINDEND, -(BANNER_HEIGHT - OPTIONBAR_HEIGHT + SPACCEINDEND + 10)],
                // move text to top position of the screen
                extrapolate: "clamp",
                easing: Easing.linear
            }),
        },
        /* {
            scale: animatedValue.interpolate({
                inputRange: [0, 40],
                outputRange: [1, 0.9],
                extrapolate: "clamp"
            })
        } */],

    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={[styles.searchInputContainer]}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Animated.Image
                        source={require('../../components/icon/icons/arrow-left.png')}
                        style={[styles.backIcon]}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Animated.Image
                        source={require('../../components/icon/icons/arrow-left.png')}
                        style={[styles.backIcon]}
                    />
                </TouchableOpacity>
            </View>
            {/*<TouchableOpacity style={styles.searchButton}>
          <Animated.Image
            source={require('../../images/food-app/search.png')}
            style={[styles.searchIcon, searchIconAnimation]}
          />
        </TouchableOpacity>*/}
            <View style={styles.bannerContainer}>
                <Animated.View >
                    <BackgroundImageItem
                        style={styles.banner}
                        urlImage={"https://thienthoi.com.vn/wp-content/uploads/2020/09/nhung-luu-y-khi-thiet-ke-banner-cho-website.jpg"}
                    />
                </Animated.View>
                <Animated.View style={[styles.wraperTextBanner, wrapTextBannerAnimation]}>
                    <Text text="Tổng thư ký Liên hợp quốc đánh giá cao nỗ lực của Việt Nam trong chống biến đổi khí hậu" numberOfLines={2} style={[styles.textBanner]}></Text>
                </Animated.View>
            </View>
            <ScrollView
                onScroll={(nativeEvent: NativeSyntheticEvent<NativeScrollEvent>) => {
                    animatedValue.setValue(nativeEvent.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}
            >
                <View style={styles.paddingForBanner} />
                <View style={[styles.scrollViewContent, { height }]} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    backButton: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 100,
    },
    backIcon: {
        width: 17,
        height: 17,
        tintColor: 'white',
        zIndex: 50,
    },
    searchInputContainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        flexDirection: "row",
        alignSelf: 'center',
        zIndex: 100,
        width: '90%',
        top: 10,
        marginHorizontal: -16,
    },
    wraperTextBanner: {
        position: "absolute",
        bottom: 20,
        zIndex: 100,
        alignSelf: 'center',
    },
    textBanner: {
        color: 'black',
        fontWeight: 'bold',
        lineHeight: 16,
    },
    bannerContainer: {
        position: 'absolute',
        height: BANNER_HEIGHT,
        width: '100%',
    },
    banner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    paddingForBanner: {
        height: INDENTEDCONTENT
    },
    scrollViewContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
})