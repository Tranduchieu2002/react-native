import { observer } from "mobx-react-lite"
import * as React from "react"
import {
  RefreshControl, ScrollView, useWindowDimensions,
  View
} from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { TabView } from "react-native-tab-view"
import { Button } from "../components"
import { spacing } from "../theme"
import { fontFamily } from "../theme/fonts"

interface TabViewProps {
  routes: Array<any>
  renderScene: () => JSX.Element | null
}

const TabViewNavigator: React.FC<TabViewProps> = observer((props) => {
  const { routes, renderScene } = props
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const RenderTabBar = (props) => {
    const tabbarRef = React.useRef(null)
    const [refreshing, setRefreshing] = React.useState(false)

    const wait = (timeout: number) => {
      return new Promise((resolve) => setTimeout(resolve, timeout))
    }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true)
      wait(2000).then(() => setRefreshing(false))
    }, [])
    return (
      <ScrollView
        horizontal
        scrollEnabled
        contentContainerStyle={[styles.tabbarScroll]}
        style={styles.tabStyle}
        showsHorizontalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />}
      >
        <View style={[styles.tabBar]} ref={tabbarRef}>
          {props.navigationState.routes.map((route, i: number) => {
            const isForcused: boolean = i == index
            return (
              <Button
                key={i}
                activeOpacity={0.8}
                style={[styles.tabItem, { backgroundColor: isForcused ? "#fff" : "transparent" }]}
                onPress={() => {
                  setIndex(i)
                }}
                text={route.title}
                textStyle={isForcused ? styles.textActive : styles.text}
              ></Button>
            )
          })}
        </View>
      </ScrollView>
    )
  }
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      swipeEnabled={false}
      renderTabBar={(props) => <RenderTabBar {...props} index={index} />}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
})
const styles = ScaledSheet.create({
  tabBar: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tabbarScroll: {
    height: "24@s",
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
  },
  tabStyle: {
    flexGrow: 0,
    marginBottom: spacing[3],
  },
  tabItem: {
    paddingTop: spacing[1] + 2,
    paddingBottom: spacing[1] + 2,
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    borderRadius: spacing[1],
  },
  text: {
    color: "#B1B1B1",
    fontSize: spacing[2] + 2,
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: fontFamily.medium
  },
  textActive: {
    color: "#181818",
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 13,
    fontFamily: fontFamily.medium
  },
})
export default TabViewNavigator
