import React from "react"
import { observer } from "mobx-react-lite"
import {
  TutorialDots as NavigationDots,
  TutorialControls as Controls,
  TutorialWrapper as Wrapper,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome"

export const TutorialFinishScreen = observer(function TutorialFinishScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("homeStart")

  return (
    <Wrapper header={"Finished"}>
      <Wrapper.Container>
        {/* <Feather name="check-circle" size={70} color="green" /> */}
        <Icon name="check-circle" size={70} color="green" />
        <Wrapper.Content title>You are all set up!</Wrapper.Content>
        <Wrapper.Content>
          You can start using the application now. All those settings can be changed at settings
          later.
        </Wrapper.Content>
        <Wrapper.Content>Enjoy! 🥳</Wrapper.Content>
        <NavigationDots quantity={4} current={3} />
      </Wrapper.Container>
      <Controls>
        <Controls.Button text={"CONTINUE"} nextScreen={nextScreen} />
      </Controls>
    </Wrapper>
  )
})
