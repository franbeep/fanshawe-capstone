import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, Text as ReactNativeText } from "react-native"
import { 
  TutorialDots as NavigationDots, 
  TutorialControls as Controls, 
  TutorialWrapper as Wrapper,
  TutorialProfileSetupArea as ProfileSetupArea 
} from "../../components"
import { color } from "../../theme"
import { useNavigation } from "@react-navigation/native"

const CONTENT_FOCUS: TextStyle = {
  color: color.palette.brightOrange,
}

export const TutorialProfileScreen = observer(function TutorialProfileScreen() {
  const [complete, setComplete] = useState(false)

  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("tutorialfinish")

  const saveColorScheme = () => {
    console.log("") // placeholder
    // save state
    // if complete (all moods), set complete
  }

  return <Wrapper header={"Profile Configuration"}>
    <Wrapper.Container>
      <Wrapper.Content title>Set your scheme! 🎨</Wrapper.Content>
      <Wrapper.Content>
        Here we let you choose what color <ReactNativeText style={CONTENT_FOCUS}>best describes you</ReactNativeText>. Try dragging one of the colors to the corresponding mood that you feel more related to said color.
      </Wrapper.Content>
      <NavigationDots quantity={4} current={2} />
      <ProfileSetupArea saveColorScheme={saveColorScheme} />
    </Wrapper.Container>
    <Controls>
      <Controls.Button text={complete ? "CONTINUE" : "SKIP"} nextScreen={nextScreen} />
    </Controls>
  </Wrapper>
})
