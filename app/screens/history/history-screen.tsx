import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  TextStyle,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native"
import { Screen, Text } from "../../components"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native"

const styles = StyleSheet.create({
  button: {
    // borderColor: color.palette.brightOrange,
    borderRadius: 4,
    borderWidth: 1,
    // color: color.palette.brightOrange,
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

export const HistoryScreen = observer(function HistoryScreen() {
  const [refreshing, setRefreshing] = useState(false)
  const [chartData, setChartData] = useState([])

  const { bpmStore, settingsStore } = useStores()
  const { last24h, lastWeek, lastMonth } = bpmStore
  const { actualTheme } = settingsStore

  const changeChart = async (option) => {
    setRefreshing(true)
    switch (option) {
      case "day":
        await bpmStore.getDayBpm()
        setChartData(last24h)
        break
      case "week":
        await bpmStore.getWeekBpm()
        setChartData(lastWeek)
        break
      case "month":
        await bpmStore.getMonthBpm()
        setChartData(lastMonth)
        break
      default:
        break
    }
    setRefreshing(false)
  }

  const setColor = getGradient(actualTheme)

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
        <TouchableOpacity
          style={{ ...styles.button, borderColor: setColor[0] }}
          onPress={() => changeChart("day")}
        >
          <Text style={{ color: setColor[0] }}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, borderColor: setColor[0] }}
          onPress={() => changeChart("Week")}
        >
          <Text style={{ color: setColor[0] }}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, borderColor: setColor[0] }}
          onPress={() => changeChart("Week")}
        >
          <Text style={{ color: setColor[0] }}>Month</Text>
        </TouchableOpacity>
      </View>

      {refreshing && <ActivityIndicator size="large" color={setColor[0]} style={LOADING} />}

      <View style={styles.container}>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: setColor[0] },
              parent: { border: "1px solid #ccc" },
            }}
            data={chartData}
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
