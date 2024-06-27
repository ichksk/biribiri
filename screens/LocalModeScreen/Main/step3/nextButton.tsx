import { useCurrentStep } from "globalStates/gameState"
import { OrangeButton } from "src/components/orangeButton"

export const NextButton = () => {
  const [ , setCurrentStep ] = useCurrentStep()
  
  return (
    <OrangeButton
      onPress={() => setCurrentStep(prev=>prev+1)}
      title={"渡しました"}
    />
  )
}