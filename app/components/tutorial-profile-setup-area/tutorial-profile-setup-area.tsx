import React, { useRef, useEffect, useReducer } from "react"
import { View, ViewStyle, TextStyle, Alert } from "react-native"
import { color, spacing, typography } from "../../theme"
import { Text } from "../../components"
import Draggable from "react-native-draggable"

const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
}
const ASPECT_CONTAINER: ViewStyle = {
  flexDirection: "row",
  width: "75%",
}
const MOODS_VIEW: ViewStyle = {
  ...TEXT,
  padding: spacing.small,
  margin: spacing.tiny,
  borderRadius: spacing.tiny,
  backgroundColor: color.palette.almostWhite,
}
const MOODS_TEXT: TextStyle = {
  color: color.palette.brightOrange,
}
const BASE_ASPECT: ViewStyle = {
  padding: spacing.medium,
  margin: spacing.tiny,
  borderRadius: spacing.tiny,
  minWidth: 50,
  justifyContent: "space-between",
}
const INVISIBLE_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backfaceVisibility: "hidden",
}
const RED_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "red",
}
const ORANGE_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "orange",
}
const YELLOW_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "yellow",
}
const GREEN_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "green",
}
const CYAN_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "cyan",
}
const BLUE_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "blue",
}
const PURPLE_ASPECT: ViewStyle = {
  ...BASE_ASPECT,
  backgroundColor: "purple",
}
const FILL: ViewStyle = {
  flexGrow: 1,
}
const RED_MOOD_VIEW: ViewStyle = {
  ...MOODS_VIEW,
  backgroundColor: "red",
}
const ORANGE_MOOD_VIEW: ViewStyle = {
  ...MOODS_VIEW,
  backgroundColor: "orange",
}
const YELLOW_MOOD_VIEW: ViewStyle = {
  ...MOODS_VIEW,
  backgroundColor: "yellow",
}
const GREEN_MOOD_VIEW: ViewStyle = {
  ...MOODS_VIEW,
  backgroundColor: "green",
}
const CYAN_MOOD_VIEW: ViewStyle = {
  ...MOODS_VIEW,
  backgroundColor: "cyan",
}
const BLUE_MOOD_VIEW: ViewStyle = {
  ...MOODS_VIEW,
  backgroundColor: "blue",
}
const PURPLE_MOOD_VIEW: ViewStyle = {
  ...MOODS_VIEW,
  backgroundColor: "purple",
}
const BLACK_MOOD_TEXT: TextStyle = {
  color: "black",
}
const WHITE_MOOD_TEXT: TextStyle = {
  color: "white",
}

const AspectColor = ({ colorValue, onRelease }) => {
  const style =
    colorValue === "red"
      ? RED_ASPECT
      : colorValue === "orange"
      ? ORANGE_ASPECT
      : colorValue === "yellow"
      ? YELLOW_ASPECT
      : colorValue === "green"
      ? GREEN_ASPECT
      : colorValue === "cyan"
      ? CYAN_ASPECT
      : colorValue === "blue"
      ? BLUE_ASPECT
      : colorValue === "purple"
      ? PURPLE_ASPECT
      : INVISIBLE_ASPECT

  return (
    <View>
      <Draggable
        shouldReverse
        onDragRelease={(event, gestureState, bounds) => {
          // Alert.alert(`x:${gestureState.moveX} y:${gestureState.moveY}`)
          onRelease(colorValue, gestureState.moveX, gestureState.moveY)
        }}
      >
        <View style={style}></View>
      </Draggable>
      <View style={INVISIBLE_ASPECT}></View>
    </View>
  )
}

