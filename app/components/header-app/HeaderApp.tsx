import { StyleSheet, View } from "react-native"
import React from "react"
import { color, spacing } from "../../theme"
import { MenuSvg, SearchSvg } from "../../../assets/svgs"
import { Text } from "../text/text"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"
import { translate } from "../../i18n"
import { fontFamily } from "../../theme/fonts"
const HeaderApp = () => {
  const { commonStore } = useStores()
  const { routeName } = commonStore

  const headerTitle = translate(`BottomTab.${routeName}`)
  return (
    <View style={styles.header}>
      <SearchSvg />
      <Text text={String(headerTitle)} style={styles.mainTitle}></Text>
      <MenuSvg />
    </View>
  )
}

export default observer(HeaderApp)

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
  },
  header: {
    justifyContent: "space-between",
    height: 36,
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    backgroundColor: color.palette.deepBlack
  },
  mainTitle: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18,
    color: color.palette.white,
    textAlign: "center",
    fontFamily: fontFamily.medium
  },
})
