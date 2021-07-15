import React from "react"
import { View, ViewStyle } from "react-native"
import { color, spacing } from "../../theme"

const INDICATOR_CONTAINER: ViewStyle = {
  paddingVertical: spacing.medium,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
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
  backgroundColor: color.palette.brightOrange,
}

export function TutorialDots({quantity, current}) {
  const dotStyle: Array<ViewStyle> = (new Array(quantity)).fill(0).map((value: any, index: number) => {
    return index === current ? DOT_ACTIVE : DOT
  })

  return <View style={INDICATOR_CONTAINER}>
    {dotStyle.map((style, index) => <View key={index} style={style}></View>)}
  </View>
}
