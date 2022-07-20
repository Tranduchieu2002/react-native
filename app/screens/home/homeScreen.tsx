import { StackScreenProps } from "@react-navigation/stack"
import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HeaderApp from "../../components/header-app/HeaderApp"
import { NavigatorParamList } from "../../navigators"
import { BottomTabNavigation } from "../../navigators/bottomTab"
import { color } from "../../theme"



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
export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = ({route}) => {
  // Re-render Counter
  // END Re-render Counter
  return (
    <SafeAreaView style={{ ...HOMECONTAINER, backgroundColor: color.palette.white }}>
      <HeaderApp />
      <BottomTabNavigation />
    </SafeAreaView>
  )
}
