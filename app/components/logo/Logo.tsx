import React, { FC } from "react"
import { StyleSheet, Text, TextStyle, View } from "react-native"
import { AutoImage as Image } from "../auto-image/auto-image"
const LogoImage = require("../../../assets/images/logo.png")
interface LogoProps {
  styles?: string
}

const TEXTLOGO: TextStyle = {
  fontSize: 30,
  fontWeight: "900",
  fontFamily: "SF Pro Display",
  lineHeight: 36,
  borderWidth: 1,
  borderColor: " #FFFFFF",
}

export const Logo: FC<LogoProps> = ({ styles }: LogoProps) => {
  return (
    <View>
      <Image
        source={{
          uri: LogoImage,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
