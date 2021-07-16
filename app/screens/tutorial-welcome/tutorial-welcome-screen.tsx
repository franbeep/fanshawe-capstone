import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, Text as ReactNativeText } from "react-native"
import {
  TutorialDots as NavigationDots,
  TutorialControls as Controls,
  TutorialWrapper as Wrapper,
} from "../../components"
import { color } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"

const CONTENT_FOCUS: TextStyle = {
  color: color.palette.brightOrange,
}

export const TutorialWelcomeScreen = observer(function TutorialWelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("tutorialnotification")

  const { settingsStore } = useStores()

  useEffect(() => {
    settingsStore.reset()

    const { allowNotification, angryColor, sadColor, happyColor, anxiousColor } = settingsStore
    console.log({ allowNotification, angryColor, sadColor, happyColor, anxiousColor })
  }, [])

  return (
    <Wrapper header={"Welcome"}>
      <Wrapper.Container>
        <Wrapper.Content title>Congratulations! 🎉</Wrapper.Content>
        <Wrapper.Content>
          With <ReactNativeText style={CONTENT_FOCUS}>Smart Home - IoT Systems</ReactNativeText>,
          you are ready to experience the best of environmental relaxing, the perfect combination of
          music and coloring scheme for your home.
        </Wrapper.Content>
        <Wrapper.Content>
          Follow along the tutorial so we can setup everything for you!😉
        </Wrapper.Content>
        <NavigationDots quantity={5} current={0} />
      </Wrapper.Container>
      <Controls>
        <Controls.Button text={"NEXT"} nextScreen={nextScreen} />
      </Controls>
    </Wrapper>
  )
})
