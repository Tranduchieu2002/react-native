import React from "react"
import { View } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { MenuSvg, SearchSvg } from "../../../assets/svgs"
import { color, spacing } from "../../theme"
import { fontFamily } from "../../theme/fonts"
import { Text } from "../text/text"
const HeaderApp = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <MenuSvg />
        <View style={styles.textWrap}>
          <Text text={"Trang thông tin"} style={styles.smallText}></Text>
          <Text text={"Đối Ngoại"} style={[styles.mainTitle, styles.bigText]}></Text>
        </View>
        <SearchSvg />
      </View>
      <View style={styles.borderBottomHeader}>
      </View>
    </View>
  )
}

export default HeaderApp

const styles = ScaledSheet.create({
  headerContainer: {
    width: '100%',
    height: "53@vs",
    position: "relative",
    backgroundColor: color.transparent
  },
  header: {
    height: "50@vs",
    width: "100%",
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
    backgroundColor: color.palette.deepBlack,
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    borderBottomLeftRadius: "25@ms",
    borderBottomRightRadius: "25@ms",
    zIndex: 999,
  },
  borderBottomHeader: {
    position: "absolute",
    zIndex: 10,
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: "25@ms",
    borderBottomRightRadius: "25@ms",
    backgroundColor: color.palette.redNature,
  },
  textWrap: {
    alignItems: "center",
  },
  mainTitle: {
    color: color.palette.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
  smallText: {
    fontFamily: fontFamily.semiBold,
    fontSize: "10@ms",
    fontWeight: "600"
  },
  bigText: {
    fontSize: "24@ms",
    fontWeight: "700",
    fontFamily: fontFamily.utmTimesBold,
  }
})
