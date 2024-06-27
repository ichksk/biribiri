import { Button, Text } from "@rneui/base"
import { useDialogVisible } from "../context"
import { useAnsweredChair, useSelectedChair } from "globalStates/gameState"
import { Vibration } from "react-native"

export const DestinyButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ answeredChair ] = useAnsweredChair()
  const [ selectedChair ] = useSelectedChair()

  const showResult = () => {
    setDialogVisible(true)
    answeredChair===selectedChair && Vibration.vibrate()
  }



  return (
    <Button
      onPress={() => showResult()}
      containerStyle={{
        position: "absolute",
        bottom: 40,
        borderRadius: 8,
      }}
      buttonStyle={{
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: "#FF9933",
      }}
      activeOpacity={0.6}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 24,
          color: "white",
        }}
      >ドキドキ。。。</Text>
    </Button>
  )
}