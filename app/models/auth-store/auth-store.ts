import { flow, Instance, types } from "mobx-state-tree"
import { AuthenticationApi } from "../../services/api/auth/auth"
import { RegisterResult } from "../../services/api/auth/auth.types"
import { load, save } from "../../utils/storage"
import { withEnvironment } from "../extensions/with-environment"
import { withStatus } from "../extensions/withStatus"
import { createUserStoreDefaultModel, UserSnapshotOut } from "../user/user"

export const AuthStoreModel = types
  .model("AuthenticationStore")
  .props({
    user: createUserStoreDefaultModel(),
    isAuthenticationed: false,
    didTryAutoLogin: false,
    messages: types.optional(types.string, ""),
  })
  .extend(withEnvironment)
  .extend(withStatus)
  .actions((self) => ({
    Authenticate: (userSnapshot: UserSnapshotOut) => {
      self.user.update(userSnapshot)
      self.didTryAutoLogin = true
      self.isAuthenticationed = true
      save("user", userSnapshot)
    },
  }))
  .actions((self) => ({
    login: flow(function* (
      emailAddress: string,
      password: string,
      notificationToken: string,
    ) {
      self.setStatus("pending")
      const user = yield load("user")
      if (user) {
        self.Authenticate(user)
        self.setStatus("done")
        return
      }
      const authenticationApi = new AuthenticationApi(self.environment.api)
      const res = yield authenticationApi.login(emailAddress, password, "huhu")
      if (res.kind === "ok") {
        self.setStatus("done")
        self.Authenticate(res.user)
      } else {
        self.setStatus("error")
        __DEV__ && console.log(res.kind)
      }
    }),
    signup: flow(function* (
      name: string,
      emailAddress: string,
      password: string,
      notificationToken: string,
    ) {
      self.setStatus("pending")
      const authenticationApi = new AuthenticationApi(self.environment.api)
      const res: RegisterResult = yield authenticationApi.signup(
        name,
        emailAddress,
        password,
        notificationToken,
      )
      console.log(res)
      if (res.kind !== "ok") {
        self.setStatus("error")
        self.messages = res.error
      } else {
      console.log(res.message)
        self.setStatus("done")
        self.messages = res.message
        self.Authenticate({
          name,
          email: emailAddress,
          password,
          id: "sss",
        })
      }
    }),
  }))
/*  .views((self) => ({
    get user() {
      return self.user.id
    },
  })) */
export interface AuthStore extends Instance<typeof AuthStoreModel> {}
