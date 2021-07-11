import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

import { Ionicons } from "@expo/vector-icons"

const FULL: ViewStyle = { flex: 1, backgroundColor: color.palette.white }
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const TEXT: TextStyle = {
  fontFamily: typography.primary,
}
const FOOTER: ViewStyle = { backgroundColor: "#f2f2f2" } // #902024
const FOOTER_CONTENT: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-around",
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
}

const FOOTER_MENU_ITEM: ViewStyle = {
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[1],
  alignItems: "center",
}
const FOOTER_MENU_ICON: TextStyle = {
  color: color.palette.lightGrey,
}
const FOOTER_MENU_TEXT: TextStyle = {
  ...TEXT,
  color: color.palette.lightGrey,
}
const FOOTER_MENU_ICON__ACTIVE: TextStyle = {
  color: "#e22626",
}
const FOOTER_MENU_TEXT__ACTIVE: TextStyle = {
  ...FOOTER_MENU_TEXT,
  color: "#e22626",
}
const CONTAINER: ViewStyle = {
  // borderTopLeftRadius: spacing[4],
  // borderTopRightRadius: spacing[4],
  // backgroundColor: color.palette.white,
  backgroundColor: "#fafafa",
  height: 250,
  flexGrow: 1,
  alignItems: "center",
}

export const HistoryScreen = observer(function HistoryScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <View style={CONTAINER}></View>
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              console.log("lol!!")
            }}
          >
            <Ionicons
              name="ios-home-sharp"
              size={24}
              color="black"
              style={FOOTER_MENU_ICON__ACTIVE}
            />
            <Text style={FOOTER_MENU_TEXT__ACTIVE}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              console.log("lol!!")
            }}
          >
            <Ionicons name="albums" size={24} color="black" style={FOOTER_MENU_ICON} />
            {/* <Ionicons name="book-outline" size={24} color="black" style={FOOTER_MENU_ICON} /> */}
            <Text style={FOOTER_MENU_TEXT}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              console.log("lol!!")
            }}
          >
            <Ionicons name="bulb-outline" size={24} color="black" style={FOOTER_MENU_ICON} />
            <Text style={FOOTER_MENU_TEXT}>Actions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              console.log("lol!!")
            }}
          >
            <Ionicons name="ios-people" size={24} color="black" style={FOOTER_MENU_ICON} />
            <Text style={FOOTER_MENU_TEXT}>Profiles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              console.log("lol!!")
            }}
          >
            <Ionicons name="ellipsis-vertical" size={24} color="black" style={FOOTER_MENU_ICON} />
            <Text style={FOOTER_MENU_TEXT}>More</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
})
