import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View } from "react-native"
import { Screen, Text, Button } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import axios from "axios"

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
  // backgroundColor: color.palette.gradient.blue[1],
  // backgroundColor: color.palette.white,
  padding: spacing.large,
  height: "100%",
  justifyContent: "center",
}
const ACTION_CONTAINER: ViewStyle = {
  // backgroundColor: color.palette.gradient.red[1],
  padding: spacing.medium,
}
const ACTION_SECTION: ViewStyle = {
  // backgroundColor: color.palette.gradient.orange[1],
  flexDirection: "row",
  marginVertical: spacing.medium,
  flexWrap: "wrap",
}
const ACTION_BUTTON: ViewStyle = {
  backgroundColor: color.palette.gradient.green[1],
  padding: spacing.medium,
  flexGrow: 1,
}
const ACTION_BUTTON_TEXT: TextStyle = {
  fontSize: spacing.medium + spacing.tiny,
}
const ACTION_TEXT: TextStyle = {
  // color: "rgba(0,0,0, 0.5)",
  color: "rgba(255,255,255, 0.5)",
}
const TOP_SECTION: ViewStyle = {
  // backgroundColor: color.palette.gradient.purple[1],
}
const TOP_TEXT: TextStyle = {
  fontSize: spacing.medium + spacing.small,
  color: "rgba(0,0,0, 0.9)",
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

const listOfActions = [
  {
    action: "Change environment",
    text:
      "Changes the background controlled by the microcontroller according to your mood profile of angry",
  },
  {
    action: "Change environment",
    text:
      "Changes the background controlled by the microcontroller according to your mood profile of sad",
  },
  {
    action: "Change environment",
    text:
      "Changes the background controlled by the microcontroller according to your mood profile of happy",
  },
  {
    action: "Change environment",
    text:
      "Changes the background controlled by the microcontroller according to your mood profile of anxious",
  },
  {
    action: "Change to shifting environment",
    text: "Sets the environment to a shifting color. Not dependent on profile settings.",
  },
]

const getThemeColor = (c) => getGradient(c)[0]
const getFontThemeColor = (c) =>
  ["yellow", "cyan"].includes(c) ? color.palette.black : color.palette.white

export const ActionsScreen = observer(function ActionsScreen() {
  // Pull in one of our MST stores
  const { bpmStore, settingsStore } = useStores()
  const { angryColor, sadColor, happyColor, anxiousColor, actualTheme } = settingsStore
  const environmentOptions = [angryColor, sadColor, happyColor, anxiousColor, "shifting"]

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={CONTAINER}>
        {/* <View style={TOP_SECTION}>
          <Text style={TOP_TEXT}>
            Here you can setup different environments manually. Try them out! 😁
          </Text>
        </View> */}
        <View style={ACTION_CONTAINER}>
          {listOfActions.map((item, index) => (
            <View key={`${environmentOptions[index]}${index}`} style={ACTION_SECTION}>
              <Button
                style={[
                  ACTION_BUTTON,
                  {
                    backgroundColor: getThemeColor(
                      environmentOptions[index] === "shifting"
                        ? "orange"
                        : environmentOptions[index],
                    ),
                  },
                ]}
                textStyle={[
                  ACTION_BUTTON_TEXT,
                  {
                    color: getFontThemeColor(
                      environmentOptions[index] === "shifting"
                        ? "orange"
                        : environmentOptions[index],
                    ),
                  },
                ]}
                text={item.action}
                onPress={() => {
                  try {
                    const params = new URLSearchParams()
                    params.append("action", "environment")
                    params.append("theme", environmentOptions[index])
                    const config = {
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                    }
                    axios.post(
                      "https://automatic-mango-hexagon.glitch.me/controller/action",
                      params,
                      config,
                    )
                  } catch (e) {
                    console.log("eee")
                  }
                }}
              />
              <Text style={ACTION_TEXT}>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  )
})
