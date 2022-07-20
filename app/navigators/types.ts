import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"
import { BottomTabParams } from "./bottomTab"

export type NavigatorParamList = {
  home: {

  }
  welcome: undefined
  demo: undefined
  demoList: undefined
  register: undefined
  animations: undefined
  detailNew: { newId: string }
  // 🔥 Your screens go here
}

export enum AppScreenNames {
  welcome = "welcome",
  demo = "demo",
  demoList = "demoList",
  register = "register",
  home = "home",
  animations = "animations",
  detailNew = "detailNew",
}
export type RootStackScreenProps<T extends keyof NavigatorParamList> = StackScreenProps<
  NavigatorParamList,
  T
>
export type AuthNavigatorParamList = {
  login: undefined
  register: undefined
}
/* 
export type HomeTabScreenProps<T extends keyof AppScreenNames> = CompositeScreenProps<
  BottomTabScreenProps<AppScreenNames, T>,
  RootStackScreenProps<keyof RootStackParamList>
>
 */
