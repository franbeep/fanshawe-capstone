import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { Bpm } from "../../models/bpm/bpm"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem

export type GetCurrentBpmResult = { kind: "ok"; bpm: Bpm } | GeneralApiProblem
export type GetHourBpmResult = { kind: "ok"; list: Bpm } | GeneralApiProblem
export type GetDayBpmResult = { kind: "ok"; list: Bpm } | GeneralApiProblem
export type GetWeekBpmResult = { kind: "ok"; list: Bpm } | GeneralApiProblem
export type GetMonthBpmResult = { kind: "ok"; list: Bpm } | GeneralApiProblem
