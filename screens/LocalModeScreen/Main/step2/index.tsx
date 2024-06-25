import { View } from "react-native"
import { Text } from "@rneui/base"
import { useCurrentTurn } from "globalStates/gameState"
import { PlayerAvatar } from "src/components/playerAvatar"
import { NextButton } from "./nextButton"

export const Step2 = () => {
  const [ currentTurn ] = useCurrentTurn()


  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <PlayerAvatar
          index={(currentTurn-1) % 2}
        />
        <Text style={{
          fontFamily: "TsunagiGothic",
          fontSize: 36,
        }}>→</Text>
        <PlayerAvatar
          index={1 - (currentTurn-1) % 2}
        />
      </View>
      <Text style={{
          fontFamily: "TsunagiGothic",
          fontSize: 36,
      }}>相手にスマホを渡してください</Text>
      <NextButton/>
    </View>
  )
}