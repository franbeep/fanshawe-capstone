import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Screen, Text } from "../../components"
import { color } from "../../theme"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const CENTER: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const getGradient = (c: string): string[] => {
  switch (c) {
    case "red":
      return color.palette.gradient.red
    case "orange":
      return color.palette.gradient.orange
    case "yellow":
      return color.palette.gradient.yellow
    case "green":
      return color.palette.gradient.green
    case "cyan":
      return color.palette.gradient.cyan
    case "blue":
      return color.palette.gradient.blue
    case "purple":
      return color.palette.gradient.purple
    default:
      return color.palette.gradient.orange
  }
}

export const ActionsScreen = observer(function ActionsScreen() {
  const { settingsStore } = useStores()
  const { actualTheme } = settingsStore

  const setColor = getGradient(actualTheme)

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={CENTER}>
        <Ionicons name={"construct"} size={70} color={setColor[0]} />
        <Text>Not implemented yet.</Text>
      </View>
    </Screen>
  )
})
