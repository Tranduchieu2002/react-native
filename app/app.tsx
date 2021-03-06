/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import messaging from '@react-native-firebase/messaging';
import React, { useEffect, useState } from "react";
import SplashScreen from 'react-native-splash-screen';
import { View } from "react-native";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import { version } from '../package.json';
import { ToggleStorybook } from "../storybook/toggle-storybook";
import ModalUpdateLatestVesion from "./components/modal/ModalUpdateLatestVesion";
import "./i18n";
import { RootStore, RootStoreProvider, setupRootStore } from "./models";
import { AppNavigator, useNavigationPersistence } from "./navigators";
import { ErrorBoundary } from "./screens/error/error-boundary";
import { getVersion } from "./services/firebase";
import { color } from "./theme";
import { initFonts } from "./theme/fonts"; // expo
import "./utils/ignore-warnings";
import { DisplayNotification } from "./utils/Notifications";
import * as storage from "./utils/storage";
// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

/**
 * This is the root component of our app.
 */
function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)
  const [latestVersion, setLatestVersion] = useState<number | null>(null)
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  // Kick off initial async loading actions, like loading fonts and RootStore

  useEffect(() => {
    ; (async () => {
      SplashScreen.hide()
      await initFonts() // expo
      setupRootStore().then(setRootStore)
      const latestV = await getVersion()
      setLatestVersion(parseFloat(latestV))
    })()

    requestPermission()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      DisplayNotification(remoteMessage);
    });
    return unsubscribe;
  }, [])
  const requestPermission = async () => {
    await messaging().requestPermission();
  }

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!rootStore || !isNavigationStateRestored) return null

  // otherwise, we're ready to render the app
  return (
    <ToggleStorybook>
      <RootStoreProvider value={rootStore}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ErrorBoundary catchErrors={"always"}>
            {
              (latestVersion && parseFloat(version) < latestVersion) &&
              <View style={{ backgroundColor: color.palette.white, flex: 1, opacity: 0.6, position: "absolute", zIndex: 20, left: 0, top: 0, right: 0, bottom: 0, width: "100%", height: "100%", maxWidth: "100%" }} >
                <ModalUpdateLatestVesion />
              </View>
            }
            <AppNavigator
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </ErrorBoundary>
        </SafeAreaProvider>
      </RootStoreProvider>
    </ToggleStorybook>
  )
}

export default App
