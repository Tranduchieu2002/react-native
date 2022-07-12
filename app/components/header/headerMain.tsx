import { View, Text, ViewStyle } from "react-native"
import React from "react"
import { AutoImage as Image } from "../auto-image/auto-image"
import { Icon } from "../icon/icon"
const HeaderMain = () => {
  const HeaderContainer: ViewStyle = {
    height: 44,
    flex: 1,
  }
  return (
    <View>
      <Icon icon="logo" style={{ height: "100%" }} />
    </View>
  )
}

export default HeaderMain
