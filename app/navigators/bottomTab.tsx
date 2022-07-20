import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React, { FC } from "react"
import { Platform, View, ViewStyle } from "react-native"
import { ScaledSheet } from "react-native-size-matters"

import {
  AudioActiveSvg, HomeActiveSvg, ImageSvg, NewsActiveSvg,
  Star, VideoSvg
} from "../../assets/svgs"
import { Button, Text } from "../components"
import { translate } from "../i18n"
import { useStores } from "../models"
import { NewsScreen } from "../screens"
import AudioScreen from "../screens/audio/AudioScreen"
import LiveScreen from "../screens/live/LiveScreen"
import VideoScreen from "../screens/video/VideoScreen"
import { color, spacing } from "../theme"
import { fontFamily } from "../theme/fonts"


const TABBARBUTTON: ViewStyle = {
  marginTop: spacing[1],
  minWidth: 30,
}

export enum BottomTabRouteNames {
  home = "home",
  myNews = "myNews",
  images = "images",
  video = "video",
}
export type BottomTabParams = {
  myNews: undefined
  images: undefined
  video: undefined
  home: undefined
}


const tabbarCustom = [
  {
    index: 0,
    title: "home",
    icon: <HomeActiveSvg />,
    activeIcon: <HomeActiveSvg color={color.palette.redNature} />,
  },
  {
    index: 1,
    title: "video",
    icon: <Star />,
    activeIcon: <Star color={color.palette.redNature} />,
  },
  {
    index: 2,
    title: "images",
    icon: <ImageSvg />,
    activeIcon: <AudioActiveSvg color={color.palette.redNature} />,
  },
  {
    index: 3,
    title: "myNews",
    icon: <VideoSvg />,
    activeIcon: <NewsActiveSvg color={color.palette.redNature} />,
  },
]

export type title = keyof BottomTabParams

const Stack = createBottomTabNavigator<BottomTabParams>()

function TabBar({ state, descriptors, navigation }) {
  const { commonStore } = useStores()
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name
        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            commonStore.setRouteName(route.name)
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }

        return (
          <Button
            key={Math.random() * 999}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...TABBARBUTTON,
              backgroundColor: color.transparent,
            }}
          >
            {isFocused ? tabbarCustom[index].activeIcon : tabbarCustom[index].icon}
            <Text text={label} style={[styles.textActive, { color: isFocused ? color.palette.redNature : color.palette.lightGrey }]}></Text>
          </Button>
        )
      })}
    </View>
  )
}

const BottomTabNavigation: FC = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={BottomTabRouteNames.myNews}
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Stack.Screen
          name={BottomTabRouteNames.home}
          component={LiveScreen}
          options={{
            title: String(translate("BottomTab.home")),
          }}
        />
        <Stack.Screen
          name={BottomTabRouteNames.myNews}
          component={NewsScreen}
          options={{
            title: String(translate("BottomTab.myNews")),
          }}
        />
        <Stack.Screen
          name={BottomTabRouteNames.images}
          component={AudioScreen}
          options={{
            title: String(translate("BottomTab.images")),
          }}
        />
        <Stack.Screen
          name={BottomTabRouteNames.video}
          component={VideoScreen}
          options={{
            title: String(translate("BottomTab.video")),
          }}
        />

      </Stack.Navigator>
    </>
  )
}

export { BottomTabNavigation }

const styles = ScaledSheet.create({
  labelText: {
    fontWeight: "600",
    fontSize: "18@ms",
  },
  textActive: {
    fontSize: "10@ms",
    lineHeight: "12@ms",
    fontWeight: "500",
    marginTop: "4@ms",
    fontFamily: fontFamily.medium
  },
  tabBar: {
    flexDirection: "row",
    height: "60@s",
    /* paddingTop: spacing[1] + 2,
    paddingBottom: spacing[1] + 2,
    paddingLeft: spacing[4] + 4,
    paddingRight: spacing[4] + 4, */ // 20
    backgroundColor: color.palette.white,
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
      android: {
        elevation: 3
      }
    })
  }
})
