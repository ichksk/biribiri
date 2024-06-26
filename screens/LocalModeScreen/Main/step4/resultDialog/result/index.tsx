import { Text } from "@rneui/base"
import { useCurrentTurn, useSelectedChair } from "globalStates/gameState"
import { View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"
import { PlayerMessage } from "./playerMessage"

export const Result = () => {
  const [ currentTurn ] = useCurrentTurn()
  const [ selectedChair ] = useSelectedChair()

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View
          style={{
            position: "absolute",
            top: 0,
            backgroundColor: "#eeeadf",
            padding: 16,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "TsunagiGothic",
              fontSize:  24,
              verticalAlign: "middle",
            }}
          ><PlayerAvatar index={1-currentTurn%2} size={48}/>は「{selectedChair}」にしかけていた！</Text>
        </View>
        <PlayerMessage/>
    </View>

  )
}