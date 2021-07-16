import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const SettingsModel = types
  .model("Settings")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type SettingsType = Instance<typeof SettingsModel>
export interface Settings extends SettingsType {}
type SettingsSnapshotType = SnapshotOut<typeof SettingsModel>
export interface SettingsSnapshot extends SettingsSnapshotType {}
export const createSettingsDefaultModel = () => types.optional(SettingsModel, {})
