import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View } from "react-native"
import { Button, Checkbox, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const TEXT: TextStyle = {
  color: "rgba(0,0,0,0.9)",
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.white,
  padding: spacing.large,
  height: "100%",
  justifyContent: "center",
}
const SETTINGS_SECTION: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: spacing.small,
}
const SETTINGS_CHECKBOX_CONTAINER: ViewStyle = {
  padding: spacing.small,
  height: "100%",
}
const SETTINGS_CHECKBOX: ViewStyle = {}
const SETTINGS_BUTTON_CONTAINER: ViewStyle = {}
const SETTINGS_BUTTON: ViewStyle = {
  padding: spacing.small,
  paddingHorizontal: spacing.huge,
}
const SETTINGS_BUTTON_TEXT: TextStyle = {
  ...TEXT,
  fontSize: spacing.medium + spacing.tiny,
}
const SETTINGS_TEXT_CONTAINER: ViewStyle = {
  padding: spacing.small,
  flexGrow: 1,
  maxWidth: "90%",
}
const SETTINGS_TEXT: TextStyle = {
  ...TEXT,
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

export const SettingsScreen = observer(function SettingsScreen() {
  const { settingsStore } = useStores()
  const navigation = useNavigation()
  const { allowNotification, allowShifting } = settingsStore

  const handleReset = (event) => {
    settingsStore.reset()
    navigation.navigate("tutorialwelcome")
  }

  const { actualTheme } = settingsStore

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={CONTAINER}>
        <View style={SETTINGS_SECTION}>
          <View style={SETTINGS_CHECKBOX_CONTAINER}>
            <Checkbox
              style={SETTINGS_CHECKBOX}
              value={allowNotification}
              onToggle={(newValue) => settingsStore.setAllowNoficiation(newValue)}
            />
          </View>
          <View style={SETTINGS_TEXT_CONTAINER}>
            <Text style={SETTINGS_TEXT}>Allow notifications</Text>
          </View>
        </View>
        <View style={SETTINGS_SECTION}>
          <View style={SETTINGS_CHECKBOX_CONTAINER}>
            <Checkbox
              style={SETTINGS_CHECKBOX}
              value={allowShifting}
              onToggle={(newValue) => settingsStore.setAllowShifting(newValue)}
            />
          </View>
          <View style={SETTINGS_TEXT_CONTAINER}>
            <Text style={SETTINGS_TEXT}>Allow shifting theme at home</Text>
          </View>
        </View>
        <View style={[SETTINGS_SECTION, { flexDirection: "column" }]}>
          <View style={[SETTINGS_TEXT_CONTAINER, { marginVertical: spacing.medium }]}>
            <Text style={SETTINGS_TEXT}>
              ⚠️Resets the application. You'll be returned to the Welcome Tutorial screen, and will
              have to undergo the initial configuration again.{" "}
              <Text style={{ color: color.palette.deepRed }}>
                Use this in case the application is not working properly
              </Text>
              ⚠️
            </Text>
          </View>
          <View style={SETTINGS_BUTTON_CONTAINER}>
            <Button
              style={[SETTINGS_BUTTON, { backgroundColor: getGradient(actualTheme)[0] }]}
              textStyle={SETTINGS_BUTTON_TEXT}
              text={"Reset"}
              onPress={handleReset}
            />
          </View>
        </View>
      </View>
    </Screen>
  )
})
