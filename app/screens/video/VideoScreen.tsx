import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { translate } from '../../i18n'
import TabViewNavigator from '../../navigators/tab.navigator'
import { color, spacing } from '../../theme'
import TabAllVideoScreen from './tabview/tabAllVideoScreen'

type SceneNewScreen = {
  all: undefined
  news: undefined
  amonymous: undefined
  documentary: undefined
}
const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />

const renderScene = ({ route }: any): JSX.Element | null => {
  const key: keyof SceneNewScreen = route.key
  switch (key) {
    case "all":
      return <TabAllVideoScreen />
    case "news":
      return <SecondRoute />
    case "amonymous":
      return <FirstRoute />
    case "documentary":
      return <SecondRoute />
    default:
      return null
  }
}
export default function VideoScreen() {
  const [routes] = React.useState([
    { key: "all", title: String(translate(`videoScreen.tabView.all`)) },
    { key: "news", title: String(translate(`videoScreen.tabView.news`)) },
    {
      key: "amonymous",
      title: String(translate(`videoScreen.tabView.amonymous`)),
    },
    {
      key: "documentary",
      title: String(translate(`videoScreen.tabView.documentary`)),
    },
  ])

  return (
    <View style={styles.container}>
      <TabViewNavigator renderScene={renderScene} routes={routes} />
    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.deepBlack
  },
  emptyText: {
    color: color.palette.white
  },

  sections: {
    width: '100%',
  },
  item: {
    backgroundColor: color.palette.white,
    width: "100%",
    flexDirection: "row",
    marginBottom: spacing[2] + 2,
  },
})