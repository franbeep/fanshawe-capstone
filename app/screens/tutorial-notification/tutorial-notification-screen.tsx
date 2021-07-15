import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle, Text as ReactNativeText } from "react-native"
import { 
  TutorialDots as NavigationDots, 
  TutorialControls as Controls, 
  TutorialWrapper as Wrapper 
} from "../../components"
import { color, spacing } from "../../theme"
import { useNavigation } from "@react-navigation/native"

const CONTENT_BOLD: TextStyle = {
  fontWeight: "bold",
}

const CONTENT_FOCUS: TextStyle = {
  color: color.palette.brightOrange,
}

const DIVISION: ViewStyle = {
  minWidth: spacing.medium,
}

export const TutorialNotificationScreen = observer(function TutorialNotificationScreen() {
  const navigation = useNavigation()
  const onAccept = () => {
    // save yes
    navigation.navigate("tutorialprofile")
  }
  const onDecline = () => {
    // save no
    navigation.navigate("tutorialprofile")
  }

  return <Wrapper header={"Notifications"}>
    <Wrapper.Container>
      <Wrapper.Content title>Notification 🔔</Wrapper.Content>
      <Wrapper.Content>
        Notifications can be certainly overwhelming. <ReactNativeText style={CONTENT_FOCUS}>We know it!</ReactNativeText> And so, nofication privacy settings is the first thing we configure for you to relax you.
      </Wrapper.Content>
      <Wrapper.Content>
        Do you allow that we send you notifications regarding <ReactNativeText style={CONTENT_BOLD}>YOUR</ReactNativeText> mood, and how we can make it better?
      </Wrapper.Content>
      <NavigationDots quantity={5} current={1} />
    </Wrapper.Container>
    <Controls>
      <Controls.Button text={"YES"} nextScreen={onAccept} />
      <View style={DIVISION} ></View>
      <Controls.Button text={"NO"} nextScreen={onDecline} />
    </Controls>
  </Wrapper>
})
