import { useDialogVisible, useSelectedChair } from "../context"
import { StyledButton } from "./styledButton"

export const OkButton = () => {
  const [ selectedChair ] = useSelectedChair()
  const [ , setDialogVisible] = useDialogVisible()

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
        console.log(selectedChair)
        setDialogVisible(false)
      }}
    />
  )
}