import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { Header, Screen, Text } from "../../components"

const FULL: ViewStyle = { flex: 1, backgroundColor: color.palette.white }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing.huge,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: ViewStyle = {
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium + spacing.tiny,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing.large
}
const CONTENT: TextStyle = {
  ...TEXT,
  fontSize: 19,
  marginVertical: spacing.medium,
}


export function TutorialWrapper({header, children }) {
  return <View style={FULL}>
    <Header headerText={header} style={HEADER} titleStyle={HEADER_TITLE} />
    {children}
  </View>
}

function TutorialContainer({ children }) {
  return <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
    {children}
  </Screen>
}

function TutorialContent({title = false, children}) {
  return <Text style={title ? TITLE : CONTENT} 
               preset={title ? "header" : "default"} >
    {children}
  </Text>
}

TutorialWrapper.Container = TutorialContainer
TutorialWrapper.Content = TutorialContent