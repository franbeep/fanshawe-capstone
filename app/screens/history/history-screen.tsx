import React, { useState, useEffect } from "react"
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
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
  VictoryScatter,
  VictoryGroup,
} from "victory-native"
import axios from "axios"

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: "row",
    fontSize: 17,
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

const calculateAverage = (items) =>
  parseInt(items.reduce((acc, curr) => acc + curr.y / items.length, 0))

const calculatePeak = (items) => items.reduce((acc, curr) => (curr.y > acc ? curr.y : acc), 0)

export const HistoryScreen = observer(function HistoryScreen() {
  const [refreshing, setRefreshing] = useState(false)
  const [chartData, setChartData] = useState([])
  const [weather, setWeather] = useState("")

  const { bpmStore, settingsStore } = useStores()
  const { lastHour, last24h, lastWeek, lastMonth } = bpmStore
  const { actualTheme } = settingsStore
  const today = new Date()

  const fetchWeather = async () => {
    const response = await axios.get("http://automatic-mango-hexagon.glitch.me/weather")
    setWeather(response.data.data)
  }
  useEffect(() => {
    fetchWeather()
  }, [])

  const changeChart = async (option) => {
    setRefreshing(true)
    switch (option) {
      case "hour":
        await bpmStore.getHourBpm()
        setChartData(lastHour)
        break
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

  useEffect(() => {
    changeChart("hour")
  }, [])

  useEffect(() => {
    console.log("chart data:")
    console.log(JSON.stringify(chartData))
  }, [chartData])

  const setColor = getGradient(actualTheme)

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={NAME_CONTAINER}>
        <Text style={CONTAINER_TEXT} preset="bold">
          {weather}
        </Text>
        <Text style={CONTAINER_TEXT} preset="default">
          {today.toDateString()}
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={{ ...styles.button, borderColor: setColor[0] }}
          onPress={() => changeChart("hour")}
        >
          <Text style={{ color: setColor[0] }}>Hour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, borderColor: setColor[0] }}
          onPress={() => changeChart("day")}
        >
          <Text style={{ color: setColor[0] }}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, borderColor: setColor[0] }}
          onPress={() => changeChart("week")}
        >
          <Text style={{ color: setColor[0] }}>Week</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{ ...styles.button, borderColor: setColor[0] }}
          onPress={() => changeChart("month")}
        >
          <Text style={{ color: setColor[0] }}>Month</Text>
        </TouchableOpacity> */}
      </View>

      {refreshing && <ActivityIndicator size="large" color={setColor[0]} style={LOADING} />}

      <View style={styles.container}>
        <VictoryChart theme={VictoryTheme.material} maxDomain={{ y: 120 }} minDomain={{ y: 50 }}>
          <VictoryAxis dependentAxis />
          <VictoryAxis fixLabelOverlap={true} />
          {chartData.length > 1 ? (
            <VictoryLine
              style={{
                data: { stroke: setColor[0] },
                parent: { border: "1px solid #ccc" },
              }}
              interpolation="natural"
              data={chartData}
            />
          ) : (
            <VictoryScatter data={chartData} />
          )}
        </VictoryChart>
      </View>

      <View>
        <Text style={CONTAINER_TEXT}>
          <Text style={CONTAINER_TEXT} preset="bold">
            Avg.:{" "}
          </Text>
          {calculateAverage(chartData)}
        </Text>
        <Text style={CONTAINER_TEXT}>
          <Text style={CONTAINER_TEXT} preset="bold">
            Peak:{" "}
          </Text>
          {calculatePeak(chartData)}
        </Text>
      </View>
    </Screen>
  )
})
