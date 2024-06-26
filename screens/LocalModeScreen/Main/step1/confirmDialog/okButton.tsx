import { useCurrentStep, useSelectedChair } from "globalStates/gameState"
import { useCurrentChair, useDialogVisible } from "../../context"
import { StyledButton } from "./styledButton"

export const OkButton = () => {
  const [ , setDialogVisible] = useDialogVisible()
  const [ , setCurrentStep ] = useCurrentStep()
  const [ , setSelectedChair ] = useSelectedChair()
  const [ currentChair ] = useCurrentChair()

  return (
    <StyledButton
      title="OK"
      containerStyle={{
        borderWidth: 1,
        borderColor: "#F06060",
        backgroundColor: "#F06060",
      }}

      buttonStyle={{
        backgroundColor: "#F06060"
      }}
      onPress={() => {
        setCurrentStep(prev=>prev+1)
        setDialogVisible(false)
        setSelectedChair(currentChair)
      }}
    />
  )
}