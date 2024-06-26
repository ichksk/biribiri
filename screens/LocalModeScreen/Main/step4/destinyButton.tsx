import { Button, Text } from "@rneui/base"
import { useDialogVisible } from "../context"
import { useCheckResult } from "./context"
import { useCurrentStep } from "globalStates/gameState"

export const DestinyButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ checkResult ] = useCheckResult()
  const [ , setCurrentStep ] = useCurrentStep()

  const showResult = () => {
    setDialogVisible(true)
  }

  const moveNext = () => {
    setCurrentStep(prev=>prev+1)
  }

  return (
    <Button
      onPress={() => checkResult ? moveNext() : showResult()}
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
      >{checkResult ? "次へ" : "ドキドキ。。。"}</Text>
    </Button>
  )
}