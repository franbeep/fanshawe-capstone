import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import { BpmSnapshot } from "../../models/bpm/bpm"
import * as Types from "./api.types"
import { cast } from "mobx-state-tree"

const convertToBpm = (raw: any): BpmSnapshot => {
  if (raw.data && typeof raw.data === "number")
    return {
      lastMinute: raw.data,
      last24h: [],
      lastWeek: [],
      lastMonth: [],
    }

  return {
    lastMinute: 0,
    last24h: raw.map((val: { x: string; y: number }) => ({ x: val.x, y: val.y })),
    lastWeek: raw.map((val: { x: string; y: number }) => ({ x: val.x, y: val.y })),
    lastMonth: raw.map((val: { x: string; y: number }) => ({ x: val.x, y: val.y })),
  }
}

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getCurrentBpm(): Promise<Types.GetCurrentBpmResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get("/bpm/current")

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      // const convertedQuestions: QuestionSnapshot[] = rawQuestions.map(convertQuestion)
      const snapshot: BpmSnapshot = convertToBpm(response.data)
      return { kind: "ok", bpm: cast(snapshot) }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getDayBpm(): Promise<Types.GetDayBpmResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get("/bpm/day")

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const data = response.data
      // const convertedQuestions: QuestionSnapshot[] = rawQuestions.map(convertQuestion)
      const snapshot: BpmSnapshot = {
        lastMinute: 0,
        last24h: data,
        lastWeek: [],
        lastMonth: [],
      }
      return { kind: "ok", list: cast(snapshot) }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getWeekBpm(): Promise<Types.GetWeekBpmResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get("/bpm/week")

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const data = response.data
      // const convertedQuestions: QuestionSnapshot[] = rawQuestions.map(convertQuestion)
      const snapshot: BpmSnapshot = {
        lastMinute: 0,
        last24h: [],
        lastWeek: data,
        lastMonth: [],
      }
      return { kind: "ok", list: cast(snapshot) }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getMonthBpm(): Promise<Types.GetMonthBpmResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get("/bpm/month")

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const data = response.data
      // const convertedQuestions: QuestionSnapshot[] = rawQuestions.map(convertQuestion)
      const snapshot: BpmSnapshot = {
        lastMinute: 0,
        last24h: [],
        lastWeek: [],
        lastMonth: data,
      }
      return { kind: "ok", list: cast(snapshot) }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
