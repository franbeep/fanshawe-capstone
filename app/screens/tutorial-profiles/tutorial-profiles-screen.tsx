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
const HEADER_ITALIC: TextStyle = {
  ...HEADER_TITLE,
  ...ITALIC,
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
const CONTENT_FADED: TextStyle = {
  ...CONTENT,
  opacity: 0.7,
}
const CONTENT_ITALIC: TextStyle = {
  ...CONTENT,
  ...ITALIC,
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

const ASPECT_CONTAINER: ViewStyle = {
  flexDirection: "row",
  width: "75%",
}

const ASPECT_VIEW: ViewStyle = {
  ...TEXT,
  padding: spacing[2],
  margin: spacing[1],
  borderRadius: spacing[1],
  backgroundColor: "#f2f2f2",
}
const ASPECT_TEXT: TextStyle = {
  ...TEXT,
  color: "#e24026",
}

const BASE_ASPECT: ViewStyle = {
  padding: spacing[3],
  margin: spacing[1],
  borderRadius: spacing[1],
  minWidth: 50,
  justifyContent: "space-between",
}
const RED_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "red",
}
const ORANGE_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "orange",
}
const YELLOW_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "yellow",
}
const GREEN_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "green",
}
const CYAN_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "cyan",
}
const BLUE_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "blue",
}
const PURPLE_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "purple",
}

//#endregion styles

export const TutorialProfilesScreen = observer(function TutorialProfilesScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("tutorialFinish")

  return (
    <View testID="WelcomeTutorialScreen" style={FULL}>
      <Header headerText="Tutorial" style={HEADER} titleStyle={HEADER_TITLE} />

      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE} preset="header">
          Profiles 👥
        </Text>
        <Text style={CONTENT_FADED}>
          Maecenas pretium libero et nunc ornare, sit amet tincidunt sapien venenatis. Donec sed
          tortor non neque ornare mollis.
        </Text>
        <Text style={CONTENT}>
          Create your profile: Associate each color to an emotion or feeling.
        </Text>
        <View style={ASPECT_CONTAINER}>
          <View>
            <View style={RED_ASPECT}></View>
            <View style={ORANGE_ASPECT}></View>
            <View style={YELLOW_ASPECT}></View>
            <View style={GREEN_ASPECT}></View>
            <View style={CYAN_ASPECT}></View>
            <View style={BLUE_ASPECT}></View>
            <View style={PURPLE_ASPECT}></View>
          </View>
          <View style={{ flexGrow: 1 }}></View>
          <View>
            <View style={ASPECT_VIEW}>
              <Text style={ASPECT_TEXT}>Angry</Text>
            </View>
            <View style={ASPECT_VIEW}>
              <Text style={ASPECT_TEXT}>Sad</Text>
            </View>
            <View style={ASPECT_VIEW}>
              <Text style={ASPECT_TEXT}>Happy</Text>
            </View>
            <View style={ASPECT_VIEW}>
              <Text style={ASPECT_TEXT}>Anxious</Text>
            </View>
          </View>
        </View>
        <View style={INDICATOR_CONTAINER}>
          <View style={DOT}></View>
          <View style={DOT}></View>
          <View style={DOT_ACTIVE}></View>
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
            text="SKIP"
          />
        </View>
      </SafeAreaView>
    </View>
  )
})
