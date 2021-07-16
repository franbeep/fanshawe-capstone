import { Instance, SnapshotOut, types } from "mobx-state-tree"
// import { CharacterStoreModel } from "../character-store/character-store"
import { BpmModel } from "../bpm/bpm"
import { SettingsModel } from "../settings/settings"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  // characterStore: types.optional(CharacterStoreModel, {} as any),
  bpmStore: types.optional(BpmModel, {} as any),
  settingsStore: types.optional(SettingsModel, {} as any)
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
