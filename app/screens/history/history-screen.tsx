import React from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  TextStyle,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native"

const styles = StyleSheet.create({
  button: {
    borderColor: color.palette.brightOrange,
    borderRadius: 4,
    borderWidth: 1,
    color: color.palette.brightOrange,
    flexDirection: "row",
    fontSize: 17,
    // marginTop: spacing.large,
    marginHorizontal: spacing.small,
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.small,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: spacing.large,
    width: "100%",
  },
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  orange: {
    color: color.palette.brightOrange,
  },
})

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  padding: 15,
}

const NAME_CONTAINER: ViewStyle = {
  marginVertical: spacing.large - 15,
  opacity: 0.8,
}

const CONTAINER_TEXT: TextStyle = {
  color: color.palette.black,
  opacity: 0.9,
}

const LOADING: ViewStyle = {
  width: "100%",
  marginVertical: spacing.medium,
  marginBottom: 0,
}

export const HistoryScreen = observer(function HistoryScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const changeChart = (option) => {}

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={NAME_CONTAINER}>
        <Text style={CONTAINER_TEXT} preset="bold">
          ☁️ Clouds 23°C
        </Text>
        <Text style={CONTAINER_TEXT} preset="default">
          15 July, 2021
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => changeChart("day")}>
          <Text style={styles.orange}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeChart("Week")}>
          <Text style={styles.orange}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeChart("Week")}>
          <Text style={styles.orange}>Month</Text>
        </TouchableOpacity>
      </View>

      <ActivityIndicator size="large" color={color.palette.brightOrange} style={LOADING} />

      <View style={styles.container}>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: color.palette.brightOrange },
              parent: { border: "1px solid #ccc" },
            }}
            data={[]}
            // data={[
            //   { x: 1, y: 2 },
            //   { x: 2, y: 3 },
            //   { x: 3, y: 5 },
            //   { x: 4, y: 4 },
            //   { x: 5, y: 7 },
            // ]}
          />
        </VictoryChart>
      </View>

      <View>
        <Text style={CONTAINER_TEXT}>
          <Text style={CONTAINER_TEXT} preset="bold">
            Avg.:{" "}
          </Text>
          999
        </Text>
        <Text style={CONTAINER_TEXT}>
          <Text style={CONTAINER_TEXT} preset="bold">
            Peak:{" "}
          </Text>
          999
        </Text>
      </View>
    </Screen>
  )
})
