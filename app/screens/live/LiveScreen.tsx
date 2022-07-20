import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { translate } from '../../i18n'
import TabViewNavigator from '../../navigators/tab.navigator'
import { color } from '../../theme'
import AllScreen from './tabViews/allScreen'

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

const renderScene : any = ({ route }): JSX.Element | null => {
  const key = route.key
  switch (key) {
    case "all":
      return <AllScreen />
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
const LiveScreen : FC = observer(() => {
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
    <View style={styles.container}>
      <TabViewNavigator routes={routes} renderScene={renderScene} />
    </View>
  )
})
export default LiveScreen
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.white
  }
})