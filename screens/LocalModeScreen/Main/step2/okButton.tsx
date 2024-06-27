import { useDialogVisible, useCurrentChair } from "../context"
import { OrangeButton } from "src/components/orangeButton"

export const OkButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ currentChair ] = useCurrentChair()
  
  return (
    <OrangeButton
      disabled={currentChair == -1}
      onPress={() => setDialogVisible(true)}
      title={"決定"}
    />
  )
}