import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import {
  GetCurrentBpmResult,
  GetDayBpmResult,
  GetMonthBpmResult,
  GetWeekBpmResult,
} from "../../services/api"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Model description here for TypeScript hints.
 */
export const BpmModel = types
  .model("Bpm")
  .props({
    lastMinute: types.optional(types.number, 0),
    last24h: types.array(
      types.model({
        x: types.string,
        y: types.number,
      }),
    ),
    lastWeek: types.array(
      types.model({
        x: types.string,
        y: types.number,
      }),
    ),
    lastMonth: types.array(
      types.model({
        x: types.string,
        y: types.number,
      }),
    ),
  })
  .extend(withEnvironment)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveBpmState: (field: string, bpmSnapshot: BpmSnapshot) => {
      switch (field) {
        case "lastMinute":
          self.lastMinute = bpmSnapshot.lastMinute
          break
        case "last24h":
          self.last24h.replace(bpmSnapshot.last24h)
          break
        case "lastWeek":
          self.lastWeek.replace(bpmSnapshot.lastWeek)
          break
        case "lastMonth":
          self.lastMonth.replace(bpmSnapshot.lastMonth)
          break
        default:
          break
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    getCurrentBpm: flow(function* () {
      const result: GetCurrentBpmResult = yield self.environment.api.getCurrentBpm()
      if (result.kind === "ok") {
        self.saveBpmState("lastMinute", result.bpm)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    }),
    getDayBpm: flow(function* () {
      const result: GetDayBpmResult = yield self.environment.api.getDayBpm()
      if (result.kind === "ok") {
        self.saveBpmState("last24h", result.list)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    }),
    getWeekBpm: flow(function* () {
      const result: GetWeekBpmResult = yield self.environment.api.getWeekBpm()
      if (result.kind === "ok") {
        self.saveBpmState("lastWeek", result.list)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    }),
    getMonthBpm: flow(function* () {
      const result: GetMonthBpmResult = yield self.environment.api.getMonthBpm()
      if (result.kind === "ok") {
        self.saveBpmState("lastMonth", result.list)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    }),
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type BpmType = Instance<typeof BpmModel>
export interface Bpm extends BpmType {}
type BpmSnapshotType = SnapshotOut<typeof BpmModel>
export interface BpmSnapshot extends BpmSnapshotType {}
export const createBpmDefaultModel = () => types.optional(BpmModel, {})
