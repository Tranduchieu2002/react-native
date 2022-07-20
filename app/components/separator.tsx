import { StyleSheet, View } from "react-native"
import React from "react"
export const SeparatorCpn = (props) => {
    if (props.leadingItem)
        return (<View style={styles.separator}></View>)
    return null
}
const styles = StyleSheet.create({
    separator: {
        height: 1,
        flex: 1,
        width: "100%",
        backgroundColor: "#DEDEDE"
    },
})