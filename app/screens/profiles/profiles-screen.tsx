import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle, SafeAreaView, TouchableOpacity } from "react-native"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { Line } from "react-chartjs-2"

import { Picker } from "@react-native-picker/picker"

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

// chart stuff
const CANVAS: ViewStyle = {
  width: "100%",
  height: "100%",
}

export const ProfilesScreen = observer(function ProfilesScreen() {
  const [selectedLanguage, setSelectedLanguage] = React.useState()
  // const pickerRef = React.useRef();

  // function open() {
  //   pickerRef.current.focus();
  // }

  // function close() {
  //   pickerRef.current.blur();
  // }

  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  const showMore = () => {}

  return (
    <View style={FULL}>
      <Header headerText="History" style={HEADER} titleStyle={HEADER_TITLE} />

      <Screen style={ROOT} preset="scroll">
        <View style={CONTAINER}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            {/* list of profiles available */}
          </Picker>

          <Button
            testID="next-screen-button"
            // style={CONTINUE}
            // textStyle={CONTINUE_TEXT}
            // onPress={nextScreen}
            // tx="welcomeScreen.continue"
            text="Add Profile"
          />

          <Button
            testID="next-screen-button"
            // style={CONTINUE}
            // textStyle={CONTINUE_TEXT}
            // onPress={nextScreen}
            // tx="welcomeScreen.continue"
            text="Remove"
          />
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
            <Ionicons name="albums" size={24} color="black" style={FOOTER_MENU_ICON__ACTIVE} />
            {/* <Ionicons name="book-outline" size={24} color="black" style={FOOTER_MENU_ICON} /> */}
            <Text style={FOOTER_MENU_TEXT__ACTIVE}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FOOTER_MENU_ITEM}
            onPress={() => {
              navigation.navigate("actions")
            }}
          >
            <Ionicons name="bulb-outline" size={24} color="black" style={FOOTER_MENU_ICON} />
            <Text style={FOOTER_MENU_TEXT}>Actions</Text>
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
          <TouchableOpacity style={FOOTER_MENU_ITEM} onPress={showMore}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" style={FOOTER_MENU_ICON} />
            <Text style={FOOTER_MENU_TEXT}>More</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
})
