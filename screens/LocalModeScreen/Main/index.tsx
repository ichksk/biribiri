import { SafeAreaView, View } from "react-native"
import { Board } from "./board"
import { Signage } from "./signage"
import { PlayerAvatar } from "src/components/playerAvatar"
import { useGameState } from "globalStates/gameState"

//スコアを表示するボード
//円盤上にChairを描画する


export const Main = () => {
  const [ gameState, setGameState ] = useGameState()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fffbcf",
      }}
    >
      <Signage/>
      <Board/>
    </SafeAreaView>
  )
}