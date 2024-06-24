import { View } from "react-native"
import { Signage } from "./signage"
import { Text } from "@rneui/base"
import { Board } from "./board"
import { OkButton } from "./okButton"
import { ConfirmDialog } from "./confirmDialog"
import { useCurrentTurn } from "globalStates/gameState"

export const Step1 = () => {
  const [ currentTurn ] = useCurrentTurn()

  return (
    <>
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
            top: 260,
          }}
        >デンキイスをしかけろ</Text>
        <Board/>
        <OkButton/>
      </View>
      <ConfirmDialog/>
    </>
  )
}