import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../models'
import { ScaledSheet } from 'react-native-size-matters'
import { color } from '../../theme'
const LiveScreen = observer(() => {
  const { authStore } = useStores()
  const { signup, user, isAuthenticationed } = authStore

  return (
    <View style={styles.container}>
      <Text>LiveScreen</Text>
    </View>
  )
})
export default LiveScreen
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.deepBlack
  }
})