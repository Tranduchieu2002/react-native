import { types } from "mobx-state-tree"
import { BottomTabRouteNames } from "../../navigators/bottomTab"
export const CommonModel = types
  .model("commonModel")
  .props({
    routeName: types.optional(types.string, "news"),
  })
  .actions((self) => ({
    setRouteName: (routeName: string) => {
      self.routeName  = BottomTabRouteNames[routeName]
    },
  }))
