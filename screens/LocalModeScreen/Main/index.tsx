import { SafeAreaView } from "react-native"
import { Board } from "./board"
import { Signage } from "./signage"
import { Text } from "@rneui/base"
import { useCurrentStep } from "globalStates/gameState"
import { OkButton } from "./okButton"
import { useState } from "react"
import { DialogVisibleContext, SelectedChairContext } from "./context"
import { ConfirmDialog } from "./confirmDialog"

//スコアを表示するボード
//円盤上にChairを描画する


export const Main = () => {
  const [ currentStep ] = useCurrentStep()
  const [ selectedChair, setSelectedChair ] = useState(-1)
  const [ dialogVisible, setDialogVisible ] = useState(false)

  return (
    <SelectedChairContext.Provider value={[selectedChair, setSelectedChair]}>
      <DialogVisibleContext.Provider value={[dialogVisible, setDialogVisible]}>
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
          <Text
            style={{
              fontFamily: "TsunagiGothic",
              fontSize: 32,
              position: "absolute",
              top: 260,
            }}
          >デンキイスをしかけろ</Text>
          <Text>ステップ：{currentStep}</Text>
          <Board/>
          <OkButton/>
        </SafeAreaView>
        <ConfirmDialog/>
      </DialogVisibleContext.Provider>
    </SelectedChairContext.Provider>

  )
}