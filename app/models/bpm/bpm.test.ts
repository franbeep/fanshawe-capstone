import { BpmModel } from "./bpm"

test("can be created", () => {
  const instance = BpmModel.create({})

  expect(instance).toBeTruthy()
})
