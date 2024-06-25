import { View } from "react-native"
import { Signage } from "../signage"
import { Text } from "@rneui/base"
import { Board } from "../board"
import { OkButton } from "./okButton"
import { ConfirmDialog } from "./confirmDialog"
import { useCurrentTurn } from "globalStates/gameState"
import { DialogVisibleContext, CurrentChairContext } from "../context"
import { useState } from "react"

export const Step1 = () => {
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
          <Signage currentPlayerIndex={(currentTurn-1) % 2}/>
          <Text
            style={{
              fontFamily: "TsunagiGothic",
              fontSize: 32,
              position: "absolute",
              top: 240,
            }}
          >デンキイスをしかけよう</Text>
          <Board/>
          <OkButton/>
        </View>
        <ConfirmDialog/>
      </DialogVisibleContext.Provider>
    </CurrentChairContext.Provider>
  )
}