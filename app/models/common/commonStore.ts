import { types } from "mobx-state-tree"
import { RouteNames } from "../../navigators/home-navigator"
export const CommonModel = types
  .model("commonModel")
  .props({
    routeName: types.optional(types.string, "news"),
  })
  .actions((self) => ({
    setRouteName: (routeName: string) => {
      self.routeName  = RouteNames[routeName]
    },
  }))
