/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useColorScheme } from "react-native";

import { observer } from "mobx-react-lite";
import AnimatedBannerWithSearchInput from "../animations/AnimatedBannerWithSearchInput/AnimatedBannerWithSearchInput";
import { useStores } from "../models";
import { DemoListScreen, DemoScreen, DetailNewScreen, RegisterScreen, WelcomeScreen, } from "../screens";
import { HomeScreen } from "../screens/home/homeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import { navigationRef, useBackButtonHandler } from "./navigation-utilities";
import { AppScreenNames, AuthNavigatorParamList, NavigatorParamList } from "./types";



// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={AppScreenNames.welcome}
    >
      <Stack.Screen name={AppScreenNames.detailNew} component={DetailNewScreen} />
      <Stack.Screen name={AppScreenNames.home} component={HomeScreen} />
      <Stack.Screen name={AppScreenNames.demoList} component={DemoListScreen} />
      <Stack.Screen name={AppScreenNames.welcome} component={WelcomeScreen} />
      <Stack.Screen name={AppScreenNames.animations} component={AnimatedBannerWithSearchInput} />
      <Stack.Screen name={AppScreenNames.demo} component={DemoScreen} />
    </Stack.Navigator>
  )
}




const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>()
const AuthNavigator = () => (
  <AuthStack.Navigator
    initialRouteName="register"
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="register" component={RegisterScreen} />
    <AuthStack.Screen name="login" component={LoginScreen} />
  </AuthStack.Navigator>
)



interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> { }

export const AppNavigator = observer((props: NavigationProps) => {
  const colorScheme = useColorScheme()
  const { authStore } = useStores()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      {!authStore.isAuthenticationed && <AuthNavigator />}
      {(authStore.isAuthenticationed && authStore.didTryAutoLogin) && <AppStack />}
    </NavigationContainer>
  )
})

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
