import React, { FC } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TextStyle, View, ViewStyle } from "react-native"
import { s, ScaledSheet } from "react-native-size-matters"

import {
  AudioSvg,
  AudioActiveSvg,
  LiveActiveSvg,
  HomeActiveSvg,
  NewsSvg,
  VideoActiveSvg,
  VideoSvg,
  NewsActiveSvg,
  Star,
  ImageSvg,
} from "../../assets/svgs"
import { Button, Text } from "../components"
import { NewsScreen } from "../screens"
import AudioScreen from "../screens/audio/AudioScreen"
import LiveScreen from "../screens/live/LiveScreen"
import VideoScreen from "../screens/video/VideoScreen"
import { color, spacing } from "../theme"
import { translate } from "../i18n"
import { useStores } from "../models"
import { fontFamily } from "../theme/fonts"

const TABBAR: ViewStyle = {
  flexDirection: "row",
  height: s(60),
  paddingTop: spacing[1] + 2,
  paddingBottom: spacing[1] + 2,
  paddingLeft: spacing[4] + 4,
  paddingRight: spacing[4] + 4, // 20
  borderTopLeftRadius: spacing[3] + 1,
  borderTopRightRadius: spacing[3] + 1,
  backgroundColor: color.palette.white,
  alignItems: "center",
  justifyContent: "space-between",
}

const TABBARBUTTON: ViewStyle = {
  marginTop: spacing[1],
  minWidth: 30,
}

const FORCUSICON: ViewStyle = {}

export enum RouteNames {
  home = "home",
  myNews = "myNews",
  images = "images",
  video = "video",
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
    activeIcon: <Star color={color.palette.redNature}  />,
  },
  {
    index: 2,
    title: "images",
    icon: <ImageSvg />,
    activeIcon: <AudioActiveSvg color={color.palette.redNature}  />,
  },
  {
    index: 3,
    title: "myNews",
    icon: <VideoSvg />,
    activeIcon: <NewsActiveSvg color={color.palette.redNature} />,
  },
]
export type BottomTabParams = {
  myNews: undefined
  images: undefined
  video: undefined
  home: undefined
}

export type title = keyof BottomTabParams

const Stack = createBottomTabNavigator<BottomTabParams>()

function TabBar({ state, descriptors, navigation }) {
  const { commonStore } = useStores()
  return (
    <View style={TABBAR}>
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
            <Text text={label} style={[TABBARTEXT, { color: isFocused ? color.palette.redNature : color.palette.lightGrey }]}></Text>
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
        initialRouteName={RouteNames.myNews}
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Stack.Screen
          name={RouteNames.home}
          component={LiveScreen}
          options={{
            title: String(translate("BottomTab.home")),
          }}
        />
        <Stack.Screen
          name={RouteNames.myNews}
          component={NewsScreen}
          options={{
            title: String(translate("BottomTab.myNews")),
          }}
        />
        <Stack.Screen
          name={RouteNames.images}
          component={AudioScreen}
          options={{
            title: String(translate("BottomTab.images")),
          }}
        />
        <Stack.Screen
          name={RouteNames.video}
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
    fontWeight: "bold",
    fontSize: 18,
  },
  tabbar: {
    height: "61@ms",
    backgroundColor: color.palette.white
  },
  textActive: {
    fontSize: "10@sm",
    lineHeight: "12@sm",
    color: color.palette.redNature
  }
})
const TABBARTEXT: TextStyle = {
  fontFamily: fontFamily.medium,
  fontWeight: "500",
  fontSize: spacing[3],
  color: color.palette.neutralWhite,
}
