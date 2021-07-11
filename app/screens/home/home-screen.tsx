import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { Ionicons } from "@expo/vector-icons"
const bg = require("./bg.png")


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
  //
  borderTopLeftRadius: spacing[4],
  borderTopRightRadius: spacing[4],
  // backgroundColor: color.palette.white,
  backgroundColor: "#fafafa",
  height: 250,
  flexGrow: 1,
  alignItems: "center",
}
const HEADER_WELCOME_USER: TextStyle = {
  ...TEXT,
  zIndex: 99,
  fontSize: 20,
  color: color.palette.white,
  marginTop: spacing[8],
  marginBottom: spacing[2],
  marginLeft: spacing[2],
  fontWeight: "bold",
}
const SUBTITLE_WELCOME_USER: TextStyle = {
  ...HEADER_WELCOME_USER,
  fontSize: 15,
  opacity: 0.7,
  zIndex: 99,
  marginTop: 0,
  fontWeight: "normal",
}
const MOOD_HEADER: TextStyle = {
  fontSize: 20,
  paddingHorizontal: spacing[2],
  paddingVertical: spacing[1],
}
const MOOD_CHECK: ViewStyle = {
  //
}
const MOOD_MENU: ViewStyle = {
  padding: spacing[1],
  flexDirection: "row",
}

const MOOD_MENU_ITEM: ViewStyle = {
  padding: spacing[2],
  margin: spacing[2],
  alignItems: "center",
  backgroundColor: "rgba(255,255,255, 0.3)",
  borderRadius: spacing[1],
  width: 70,
}
const MOOD_MENU_ITEM_ICON: TextStyle = {
  fontSize: 30,
}
const MOOD_MENU_ITEM_TEXT: TextStyle = {
  fontSize: 15,
}
const MAIN_BPM_EXTRA_BORDER: TextStyle = {
  borderWidth: 3,
  borderRadius: 1000,
  borderColor: "#e24026",
  marginVertical: spacing[5],
}
const MAIN_BPM_HEADER: TextStyle = {
  ...TEXT,
  fontSize: 45,
  color: color.palette.black,
  fontWeight: "bold",
  borderWidth: 6,
  borderRadius: 1000,
  borderColor: "#e2e2e2",
  padding: spacing[5],
}
const MAIN_BPM_CAPTION: TextStyle = {
  ...TEXT,
  color: color.palette.black,
  fontSize: 14,
  position: "absolute",
  left: 45,
  top: 72,
}

export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const navigation = useNavigation()

  // TODO: humidity  temperature

  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <Wallpaper backgroundImage={bg} />
        <Text style={HEADER_WELCOME_USER}>Hi, Jayeshh!</Text>
        <Text style={SUBTITLE_WELCOME_USER}>Jun 9, 2021</Text>
        <View style={MOOD_CHECK}>
          <Text style={MOOD_HEADER}>How are you feeling?</Text>
          <View style={MOOD_MENU}>
            <TouchableOpacity
              style={MOOD_MENU_ITEM}
              onPress={() => {
                console.log("lol!!")
              }}
            >
              <Text style={MOOD_MENU_ITEM_ICON}>😊</Text>
              <Text style={MOOD_MENU_ITEM_TEXT}>Happy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={MOOD_MENU_ITEM}
              onPress={() => {
                console.log("lol!!")
              }}
            >
              <Text style={MOOD_MENU_ITEM_ICON}>😢</Text>
              <Text style={MOOD_MENU_ITEM_TEXT}>Sad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={MOOD_MENU_ITEM}
              onPress={() => {
                console.log("lol!!")
              }}
            >
              <Text style={MOOD_MENU_ITEM_ICON}>😠</Text>
              <Text style={MOOD_MENU_ITEM_TEXT}>Angry</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={MOOD_MENU_ITEM}
              onPress={() => {
                console.log("lol!!")
              }}
            >
              <Text style={MOOD_MENU_ITEM_ICON}>😰</Text>
              <Text style={MOOD_MENU_ITEM_TEXT}>Anxious</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={CONTAINER}>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              padding: spacing[2],
              margin: spacing[2],
              fontWeight: "bold",
              alignSelf: "flex-start",
            }}
          >
            In the past hour you had...
          </Text>

          {/* <View style={MAIN_BPM_EXTRA_BORDER}>
            <Text style={MAIN_BPM_HEADER}>
              85<Text style={MAIN_BPM_CAPTION}>bpm</Text>
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>
            <View>
              <Text style={{ color: "black", fontSize: 13, opacity: 0.7 }}>Lowest Recorded:</Text>
              <Text style={{ color: "black", fontSize: 22, opacity: 0.7 }}>55 bpm</Text>
            </View>
            <View>
              <Text style={{ color: "black", fontSize: 13, opacity: 0.7 }}>Highest Recorded:</Text>
              <Text style={{ color: "black", fontSize: 22, opacity: 0.7 }}>93 bpm</Text>
            </View>
          </View> */}
          <View
            style={{
              flexDirection: "row",
              padding: spacing[4],
              borderRadius: spacing[2],
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 3.84,
            }}
          >
            <View style={MAIN_BPM_EXTRA_BORDER}>
              <Text style={MAIN_BPM_HEADER}>
                85<Text style={MAIN_BPM_CAPTION}>bpm</Text>
              </Text>
            </View>
            <View style={{ padding: spacing[5] }}>
              <View style={{ padding: spacing[2] }}>
                <Text style={{ color: "black", fontSize: 13, opacity: 0.7 }}>Lowest Recorded:</Text>
                <Text style={{ color: "black", fontSize: 22, opacity: 0.7 }}>55 bpm</Text>
              </View>
              <View style={{ padding: spacing[2] }}>
                <Text style={{ color: "black", fontSize: 13, opacity: 0.7 }}>
                  Highest Recorded:
                </Text>
                <Text style={{ color: "black", fontSize: 22, opacity: 0.7 }}>93 bpm</Text>
              </View>
            </View>
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
