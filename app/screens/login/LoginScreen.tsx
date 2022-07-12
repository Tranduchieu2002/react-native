import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RegisterForm from '../../components/Form/registerForm'
import { AuthNavigatorParamList } from '../../navigators'
import { color } from '../../theme'



const LoginScreen: FC<StackScreenProps<AuthNavigatorParamList, "login">> = ({ navigation }) => {
    return (
        <View style={styles.REGISTERCONTAINER}>
            <Text>LoginScreen</Text>
            <RegisterForm gotoHome={() => navigation.navigate("home")} isLoginScreen={true} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    REGISTERCONTAINER: {
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: "center",
        flex: 1,
        backgroundColor: color.palette.white,
    }
})