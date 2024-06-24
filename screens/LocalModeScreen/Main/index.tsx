import { SafeAreaView } from "react-native"
import { Board } from "./board"
import { Signage } from "./signage"

//スコアを表示するボード
//円盤上にChairを描画する


export const Main = () => {

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