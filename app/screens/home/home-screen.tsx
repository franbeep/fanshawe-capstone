/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-empty-function */
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
  width: 110,
  textAlign: "center",
}

const BPM_CAPTION: TextStyle = {
  color: color.palette.white,
  fontSize: 20,
  alignSelf: "center",
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
  const { actualTheme, allowShifting } = settingsStore

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

    if (lastMinute > 100) {
      Alert.alert("Are you ok?", "You seem stressed out. Let us help you destressify you.", [
        {
          text: "Ok!",
          style: "destructive",
          onPress: () => {
            settingsStore.setThemeColor(settingsStore.sadColor)
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

  useEffect(() => {
    fetchData()
  }, [])

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

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(startAnimatedBackground, {
          toValue: 10,
          duration: 15000,
          useNativeDriver: false,
        }),
        Animated.timing(startAnimatedBackground, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: false,
        }),
      ]),
    ).start()
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

  const GradientWrapper = ({ children }) => (
    <LinearGradient colors={getGradient(actualTheme)} style={styles.linearGradient}>
      {children}
    </LinearGradient>
  )

  const AnimatedViewWrapper = ({ children }) => (
    <Animated.View
      style={[
        styles.linearGradient,
        {
          backgroundColor: startAnimatedBackgroundInterpolated,
        },
      ]}
    >
      {children}
    </Animated.View>
  )

  const Rest = () => (
    <>
      <View style={NAME_CONTAINER}>
        <Text preset="bold">☁️ Clouds 23°C</Text>
        <Text preset="default">3 August, 2021</Text>
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
    </>
  )

  if (actualTheme === "default" && allowShifting)
    return (
      <Screen style={ROOT} preset="scroll">
        <AnimatedViewWrapper>
          <Rest />
        </AnimatedViewWrapper>
      </Screen>
    )

  return (
    <Screen style={ROOT} preset="scroll">
      <GradientWrapper>
        <Rest />
      </GradientWrapper>
    </Screen>
  )
})
