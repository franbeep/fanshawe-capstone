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
  // "&::before": {
  //   content: "" /* required for ::before */,
  //   position: "fixed" /* don't scroll with page */,
  //   zIndex: "-100" /* place behind elements on page */,
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "#14C2CC",
  //   backgroundImage:
  //     "radial-gradient(circle farthest-side at top right, transparent, #0D64FF), radial-gradient(ellipse farthest-corner at 0% 100%, transparent, #FF00A0)",
  //   animation: "bg-change 10s infinite",
  // },
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
const CHART_SUBTITLE_INFO: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
}
const CHART_SUBTITLE_INFO_TEXT: TextStyle = {
  ...TEXT,
  color: "rgba(0,0,0, 0.7)",
  marginLeft: "10px",
  marginRight: "10px",
}

export const HistoryScreen = observer(function HistoryScreen() {
  const [chart, setChart] = React.useState(null)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  const showMore = () => {}

  const testData = [72, 77, 91, 69, 70, 83, 71, 85, 89, 85, 72]
  const testData2 = [81, 76, 76, 86, 90, 80, 71, 84, 81, 84, 81]
  const testData3 = [76, 71, 70, 78, 71, 79, 76, 71, 71, 76, 80]
  const testLabels = [
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
  ]

  React.useEffect(() => {
    // day
    const last24hData = {
      labels: testLabels,
      datasets: [
        {
          label: "Dataset 1",
          data: testData,
          fill: "start",
          backgroundColor: "rgba(226, 38, 38, 0.2)",
          borderColor: "rgba(226, 38, 38, 0.9)",
          borderWidth: 1,
          pointRadius: 0,
        },
      ],
    }
    const last24hOptions = {
      responsive: true,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          position: "none",
        },
        title: {
          display: true,
          text: "Last 24h",
        },
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel
          },
        },
      },
    }

    // week
    const lastWeekData = {
      labels: testLabels,
      datasets: [
        {
          label: "Dataset 1",
          data: testData2,
          fill: "start",
          backgroundColor: "rgba(226, 38, 38, 0.2)",
          borderColor: "rgba(226, 38, 38, 0.9)",
          borderWidth: 1,
          pointRadius: 0,
        },
      ],
    }
    const lastWeekOptions = {
      responsive: true,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          position: "none",
        },
        title: {
          display: true,
          text: "Last Week",
        },
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel
          },
        },
      },
    }

    // month
    const lastMonthData = {
      labels: testLabels,
      datasets: [
        {
          label: "Dataset 1",
          data: testData3,
          fill: "start",
          backgroundColor: "rgba(226, 38, 38, 0.2)",
          borderColor: "rgba(226, 38, 38, 0.9)",
          borderWidth: 1,
          pointRadius: 0,
        },
      ],
    }
    const lastMonthOptions = {
      responsive: true,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          position: "none",
        },
        title: {
          display: true,
          text: "Last Month",
        },
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel
          },
        },
      },
    }

    const newChart = {
      data: {
        day: last24hData,
        week: lastWeekData,
        month: lastMonthData,
      },
      options: {
        day: last24hOptions,
        week: lastWeekOptions,
        month: lastMonthOptions,
      },
    }
    setChart(newChart)
  }, [])

  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <Header headerText="History" style={HEADER} titleStyle={HEADER_TITLE} />
        <View style={CONTAINER}>
          {/* <Text style={FOOTER_MENU_TEXT}>Home</Text> */}

          {chart != null ? (
            <Line data={chart.data.day} options={chart.options.day} />
          ) : (
            <View></View>
          )}

          <View style={CHART_SUBTITLE_INFO}>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Avg. 77</Text>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Peak 90</Text>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Lowest 89</Text>
          </View>

          {chart != null ? (
            <Line data={chart.data.week} options={chart.options.week} />
          ) : (
            <View></View>
          )}

          <View style={CHART_SUBTITLE_INFO}>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Avg. 85</Text>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Peak 90</Text>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Lowest 76</Text>
          </View>

          {chart != null ? (
            <Line data={chart.data.month} options={chart.options.month} />
          ) : (
            <View></View>
          )}

          <View style={CHART_SUBTITLE_INFO}>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Avg. 87</Text>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Peak 86</Text>
            <Text style={CHART_SUBTITLE_INFO_TEXT}>Lowest 71</Text>
          </View>

          {/* <Canvas ref={handleCanvas} /> */}
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
