import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, Text as ReactNativeText } from "react-native"
import {
  TutorialDots as NavigationDots,
  TutorialControls as Controls,
  TutorialWrapper as Wrapper,
  TutorialProfileSetupArea as ProfileSetupArea,
} from "../../components"
import { color } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"

const CONTENT_FOCUS: TextStyle = {
  color: color.palette.brightOrange,
}

export const TutorialProfileScreen = observer(function TutorialProfileScreen() {
  const [complete, setComplete] = useState(false)

  const { settingsStore } = useStores()

  const navigation = useNavigation()
  const nextScreen = () => {
    settingsStore.autoComplete()
    navigation.navigate("tutorialfinish")
  }

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

    setComplete(settingsStore.isComplete)
  }

  return (
    <Wrapper header={"Profile Configuration"}>
      <Wrapper.Container>
        <Wrapper.Content title>Set your scheme! 🎨</Wrapper.Content>
        <Wrapper.Content>
          Here we let you choose what color{" "}
          <ReactNativeText style={CONTENT_FOCUS}>best describes you</ReactNativeText>. Try dragging
          one of the colors to the corresponding mood that you feel more related to said color.
        </Wrapper.Content>
        <NavigationDots quantity={4} current={2} />
        <ProfileSetupArea saveColorScheme={saveColorScheme} />
      </Wrapper.Container>
      <Controls>
        <Controls.Button text={complete ? "CONTINUE" : "SKIP"} nextScreen={nextScreen} />
      </Controls>
    </Wrapper>
  )
})
