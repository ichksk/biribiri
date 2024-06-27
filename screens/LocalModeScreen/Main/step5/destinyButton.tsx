import { useDialogVisible } from "../context"
import { useAnsweredChair, useSelectedChair } from "globalStates/gameState"
import { Vibration } from "react-native"
import { OrangeButton } from "src/components/orangeButton"

export const DestinyButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ answeredChair ] = useAnsweredChair()
  const [ selectedChair ] = useSelectedChair()

  const showResult = () => {
    setDialogVisible(true)
    answeredChair===selectedChair && Vibration.vibrate()
  }

  return (
    <OrangeButton
      onPress={() => showResult()}
      title={"ドキドキ。。。"}
    />
  )
}