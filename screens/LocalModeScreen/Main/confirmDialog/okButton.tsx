import { useCurrentStep } from "globalStates/gameState"
import { useDialogVisible, useSelectedChair } from "../context"
import { StyledButton } from "./styledButton"

export const OkButton = () => {
  const [ selectedChair ] = useSelectedChair()
  const [ , setDialogVisible] = useDialogVisible()
  const [ , setCurrentStep ] = useCurrentStep()

  return (
    <StyledButton
      title="OK"
      containerStyle={{
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "red",
      }}

      buttonStyle={{
        backgroundColor: "red"
      }}
      onPress={() => {
        setCurrentStep(prev=>prev+1)
        console.log(selectedChair)
        setDialogVisible(false)
      }}
    />
  )
}