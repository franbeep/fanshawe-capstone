import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { Line } from "react-chartjs-2"

const FULL: ViewStyle = { flex: 1, backgroundColor: color.palette.white }
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const TEXT: TextStyle = {
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: ViewStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
  backgroundColor: "#e43738",
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
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

const ACTION: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  padding: 15,
}
const ACTION_BUTTON: ViewStyle = {
  backgroundColor: "rgba(226, 38, 38, 0.9)",
  // borderWidth: 2,
  // borderColor: "#e22626",
}
const ACTION_BUTTON_TEXT: TextStyle = {
  ...TEXT,
  maxWidth: "100px",
  textAlign: "center",
  fontWeight: 700,
  color: "rgba(255,255,255, 0.9)",
}
const ACTION_TEXT: TextStyle = {
  ...TEXT,
  padding: 10,
  color: "rgba(0,0,0, 0.9)",
}

export const ActionsScreen = observer(function ActionsScreen() {
  const [chart, setChart] = React.useState(null)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <Header headerText="Actions" style={HEADER} titleStyle={HEADER_TITLE} />
        <View style={CONTAINER}>
          {/* 
          
          lights out
          normal mode
          blinking lights
          shifting lights mode
            
          */}

          <View style={ACTION}>
            <Button
              testID="next-screen-button"
              // style={CONTINUE}
              // textStyle={CONTINUE_TEXT}
              // onPress={nextScreen}
              // tx="welcomeScreen.continue"
              // text="Lights Out"
              style={ACTION_BUTTON}
            >
              <Text style={ACTION_BUTTON_TEXT}>Lights Out</Text>
            </Button>
            <Text style={ACTION_TEXT}>
              Maecenas ullamcorper metus eget massa pretium luctus. Cras sit amet tellus velit.
            </Text>
          </View>

          <View style={ACTION}>
            <Text style={ACTION_TEXT}>
              Curabitur imperdiet rhoncus ex, eget ultricies sapien ornare at. Etiam vel diam leo.
              Praesent suscipit euismod sodales.
            </Text>
            <Button
              testID="next-screen-button"
              // style={CONTINUE}
              // textStyle={CONTINUE_TEXT}
              // onPress={nextScreen}
              // tx="welcomeScreen.continue"
              // text="Lights Out"
              style={ACTION_BUTTON}
            >
              <Text style={ACTION_BUTTON_TEXT}>Normal Mode</Text>
            </Button>
          </View>

          <View style={ACTION}>
            <Button
              testID="next-screen-button"
              // style={CONTINUE}
              // textStyle={CONTINUE_TEXT}
              // onPress={nextScreen}
              // tx="welcomeScreen.continue"
              // text="Lights Out"
              style={ACTION_BUTTON}
            >
              <Text style={ACTION_BUTTON_TEXT}>Blinking Lights</Text>
            </Button>
            <Text style={ACTION_TEXT}>
              Suspendisse potenti. Donec at sodales enim, vitae bibendum ligula.
            </Text>
          </View>

          <View style={ACTION}>
            <Text style={ACTION_TEXT}>
              Aenean eget ullamcorper magna. Maecenas sagittis justo velit, vel blandit ligula
              placerat at. Fusce interdum id nulla a iaculis.
            </Text>
            <Button
              testID="next-screen-button"
              // style={CONTINUE}
              // textStyle={CONTINUE_TEXT}
              // onPress={nextScreen}
              // tx="welcomeScreen.continue"
              // text="Lights Out"
              style={ACTION_BUTTON}
            >
              <Text style={ACTION_BUTTON_TEXT}>Shifting Lights Mode</Text>
            </Button>
          </View>
        </View>
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              navigation.navigate("home")
            }}
          >
            <Ionicons name="ios-home-sharp" size={24} color="black" style={FOOTER_MENU_ICON} />
            <Text style={FOOTER_MENU_TEXT}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              navigation.navigate("history")
            }}
          >
            <Ionicons name="albums" size={24} color="black" style={FOOTER_MENU_ICON} />
            {/* <Ionicons name="book-outline" size={24} color="black" style={FOOTER_MENU_ICON} /> */}
            <Text style={FOOTER_MENU_TEXT}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              navigation.navigate("actions")
            }}
          >
            <Ionicons
              name="bulb-outline"
              size={24}
              color="black"
              style={FOOTER_MENU_ICON__ACTIVE}
            />
            <Text style={FOOTER_MENU_TEXT__ACTIVE}>Actions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              navigation.navigate("profiles")
            }}
          >
            <Ionicons name="ios-people" size={24} color="black" style={FOOTER_MENU_ICON} />
            <Text style={FOOTER_MENU_TEXT}>Profiles</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              navigation.navigate("settings")
            }}
          >
            <Ionicons name="ios-people" size={24} color="black" style={FOOTER_MENU_ICON} />
            <Text style={FOOTER_MENU_TEXT}>Settings</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
})
