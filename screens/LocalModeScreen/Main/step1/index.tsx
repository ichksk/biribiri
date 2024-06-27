import { Text } from "@rneui/base"
import { View } from "react-native"
import { CurrentScore } from "./currentScore"
import { OkButton } from "./okButton"
import { useCurrentTurn } from "globalStates/gameState"

export const Step1 = () => {
  const [ currentTurn ] = useCurrentTurn()

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 24,
          position: "absolute",
          top: 260,
        }}
      >ターン{currentTurn}</Text>
      <CurrentScore/>
      <OkButton/>
    </View>
  )
}