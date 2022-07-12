import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Text } from "../../components"
import RegisterForm from "../../components/Form/registerForm"
import { NavigatorParamList } from "../../navigators"
import { color } from "../../theme"


const TITLEWRAPPER: ViewStyle = {
  marginTop: 40,
  marginBottom: 52,
}

const TITLE: TextStyle = {
  color: "#000",
  textAlign: "left",
  fontSize: 25,
  lineHeight: 34,
  fontFamily: "Manrope",
  fontWeight: "600",
  fontStyle: "normal",
}
const DESCRIPTITONTITLE: TextStyle = {
  color: "#999EA1",
  fontSize: 14,
  fontFamily: "Manrope",
  lineHeight: 19,
  fontWeight: "600",
  fontStyle: "normal",
}
const REGISTERCONTAINER: ViewStyle = {
  paddingLeft: 30,
  paddingRight: 30,
  justifyContent: "center",
  flex: 1,
  backgroundColor: color.palette.white,
}
export const RegisterScreen: FC<StackScreenProps<NavigatorParamList, "register">> = observer(
  ({ navigation }) => {
    const gotoHome = () => navigation.navigate("home")
    return (
      <View style={REGISTERCONTAINER}>
        <View style={TITLEWRAPPER}>
          <Text tx="RegisterScreen.title" style={TITLE}></Text>
          <Text tx="RegisterScreen.descriptionTitle" style={DESCRIPTITONTITLE}></Text>
        </View>
        <RegisterForm gotoHome={gotoHome} />
        <Text text="Home Screen"></Text>
      </View>
    )
  },
)
