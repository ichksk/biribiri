import { Button, Text } from "@rneui/base"
import { useDialogVisible } from "../../context"
import { useCheckResult } from "../context"
import { useAnsweredChair, useCurrentTurn, usePlayer, useSelectedChair } from "globalStates/gameState"

export const CloseButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ , setCheckResult ] = useCheckResult()

  const [ answeredChair ] = useAnsweredChair()
  const [ selectedChair ] = useSelectedChair()

  const [ currentTurn ] = useCurrentTurn()
  const [ , setPlayer ] = usePlayer(currentTurn%2)


  const onSuccess = () => {
    setPlayer(prev=>({
      ...prev,
      score: prev.score+answeredChair
    }))
  }

  const onFailure = () => {
    setPlayer(prev=>({
      ...prev,
      score: 0,
      damage: prev.damage+1,
    }))
  }

  return (
    <Button
      onPress={() => {
        setDialogVisible(false)
        setCheckResult(true)

        if(answeredChair === selectedChair) onFailure()
        else onSuccess()
      }}
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
      >閉じる</Text>
    </Button>
  )
}