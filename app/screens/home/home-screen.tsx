import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import {
  Alert,
  View,
  TextStyle,
  ViewStyle,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native"
import { Screen, Text, Button } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, typography } from "../../theme"
import LinearGradient from "react-native-linear-gradient"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const NAME_CONTAINER: ViewStyle = {
  marginTop: spacing.large,
  opacity: 0.8,
}

const LOADING: ViewStyle = {
  marginTop: spacing.huge,
  width: "100%",
  marginVertical: spacing.medium,
}

const CIRCLE_BPM_CONTAINER: ViewStyle = {
  // flexDirection: "row",
  padding: spacing.large,
  borderRadius: 3000,
  borderWidth: 10,
  borderColor: color.palette.white,
  width: 180,
  height: 180,
  alignItems: "center",
}

const OUTER_BPM_CIRCLE: ViewStyle = {
  borderRadius: 3000,
  borderWidth: 5,
  borderColor: color.palette.deepRed,
}

const BPM_VALUE: TextStyle = {
  fontSize: 60,
  color: color.palette.white,
  // backgroundColor: "green",
  width: 110,
  textAlign: "center",
}

const BPM_CAPTION: TextStyle = {
  color: color.palette.white,
  fontSize: 20,
  alignSelf: "center",
  // backgroundColor: "purple"
}

const CENTER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const styles = StyleSheet.create({
  button: {
    borderColor: color.palette.white,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: "row",
    fontSize: 17,
    marginTop: spacing.large,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  linearGradient: {
    // borderRadius: 5,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
})

export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const navigation = useNavigation()
  useEffect(() => {
    navigation.addListener("beforeRemove", (event) => {
      event.preventDefault()
      Alert.alert("Leaving the App", "Are you sure you want to leave the App?", [
        { text: "Confirm", style: "destructive", onPress: () => {} },
        { text: "Cancel", style: "cancel", onPress: () => {} },
      ])
    })
  }, [navigation])

  const doRefresh = () => {}

  return (
    <Screen style={ROOT} preset="scroll">
      <LinearGradient
        colors={[color.palette.brightOrange, color.palette.darkOrange, color.palette.darkerOrange]}
        style={styles.linearGradient}
      >
        {/* <Text style={styles.buttonText}>
          Home
        </Text> */}

        <View style={NAME_CONTAINER}>
          <Text preset="bold">☁️ Clouds 23°C</Text>
          <Text preset="default">15 July, 2021</Text>
        </View>

        <View style={CENTER}>
          <ActivityIndicator size="large" color={color.palette.white} style={LOADING} />

          <View style={OUTER_BPM_CIRCLE}>
            <View style={CIRCLE_BPM_CONTAINER}>
              <Text style={BPM_VALUE}>999</Text>
              <Text style={BPM_CAPTION}>bpm</Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 15, opacity: 0.5, marginVertical: spacing.medium }}>
              Last checked 27 seconds ago...
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.button} onPress={doRefresh}>
              <Ionicons
                name={"refresh"}
                size={17}
                color={color.palette.white}
                style={{ marginRight: spacing.small }}
              />
              <Text>Refresh</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={doRefresh}>
              <MaterialCommunityIcons
                name={"lan-connect"}
                size={17}
                color={color.palette.white}
                style={{ marginRight: spacing.small }}
              />
              <Text>Check connectivity</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: spacing.large }}>
            <Text style={{ fontSize: 15 }}>Testing connection to the device...</Text>
          </View>

          <View style={{ marginTop: spacing.large }}>
            <Text style={{ fontSize: 18, color: color.palette.alternativeGreen }}>
              Connection established. Everything is ok!
            </Text>
          </View>

          {/* <View style={{backgroundColor: color.palette.white, borderRadius: spacing.tiny}}>
          <Text style={{fontSize: 15, color: color.palette.deepRed}}>
            Error! Connection couldn't be established.
          </Text>
        </View> */}
        </View>
      </LinearGradient>
    </Screen>
  )
})
