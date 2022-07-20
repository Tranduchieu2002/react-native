import { observer } from "mobx-react-lite"
import * as React from "react"
import {
  Platform,
  RefreshControl, ScrollView, useWindowDimensions,
  View
} from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { TabView } from "react-native-tab-view"
import { Button } from "../components"
import { color, spacing } from "../theme"
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
                style={[styles.tabItem]}
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
      style={styles.tabContainer}
      swipeEnabled={false}
      renderTabBar={(props) => <RenderTabBar {...props} index={index} />}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
})
const styles = ScaledSheet.create({
  tabContainer: {
  },
  tabBar: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tabbarScroll: {
    height: "24@s",
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    ...Platform.select({
      android: { elevation: 4 },
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
  tabStyle: {
    flexGrow: 0,
    marginBottom: "12@vs",
    marginTop: "12@vs",
  },
  tabItem: {
    paddingTop: spacing[1] + 2,
    paddingBottom: spacing[1] + 2,
    borderRadius: spacing[1],
    backgroundColor: color.transparent,
    margin: 0,
    marginHorizontal: 0,
  },
  text: {
    color: "#B1B1B1",
    fontSize: spacing[2] + 2,
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: fontFamily.medium,
    paddingHorizontal: 0,
  },
  textActive: {
    color: color.palette.redNature,
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 13,
    paddingHorizontal: 0,
    fontFamily: fontFamily.medium,
    borderBottomColor: color.palette.redNature,
    borderBottomWidth: "1@ms"
  },
  tabItemActive: {
    borderBottomColor: color.palette.redNature,
    borderBottomWidth: "2@ms"
  }
})
export default TabViewNavigator
