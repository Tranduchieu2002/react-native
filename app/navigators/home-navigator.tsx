import React, { FC } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TextStyle, View, ViewStyle } from "react-native"
import { s, ScaledSheet } from "react-native-size-matters"

import {
  AudioSvg,
  AudioActiveSvg,
  LiveActiveSvg,
  LiveSvg,
  NewsSvg,
  VideoActiveSvg,
  VideoSvg,
  NewsActiveSvg,
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
  backgroundColor: color.palette.deepBlack,
  alignItems: "center",
  justifyContent: "space-between",
}

const TABBARBUTTON: ViewStyle = {
  marginTop: spacing[1],
  minWidth: 30,
}

const FORCUSICON: ViewStyle = {}

export enum RouteNames {
  live = "live",
  news = "news",
  audio = "audio",
  video = "video",
}

const tabbarCustom = [
  {
    index: 0,
    title: "live",
    icon: <LiveSvg />,
    activeIcon: <LiveActiveSvg />,
  },
  {
    index: 1,
    title: "video",
    icon: <VideoSvg />,
    activeIcon: <VideoActiveSvg />,
  },
  {
    index: 2,
    title: "audio",
    icon: <AudioSvg />,
    activeIcon: <AudioActiveSvg />,
  },
  {
    index: 3,
    title: "news",
    icon: <NewsSvg />,
    activeIcon: <NewsActiveSvg />,
  },
]
export type BottomTabParams = {
  news: undefined
  audio: undefined
  video: undefined
  live: undefined
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
            <Text text={label} style={TABBARTEXT}></Text>
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
        initialRouteName={RouteNames.news}
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Stack.Screen
          name={RouteNames.live}
          component={LiveScreen}
          options={{
            title: String(translate("BottomTab.live")),
          }}
        />
        <Stack.Screen
          name={RouteNames.video}
          component={VideoScreen}
          options={{
            title: String(translate("BottomTab.video")),
          }}
        />
        <Stack.Screen
          name={RouteNames.audio}
          component={AudioScreen}
          options={{
            title: String(translate("BottomTab.audio")),
          }}
        />
        <Stack.Screen
          name={RouteNames.news}
          component={NewsScreen}
          options={{
            title: String(translate("BottomTab.news")),
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
    backgroundColor: color.palette.deepBlack
  },
})
const TABBARTEXT: TextStyle = {
  fontFamily: fontFamily.medium,
  fontWeight: "500",
  fontSize: spacing[3],
  color: color.palette.neutralWhite,
}
