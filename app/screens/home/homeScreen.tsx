import { useTheme } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"
import React, { FC, useMemo } from "react"
import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "../../components"
import HeaderApp from "../../components/header-app/HeaderApp"
import { NavigatorParamList } from "../../navigators"
import { BottomTabNavigation } from "../../navigators/home-navigator"

export type NavigatorTopStackList = {
  news: undefined
  followingArticles: undefined
  setting: undefined
  // something navigtors will be wrire below here
}
interface Articles {
  id: string
  name: string
  image: string
  jobTitle: string
  email: string
}
interface Props {
  children?: React.ReactNode
  cardBgColor?: string
  textColor?: string
  listArticles?: Array<Articles>
}

/* function SettingsScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  )
} */

const HOMECONTAINER: ViewStyle = {
  flex: 1,
}
export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = () => {
  const { colors } = useTheme()

  // Re-render Counter
  // END Re-render Counter
  const DATA: Articles[] = useMemo(
    () =>
      [...Array(50)].map(() => {
        const randomWithLimited60 = Math.round(Math.random() * 60)
        return {
          id: String(Math.random() * 999),
          /* https://randomuser.me/api/portraits/women/11.jpg */
          image: `https://randomuser.me/api/portraits/${["women", "men"][Math.round(Math.random() * 1)]
            }/${randomWithLimited60}.jpg`,
          name: "Tran Hieu",
          jobTitle:
            "Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          email: "Hieu@gmail.cómn",
        }
      }),
    [],
  )
  if (DATA.length < 0) return <Text tx="errorScreen.title" style={{ color: colors.primary }}></Text>
  return (
    <SafeAreaView style={{ ...HOMECONTAINER }}>
      <HeaderApp />
      <BottomTabNavigation />
    </SafeAreaView>
  )
}
