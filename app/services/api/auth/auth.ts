import { ApiResponse, ApisauceInstance } from "apisauce"
import { Api } from "../api"
import { getGeneralApiProblem } from "../api-problem"
import { LoginResult, LogoutResult, RegisterResult } from "./auth.types"

export class AuthenticationApi {
  apisauce: ApisauceInstance

  constructor(api: Api) {
    this.apisauce = api.apisauce
  }

  configHeader(): void {
    console.log("config")
  }

  async signup(
    name: string,
    email: string,
    password: string,
    expoPushToken: string,
  ): Promise<RegisterResult> {
    try {
      const response: ApiResponse<any> = await this.apisauce.post("/signup", {
        name,
        email,
        password,
        notificationToken: expoPushToken,
      })
      const error = response.data?.error

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return { problem, error }
      }
      const message: string = response.data.message
      return { kind: "ok", message }
    } catch (e) {
      return { kind: "bad-data" }
    }
  }

  async login(
    emailAddress: string,
    password: string,
    notificationToken: string,
  ): Promise<LoginResult> {
    try {
      const response: ApiResponse<any> = await this.apisauce.post("/signin", {
        emailAddress,
        password,
        notificationToken,
      })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok", user: response.data.user, token: response.data.token }
    } catch (e: any) {
      return { kind: "bad-data" }
    }
  }

  async logout(): Promise<LogoutResult> {
    try {
      const response: ApiResponse<any> = await this.apisauce.patch("/Authentication/log-out")
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok" }
    } catch (e: any) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
