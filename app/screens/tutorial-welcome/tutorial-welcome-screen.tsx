import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
import { Button, Header, Screen, Text } from "../../components"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"

//#region styles

const FULL: ViewStyle = { flex: 1, backgroundColor: color.palette.white }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[6],
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const ITALIC: TextStyle = { fontStyle: "italic" }
const HEADER: ViewStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const HEADER_FOCUS: TextStyle = {
  ...HEADER_TITLE,
  color: "#e24026",
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const CONTENT: TextStyle = {
  ...TEXT,
  fontSize: 17,
  marginVertical: spacing[4],
}
const CONTENT_FOCUS: TextStyle = {
  ...CONTENT,
  color: "#e24026",
}
const FOOTER: ViewStyle = { backgroundColor: "#902024" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#e24026",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  color: color.palette.white,
  fontSize: 13,
  letterSpacing: 2,
}

const DOT: ViewStyle = {
  height: 8,
  width: 8,
  borderRadius: 4,
  backgroundColor: "silver",
  marginHorizontal: 4,
}

const DOT_ACTIVE: ViewStyle = {
  ...DOT,
  backgroundColor: "#e24026",
}

const INDICATOR_CONTAINER: ViewStyle = {
  paddingVertical: spacing[4],
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}

//#endregion styles

export const TutorialWelcomeScreen = observer(function TutorialWelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("tutorialNotification")

  return (
    <View testID="WelcomeTutorialScreen" style={FULL}>
      <Header headerText="Tutorial" style={HEADER} titleStyle={HEADER_TITLE} />

      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE} preset="header">
          Congratulations on installing{" "}
          <Text style={HEADER_FOCUS} preset="header">
            Home Moodifier
          </Text>{" "}
          🎉
        </Text>
        <Text style={CONTENT}>
          With <Text style={CONTENT_FOCUS}>Home Moodifier</Text> and are ready to experience the
          best of environmental relaxing (?)
        </Text>
        <View style={INDICATOR_CONTAINER}>
          <View style={DOT_ACTIVE}></View>
          <View style={DOT}></View>
          <View style={DOT}></View>
          <View style={DOT}></View>
        </View>
      </Screen>

      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            onPress={nextScreen}
            // tx="welcomeScreen.continue"
            text="NEXT"
          />
        </View>
      </SafeAreaView>
    </View>
  )
})
