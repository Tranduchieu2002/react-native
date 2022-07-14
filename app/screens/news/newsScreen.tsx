import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { translate } from "../../i18n"
import TabViewNavigator from "../../navigators/tab.navigator"
import AllNewsScreen from "./AllNewsScreen"

interface Props {
  children?: React.ReactNode
  cardBgColor?: string
  textColor?: string
}

/* function SettingsScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  )
} */

const FULL = {
  flex: 1,
}
const NEWSSCREEN: ViewStyle = {
  ...FULL,
  backgroundColor: "#000",
}

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#ff4081" }} />

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />



type SceneNewScreen = {
  all: undefined
  politics: undefined
  cultureAndsports: undefined
  socioeconomic: undefined
}

type Routes = {
  key: keyof SceneNewScreen
  title: string
}
const renderScene = ({ route }): JSX.Element | null => {
  const key = route.key
  switch (key) {
    case "all":
      return <AllNewsScreen />
    case "politics":
      return <SecondRoute />
    case "cultureAndsports":
      return <FirstRoute />
    case "socioeconomic":
      return <SecondRoute />
    default:
      return null
  }
}
// itemsize is height of the article to apply animation
export const NewsScreen: FC<Props> = ({ }: Props) => {

  const [routes] = React.useState<Routes[]>([
    { key: "all", title: String(translate(`Newsscreen.tabView.all`)) },
    { key: "politics", title: String(translate(`Newsscreen.tabView.politics`)) },
    {
      key: "cultureAndsports",
      title: String(translate(`Newsscreen.tabView.culture-sports`)),
    },
    {
      key: "socioeconomic",
      title: String(translate(`Newsscreen.tabView.Socioeconomic`)),
    },
  ])

  return (
    <View style={NEWSSCREEN}>
      <TabViewNavigator routes={routes} renderScene={renderScene} />
    </View>
  )
}
