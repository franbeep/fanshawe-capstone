import React, { useEffect, useState, useRef } from "react"
import { observer } from "mobx-react-lite"
import {
  Alert,
  View,
  TextStyle,
  ViewStyle,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
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
  lastChecked: {
    fontSize: 15,
    marginVertical: spacing.medium,
    opacity: 0.5,
  },
  linearGradient: {
    // borderRadius: 5,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
})

const getGradient = (c: string): string[] => {
  switch (c) {
    case "red":
      return color.palette.gradient.red
    case "orange":
      return color.palette.gradient.orange
    case "yellow":
      return color.palette.gradient.yellow
    case "green":
      return color.palette.gradient.green
    case "cyan":
      return color.palette.gradient.cyan
    case "blue":
      return color.palette.gradient.blue
    case "purple":
      return color.palette.gradient.purple
    default:
      return color.palette.gradient.orange
  }
}

export const HomeScreen = observer(function HomeScreen() {
  // Are we refreshing the data
  const [refreshing, setRefreshing] = useState(false)
  const [message, setMessage] = useState("")
  const [lastChecked, setLastChecked] = useState(null)

  // Pull in one of our MST stores
  const { bpmStore, settingsStore } = useStores()
  const { lastMinute } = bpmStore
  const { actualTheme } = settingsStore

  useEffect(() => {
    if (lastMinute > 0 && lastMinute < 50) {
      Alert.alert("Change Theme", "You seem down 😔. Don't worry, we can solve this! 🥳", [
        {
          text: "Change Theme to HAPPY",
          style: "destructive",
          onPress: () => {
            settingsStore.setThemeColor(settingsStore.happyColor)
          },
        },
        { text: "Cancel", style: "cancel", onPress: () => {} },
      ])
    }
  }, [lastMinute])

  const fetchData = async () => {
    setRefreshing(true)
    await bpmStore.getCurrentBpm()
    setLastChecked(new Date())
    setRefreshing(false)
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

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

  const doRefresh = () => {
    fetchData()
  }

  const doCheckConnectivity = () => {
    // dummy checking
    setMessage("Testing connection to the device...")
    setTimeout(() => {
      setMessage("Error! Connection couldn't be established.")
      setTimeout(() => {
        setMessage("")
      }, 3000)
    }, 3000)
  }

  const startAnimatedBackground = useRef(new Animated.Value(0)).current
  const endAnimatedBackground = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // start
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(startAnimatedBackground, {
    //       toValue: 10,
    //       duration: 2000,
    //       useNativeDriver: true,
    //     }),
    //     Animated.timing(startAnimatedBackground, {
    //       toValue: 0,
    //       duration: 2000,
    //       useNativeDriver: true,
    //     }),
    //   ]),
    //   {
    //     iterations: 10,
    //   },
    // ).start()
    // end
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(endAnimatedBackground, {
    //       toValue: 10,
    //       duration: 2000,
    //       useNativeDriver: true,
    //     }),
    //     Animated.timing(endAnimatedBackground, {
    //       toValue: 0,
    //       duration: 2000,
    //       useNativeDriver: true,
    //     }),
    //   ]),
    //   {
    //     iterations: 10,
    //   },
    // ).start()
    Animated.timing(startAnimatedBackground, {
      toValue: 10,
      duration: 15000,
      useNativeDriver: true,
    }).start()
  }, [])

  const startAnimatedBackgroundInterpolated = startAnimatedBackground.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    outputRange: [
      "rgb(26, 117, 255)",
      "rgb(106, 93, 248)",
      "rgb(201, 87, 230)",
      "rgb(210, 72, 107)",
      "rgb(191, 68, 172)",
      "rgb(171, 71, 208)",
      "rgb(148, 96, 243)",
      "rgb(70, 172, 237)",
      "rgb(78, 196, 163)",
      "rgb(184, 186, 5)",
      "rgb(210, 72, 107)",
    ],
  })

  // const endAnimatedBackgroundInterpolated = endAnimatedBackground.interpolate({
  //   inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   outputRange: [
  //     "rgb(106, 93, 248)",
  //     "rgb(201, 87, 230)",
  //     "rgb(210, 72, 107)",
  //     "rgb(191, 68, 172)",
  //     "rgb(171, 71, 208)",
  //     "rgb(148, 96, 243)",
  //     "rgb(70, 172, 237)",
  //     "rgb(78, 196, 163)",
  //     "rgb(184, 186, 5)",
  //     "rgb(210, 72, 107)",
  //     "rgb(26, 117, 255)",
  //   ],
  // })

  return (
    <Screen style={ROOT} preset="scroll">
      <Animated.View
        style={[
          styles.linearGradient,
          {
            backgroundColor: startAnimatedBackgroundInterpolated,
          },
        ]}
        // colors={[color.palette.brightOrange, color.palette.darkOrange, color.palette.darkerOrange]}
        // colors={["transparent", "transparent"]}
        // style={styles.linearGradient}
        // useAngle={true}
        // angle={137}
        // angleCenter={{ x: 0.5, y: 0.5 }}
      >
        {/* <Text style={styles.buttonText}>
          Home
        </Text> */}

        <View style={NAME_CONTAINER}>
          <Text preset="bold">☁️ Clouds 23°C</Text>
          <Text preset="default">16 July, 2021</Text>
        </View>

        <View style={CENTER}>
          {refreshing && (
            <ActivityIndicator size="large" color={color.palette.white} style={LOADING} />
          )}

          {!refreshing && <View style={[LOADING, { height: 38 }]}></View>}

          <View style={{ ...OUTER_BPM_CIRCLE, borderColor: getGradient(actualTheme)[2] }}>
            <View style={CIRCLE_BPM_CONTAINER}>
              <Text style={BPM_VALUE}>{lastMinute}</Text>
              <Text style={BPM_CAPTION}>bpm</Text>
            </View>
          </View>

          {lastChecked != null && (
            <View>
              <Text style={styles.lastChecked}>
                Last checked at {lastChecked.toLocaleTimeString("en-US")}
              </Text>
            </View>
          )}

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
            <TouchableOpacity style={styles.button} onPress={doCheckConnectivity}>
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
            <Text style={{ fontSize: 15 }}>{message}</Text>
          </View>
        </View>
      </Animated.View>
    </Screen>
  )
})
