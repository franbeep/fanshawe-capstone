import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Screen, Text } from "../../components"
import { color } from "../../theme"
import Ionicons from 'react-native-vector-icons/Ionicons';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const CENTER: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

export const ProfilesScreen = observer(function ProfilesScreen() {

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={CENTER}>
        <Ionicons name={"construct"} size={70} color={color.palette.brightOrange} />
        <Text>Not implemented yet.</Text>
      </View>
    </Screen>
  )
})
