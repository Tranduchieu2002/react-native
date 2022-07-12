import { AuthStoreModel } from "./auth-store"

it("can be created", () => {
  const instance = AuthStoreModel.create({})
  expect(
    instance.Authenticate({
      user: {
        name: " Hieu",
        id: "djdhdh",
        email: "hieu@gmail.com",
        password: "12345",
      },
      didTryAutoLogin: false,
      isAuthenticationed: true,
    }),
  )
  expect(instance).toBeTruthy()
})
