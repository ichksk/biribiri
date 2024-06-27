import { useDialogVisible } from "../../context"
import { useAnsweredChair, useCurrentStep, useCurrentTurn, usePlayer, useRestChairs, useSelectedChair } from "globalStates/gameState"
import { OrangeButton } from "src/components/orangeButton"

export const CloseButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ , setCurrentStep ] = useCurrentStep()
  const [ , setRestChairs ] = useRestChairs()

  const [ answeredChair ] = useAnsweredChair()
  const [ selectedChair ] = useSelectedChair()

  const [ currentTurn, setCurrentTurn ] = useCurrentTurn()
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

  const moveNext = () => {
    setCurrentTurn(prev=>prev+1)
    answeredChair !== selectedChair && setRestChairs(prev=>prev.filter(value=>value!==answeredChair))
    setCurrentStep(1)
  }

  return (
    <OrangeButton
      onPress={() => {
        setDialogVisible(false)
        moveNext()
        if(answeredChair === selectedChair) onFailure()
        else onSuccess()
      }}
      title={"閉じる"}
    />
  )
}