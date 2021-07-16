import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const SettingsModel = types
  .model("Settings")
  .props({
    allowNotification: types.optional(types.boolean, false),
    angryColor: types.optional(types.maybe(types.string), ""),
    sadColor: types.optional(types.maybe(types.string), ""),
    happyColor: types.optional(types.maybe(types.string), ""),
    anxiousColor: types.optional(types.maybe(types.string), ""),
    actualTheme: types.optional(types.maybe(types.string), "orange"),
  })
  .views((self) => ({
    get isComplete(): boolean {
      return (
        self.angryColor !== "" &&
        self.sadColor !== "" &&
        self.happyColor !== "" &&
        self.anxiousColor !== ""
      )
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setAllowNoficiation: (val: boolean) => {
      console.log({ before: self.allowNotification, val })
      self.allowNotification = val
      console.log({ after: self.allowNotification, val })
    },
    setAngryColor: (val: string) => {
      console.log({ before: self.angryColor, val })
      self.angryColor = val
      console.log({ after: self.angryColor, val })
    },
    setSadColor: (val: string) => {
      console.log({ before: self.sadColor, val })
      self.sadColor = val
      console.log({ after: self.sadColor, val })
    },
    setHappyColor: (val: string) => {
      console.log({ before: self.happyColor, val })
      self.happyColor = val
      console.log({ after: self.happyColor, val })
    },
    setAnxiousColor: (val: string) => {
      console.log({ before: self.anxiousColor, val })
      self.anxiousColor = val
      console.log({ after: self.anxiousColor, val })
    },
    setThemeColor: (val: string) => {
      console.log({ before: self.actualTheme, val })
      self.actualTheme = val
      console.log({ after: self.actualTheme, val })
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    autoComplete: () => {
      console.log("Autocompleting...")
      if (self.angryColor === "") self.setAngryColor("orange")
      if (self.sadColor === "") self.setSadColor("orange")
      if (self.happyColor === "") self.setHappyColor("orange")
      if (self.anxiousColor === "") self.setAnxiousColor("orange")
    },
    reset: () => {
      console.log("Resetting...")
      self.allowNotification = false
      self.angryColor = ""
      self.sadColor = ""
      self.happyColor = ""
      self.anxiousColor = ""
      self.actualTheme = ""
    },
  }))

type SettingsType = Instance<typeof SettingsModel>
export interface Settings extends SettingsType {}
type SettingsSnapshotType = SnapshotOut<typeof SettingsModel>
export interface SettingsSnapshot extends SettingsSnapshotType {}
export const createSettingsDefaultModel = () => types.optional(SettingsModel, {})
