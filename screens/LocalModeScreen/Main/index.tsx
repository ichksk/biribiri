import { SafeAreaView } from "react-native"
import { Board } from "./board"
import { Signage } from "./signage"
import { useGameState } from "globalStates/gameState"
import { Text } from "@rneui/base"

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
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 32,
          position: "absolute",
          top: 260,
        }}
      >デンキイスをしかけろ</Text>
      <Signage/>
      <Board/>
    </SafeAreaView>
  )
}