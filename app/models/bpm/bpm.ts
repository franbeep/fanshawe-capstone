import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const BpmModel = types
  .model("Bpm")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type BpmType = Instance<typeof BpmModel>
export interface Bpm extends BpmType {}
type BpmSnapshotType = SnapshotOut<typeof BpmModel>
export interface BpmSnapshot extends BpmSnapshotType {}
export const createBpmDefaultModel = () => types.optional(BpmModel, {})
