import React from "react"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
import { color, spacing, typography } from "../../theme"
import { Button } from "../../components"

const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const FOOTER: ViewStyle = { backgroundColor: "#902024" }
const FOOTER_CONTENT: ViewStyle = {
  // display: "flex",
  flexDirection: "row",
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.medium,
}
const CONTINUE: ViewStyle = {
  flexGrow: 1,
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.medium,
  backgroundColor: "#e24026",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  color: color.palette.white,
  fontSize: 13,
  letterSpacing: 2,
}

export function TutorialControls({ children }) {
  return <SafeAreaView style={FOOTER}>
  <View style={FOOTER_CONTENT}>
    {children}
  </View>
</SafeAreaView>
}

function TutorialConstrolsButton({ text, nextScreen }) {
  return <Button
    style={CONTINUE}
    textStyle={CONTINUE_TEXT}
    onPress={nextScreen}
    text={text}
  />
}

TutorialControls.Button = TutorialConstrolsButton
