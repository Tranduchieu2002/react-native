import { Instance, SnapshotOut, types } from "mobx-state-tree"
interface User {
  id: string
  name: string
  email: string
  password: string
}
export const UserModel = types
  .model("User")
  .props({
    id: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    password: types.optional(types.string, ""),
  })
  .actions((self) => ({
    update: (user: User) => {
      self.name = user.name
      self.id = user.email
      self.email = user.email
      self.password = user.password
    },
  }))

type UserStoreType = Instance<typeof UserModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}

export interface UserStoreSnapshot extends UserStoreSnapshotType {}
export const createUserStoreDefaultModel = () => types.optional(UserModel, {})
