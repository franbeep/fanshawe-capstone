import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Screen, Text, Button } from "../../components"
import { color } from "../../theme"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const CENTER: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

export const SettingsScreen = observer(function SettingsScreen() {

  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={CENTER}>
        <Ionicons name={"construct"} size={70} color={color.palette.brightOrange} />
        <Text>Not implemented yet.</Text>
        {/* <Button onPress={() => {navigation.navigate("tutorialwelcome")}} text="Click me!!!" style={{padding: 40}}></Button> */}
      </View>
    </Screen>
  )
})
