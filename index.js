// This is the first file that ReactNative will run when it starts up.
//
// We jump out of here immediately and into our main entry point instead.
//
// It is possible to have React Native load our main module first, but we'd have to
// change that in both AppDelegate.m and MainApplication.java.  This would have the
// side effect of breaking other tooling like mobile-center and react-native-rename.
//
// It's easier just to leave it here.
import App from "./app/app.tsx"
import { AppRegistry } from "react-native"
import messaging from "@react-native-firebase/messaging"
import { DisplayNotification } from "./app/utils/Notifications"
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    DisplayNotification(remoteMessage)
});
AppRegistry.registerComponent("App", () => App)
export default App
