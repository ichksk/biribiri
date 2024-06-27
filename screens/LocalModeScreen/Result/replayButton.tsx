import { useInitializeGame } from "globalStates/gameState"
import { OrangeButton } from "src/components/orangeButton"
import { useMode } from "src/contexts/mode"

export const ReplayButton = () => {
  const initializeGame = useInitializeGame()
  const [ , setMode ] = useMode()
  
  return (
    <OrangeButton
      title="もう一度"
      onPress={() => {
        setMode(1)
        initializeGame()
      }}
    />
  )
}