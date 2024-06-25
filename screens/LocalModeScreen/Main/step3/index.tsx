import { View } from "react-native"
import { Signage } from "../signage"
import { useCurrentTurn } from "globalStates/gameState"
import { Board } from "../board"
import { useState } from "react"
import { CurrentChairContext, DialogVisibleContext } from "../context"
import { OkButton } from "./okButton"
import { Text } from "@rneui/base"
import { ConfirmDialog } from "./confirmDialog"

export const Step3 = () => {
  const [ currentTurn ] = useCurrentTurn()

  return (
    <CurrentChairContext.Provider value={useState(-1)}>
      <DialogVisibleContext.Provider value={useState(false)}>
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
          <Text
            style={{
              fontFamily: "TsunagiGothic",
              fontSize: 32,
              position: "absolute",
              top: 240,
            }}
          >イスを選ぼう</Text>
          <OkButton/>
        </View>
        <ConfirmDialog/>
      </DialogVisibleContext.Provider>
    </CurrentChairContext.Provider>
  )
}