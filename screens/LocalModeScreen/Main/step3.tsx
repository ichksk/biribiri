import { View } from "react-native"
import { Signage } from "./signage"
import { useCurrentTurn } from "globalStates/gameState"
import { Board } from "./board"

export const Step3 = () => {
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
      <Signage currentPlayerIndex={currentTurn % 2}/>
      <Board/>
    </View>
  )
}