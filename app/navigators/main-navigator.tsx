/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React, { useEffect, useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  TutorialWelcomeScreen,
  TutorialNotificationScreen,
  TutorialProfileScreen,
  TutorialFinishScreen,
  HomeScreen,
  HistoryScreen,
  ActionsScreen,
  ProfilesScreen,
  SettingsScreen,
} from "../screens"
import Ionicons from "react-native-vector-icons/Ionicons"
import { color } from "../theme"
import { useStores } from "../models"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  tutorialwelcomeStart: undefined
  homeStart: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()

export type TutorialParamList = {
  tutorialwelcome: undefined
  tutorialnotification: undefined
  tutorialprofile: undefined
  tutorialfinish: undefined
}
const TutorialStack = createStackNavigator<TutorialParamList>()

export function TutorialStackNavigator() {
  return (
    <TutorialStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TutorialStack.Screen name="tutorialwelcome" component={TutorialWelcomeScreen} />
      <TutorialStack.Screen name="tutorialnotification" component={TutorialNotificationScreen} />
      <TutorialStack.Screen name="tutorialprofile" component={TutorialProfileScreen} />
      <TutorialStack.Screen name="tutorialfinish" component={TutorialFinishScreen} />
    </TutorialStack.Navigator>
  )
}

export type AppParamList = {
  home: undefined
  history: undefined
  actions: undefined
  profiles: undefined
  settings: undefined
}
const AppTabs = createBottomTabNavigator<AppParamList>()

export function AppTabsNavigator() {
  const [activeTintColor, setActiveTintColor] = useState("orange")
  const { settingsStore } = useStores()
  const { actualTheme } = settingsStore

  useEffect(() => {
    console.log(`AppTabsNavigator settings setActiveTintColor to ${actualTheme}`)
    setActiveTintColor(actualTheme)
  }, [actualTheme])

  const getThemeColor = (c: string) => {
    switch (c) {
      case "red":
        return color.palette.gradient.red[0]
      case "orange":
        return color.palette.gradient.orange[0]
      case "yellow":
        return color.palette.gradient.yellow[0]
      case "green":
        return color.palette.gradient.green[0]
      case "cyan":
        return color.palette.gradient.cyan[0]
      case "blue":
        return color.palette.gradient.blue[0]
      case "purple":
        return color.palette.gradient.purple[0]
      default:
        return color.palette.gradient.orange[0]
    }
  }

  return (
    <AppTabs.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ color, size }) => {
          let iconName: string

          switch (route.name) {
            case "home":
              iconName = "ios-home-sharp"
              break
            case "history":
              iconName = "albums"
              break
            case "actions":
              iconName = "bulb-outline"
              break
            case "profiles":
              iconName = "ios-people"
              break
            case "settings":
              iconName = "ios-settings"
              break
            default:
              iconName = "glasses" // easter egg
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: getThemeColor(activeTintColor),
        inactiveTintColor: "gray",
      }}
    >
      <AppTabs.Screen name="home" component={HomeScreen} />
      <AppTabs.Screen name="history" component={HistoryScreen} />
      <AppTabs.Screen name="actions" component={ActionsScreen} />
      <AppTabs.Screen name="profiles" component={ProfilesScreen} />
      <AppTabs.Screen name="settings" component={SettingsScreen} />
    </AppTabs.Navigator>
  )
}

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tutorialwelcomeStart" component={TutorialStackNavigator} />
      <Stack.Screen name="homeStart" component={AppTabsNavigator} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = []
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
