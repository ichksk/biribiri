import { useCurrentStep, usePlayers, useRestChairs } from "globalStates/gameState"
import { OrangeButton } from "src/components/orangeButton"
import { useMode } from "src/contexts/mode"

export const OkButton = () => {
  const [ restChairs ] = useRestChairs()
  const [ players ] = usePlayers()
  const [ , setCurrentStep ] = useCurrentStep()
  const [ , setMode ] = useMode()

  const isFinished = () => {
    return restChairs.length === 1 || players.filter(player=>player.score>=30).length !== 0 || players.filter(player=>player.damage >= 3).length !== 0
  }

  return (
    <OrangeButton
      onPress={() => !isFinished() ? setCurrentStep(prev=>prev+1) : setMode(2)}
      title={isFinished() ? "ゲーム終了" : "次へ"}
    />
  )
}