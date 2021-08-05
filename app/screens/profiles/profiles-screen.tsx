import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View } from "react-native"
import {
  Screen,
  Text,
  Button,
  TutorialProfileSetupArea as ProfileSetupArea,
} from "../../components"
import { color, spacing } from "../../theme"
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

const CONTAINER: ViewStyle = {
  //
  // backgroundColor: color.palette.gradient.blue[1],
  padding: spacing.large,
  height: "100%",
  justifyContent: "center",
}
const TOP_AREA: ViewStyle = {
  //
  // backgroundColor: color.palette.gradient.red[1],
  padding: spacing.medium,
}
const TOP_TEXT: TextStyle = {
  //
  color: "rgba(255,255,255, 0.9)",
  marginVertical: spacing.small,
}
const PROFILES_SETUP_AREA: ViewStyle = {
  //
  // backgroundColor: color.palette.gradient.green[1],
  backgroundColor: "rgba(255,255,255, 0.5)",
  borderRadius: spacing.small,
  padding: spacing.medium,
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

export const ProfilesScreen = observer(function ProfilesScreen() {
  const { settingsStore } = useStores()
  const { actualTheme, angryColor, sadColor, happyColor, anxiousColor } = settingsStore

  const saveColorScheme = ({ color, mood }) => {
    switch (mood) {
      case "angry":
        settingsStore.setAngryColor(color)
        break
      case "sad":
        settingsStore.setSadColor(color)
        break
      case "happy":
        settingsStore.setHappyColor(color)
        break
      case "anxious":
        settingsStore.setAnxiousColor(color)
        break
      default:
        break
    }

    const { allowNotification, angryColor, sadColor, happyColor, anxiousColor } = settingsStore
    console.log({ color, mood })
    console.log({ allowNotification, angryColor, sadColor, happyColor, anxiousColor })
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={CONTAINER}>
        <View style={TOP_AREA}>
          <Text style={[TOP_TEXT, { fontSize: spacing.medium + spacing.small }]}>
            If you are wondering whether you could change your profile, don't worry, here you can
            reshape your preferences. 🔧🪁
          </Text>
          <Text style={TOP_TEXT}>
            Try dragging one of the colors to the corresponding mood that you feel more related to
            said color.
          </Text>
        </View>
        <View style={PROFILES_SETUP_AREA}>
          <ProfileSetupArea
            saveColorScheme={saveColorScheme}
            initialValue={[
              { mood: "angry", color: angryColor },
              { mood: "sad", color: sadColor },
              { mood: "happy", color: happyColor },
              { mood: "anxious", color: anxiousColor },
            ]}
          />
        </View>
      </View>
    </Screen>
  )
})
