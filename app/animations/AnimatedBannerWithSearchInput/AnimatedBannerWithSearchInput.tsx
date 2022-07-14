import React, { useRef } from 'react';
import {
  Animated, Easing, NativeScrollEvent,
  NativeSyntheticEvent, Platform, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View
} from 'react-native';
import { Text } from '../../components';
import BackgroundImageItem from '../../components/backgroundImage/BackgroundImage';
import { useDimensions } from '../../hooks/useDemission';

export default ({ navigation }: any) => {
  const { height } = useDimensions("window")
  const animatedValue = useRef(new Animated.Value(0)).current;
  const bannerAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 224],
          outputRange: [1, 2],
          extrapolate: "clamp"
        })
      }
    ]
  }
  const searchInputContainerAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [0, 1],
      extrapolate: "clamp"
    })
  }
  const backIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 224],
      outputRange: [1, 0],
      extrapolate: "clamp"
    }),
  }
  const wrapTextBannerAnimation = {
    transform: [{
      translateY: animatedValue.interpolate({
        inputRange: [0, 250],
        outputRange: [0, -174],
        extrapolate: "clamp",
        easing: Easing.linear
      }),
    }, {
      scale: animatedValue.interpolate({
        inputRange: [0, 40],
        outputRange: [1, 0.9],
        extrapolate: "clamp"
      })
    }]
  }
  const textBannerAnimation = {
    fontSize: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [16, 12]
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      {/* <Animated.View
        style={[styles.searchInputContainer, searchInputContainerAnimation]}>
        <SafeAreaView />
        <SearchInput editable={false} pointerEvents="none" />
      </Animated.View> */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Animated.Image
          source={require('../../components/icon/icons/arrow-left.png')}
          style={[styles.backIcon, backIconAnimation]}
        />
      </TouchableOpacity>
      {/*<TouchableOpacity style={styles.searchButton}>
        <Animated.Image
          source={require('../../images/food-app/search.png')}
          style={[styles.searchIcon, searchIconAnimation]}
        />
      </TouchableOpacity>*/}
      <View style={styles.bannerContainer}>
        <Animated.View style={[bannerAnimation]}>
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
        scrollEventThrottle={16}>
        <View style={styles.paddingForBanner} />
        <View style={[styles.scrollViewContent, { height }]} />
      </ScrollView>
    </View>
  );
};

const BANNER_HEIGHT = 224;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchButton: {
    position: 'absolute',
    right: 0,
    top: 48,
    width: 48,
    height: 48,
    zIndex: 100,
  },
  searchIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
    zIndex: 50,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 48,
    width: 48,
    height: 48,
    zIndex: 100,
  },
  backIcon: {
    width: 16,
    height: 16,
    tintColor: 'white',
    zIndex: 50,
  },
  searchInputContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
  wraperTextBanner: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 100,
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
  },
  paddingForBanner: {
    height: BANNER_HEIGHT,
  },
  scrollViewContent: {
    backgroundColor: 'white',
  },
});