export function TutorialProfileSetupArea({ saveColorScheme, initialValue = null }) {
  const [moods, setMood] = useReducer(
    (state, action) => {
      const decodeStyleFromColor = (color) =>
        color === "red"
          ? RED_MOOD_VIEW
          : color === "orange"
          ? ORANGE_MOOD_VIEW
          : color === "yellow"
          ? YELLOW_MOOD_VIEW
          : color === "green"
          ? GREEN_MOOD_VIEW
          : color === "cyan"
          ? CYAN_MOOD_VIEW
          : color === "blue"
          ? BLUE_MOOD_VIEW
          : color === "purple"
          ? PURPLE_MOOD_VIEW
          : MOODS_VIEW

      const textStyle =
        action.color === "yellow" || action.color === "cyan" ? BLACK_MOOD_TEXT : WHITE_MOOD_TEXT

      switch (action.mood) {
        case "angry":
          return { ...state, angry: { view: decodeStyleFromColor(action.color), text: textStyle } }
        case "sad":
          return { ...state, sad: { view: decodeStyleFromColor(action.color), text: textStyle } }
        case "happy":
          return { ...state, happy: { view: decodeStyleFromColor(action.color), text: textStyle } }
        case "anxious":
          return {
            ...state,
            anxious: { view: decodeStyleFromColor(action.color), text: textStyle },
          }
        default:
          return state
      }
    },
    {
      angry: { view: MOODS_VIEW, text: MOODS_TEXT },
      sad: { view: MOODS_VIEW, text: MOODS_TEXT },
      happy: { view: MOODS_VIEW, text: MOODS_TEXT },
      anxious: { view: MOODS_VIEW, text: MOODS_TEXT },
    },
  )

  const reducer = (state, action) => {
    switch (action.type) {
      case "set/angry":
        return { ...state, angry: action.payload }
      case "set/sad":
        return { ...state, sad: action.payload }
      case "set/happy":
        return { ...state, happy: action.payload }
      case "set/anxious":
        return { ...state, anxious: action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    angry: null,
    sad: null,
    happy: null,
    anxious: null,
  })

  const refs = {
    angry: useRef(null),
    sad: useRef(null),
    happy: useRef(null),
    anxious: useRef(null),
  }

  useEffect(() => {
    if (initialValue != null) {
      initialValue.forEach((item) => {
        if (item.color !== "") setMood({ mood: item.mood, color: item.color })
      })
    }
  }, [])

  useEffect(() => {
    if (refs.angry != null) {
      setTimeout(() => {
        measureComponent("angry")
      }, 100)
    }
  }, [refs.angry])

  useEffect(() => {
    if (refs.sad != null) {
      setTimeout(() => {
        measureComponent("sad")
      }, 100)
    }
  }, [refs.sad])

  useEffect(() => {
    if (refs.happy != null) {
      setTimeout(() => {
        measureComponent("happy")
      }, 100)
    }
  }, [refs.happy])

  useEffect(() => {
    if (refs.anxious != null) {
      setTimeout(() => {
        measureComponent("anxious")
      }, 100)
    }
  }, [refs.anxious])

  const measureComponent = (mood) => {
    const saveMoodPosition = (fx, fy, width, height, px, py) => {
      dispatch({ type: `set/${mood}`, payload: { width, height, x: px, y: py } })
    }
    refs[mood].current.measure(saveMoodPosition)
  }

  const onRelease = (colorValue, aspectX, aspectY) => {
    const isInRange = (value, from, to) => value >= from && value <= to
    // compare to all moods

    // angry
    if (
      isInRange(aspectX, state.angry.x, state.angry.x + state.angry.width) &&
      isInRange(aspectY, state.angry.y, state.angry.y + state.angry.height)
    ) {
      saveColorScheme({ color: colorValue, mood: "angry" })
      setMood({ mood: "angry", color: colorValue })
      return
    }
    // sad
    if (
      isInRange(aspectX, state.sad.x, state.sad.x + state.sad.width) &&
      isInRange(aspectY, state.sad.y, state.sad.y + state.sad.height)
    ) {
      saveColorScheme({ color: colorValue, mood: "sad" })
      setMood({ mood: "sad", color: colorValue })
      return
    }
    // happy
    if (
      isInRange(aspectX, state.happy.x, state.happy.x + state.happy.width) &&
      isInRange(aspectY, state.happy.y, state.happy.y + state.happy.height)
    ) {
      saveColorScheme({ color: colorValue, mood: "happy" })
      setMood({ mood: "happy", color: colorValue })
      return
    }
    // anxious
    if (
      isInRange(aspectX, state.anxious.x, state.anxious.x + state.anxious.width) &&
      isInRange(aspectY, state.anxious.y, state.anxious.y + state.anxious.height)
    ) {
      saveColorScheme({ color: colorValue, mood: "anxious" })
      setMood({ mood: "anxious", color: colorValue })
    }
  }

  return (
    <View style={ASPECT_CONTAINER}>
      <View>
        <AspectColor colorValue="red" onRelease={onRelease} />
        <AspectColor colorValue="orange" onRelease={onRelease} />
        <AspectColor colorValue="yellow" onRelease={onRelease} />
        <AspectColor colorValue="green" onRelease={onRelease} />
        <AspectColor colorValue="cyan" onRelease={onRelease} />
        <AspectColor colorValue="blue" onRelease={onRelease} />
        <AspectColor colorValue="purple" onRelease={onRelease} />
      </View>
      <View style={FILL}></View>
      <View>
        <View ref={refs.angry} style={moods.angry.view}>
          <Text style={moods.angry.text}>Angry</Text>
        </View>
        <View ref={refs.sad} style={moods.sad.view}>
          <Text style={moods.sad.text}>Sad</Text>
        </View>
        <View ref={refs.happy} style={moods.happy.view}>
          <Text style={moods.happy.text}>Happy</Text>
        </View>
        <View ref={refs.anxious} style={moods.anxious.view}>
          <Text style={moods.anxious.text}>Anxious</Text>
        </View>
      </View>
    </View>
  )
}
