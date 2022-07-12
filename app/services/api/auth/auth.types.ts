import { GeneralApiProblem } from "../api-problem"

export type RegisterResult = { kind: "ok"; message: string } | {problem : GeneralApiProblem , error : string} | GeneralApiProblem
export type LoginResult = { kind: "ok"; user: any; token: string } | GeneralApiProblem
export type LogoutResult = { kind: "ok" } | GeneralApiProblem
