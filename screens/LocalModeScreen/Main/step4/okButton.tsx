import { useDialogVisible, useCurrentChair } from "../context"
import { OrangeButton } from "src/components/orangeButton"

export const OkButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ currentChair ] = useCurrentChair()
  return (
    <OrangeButton
      onPress={() => setDialogVisible(true)}
      disabled={currentChair == -1}
      title={"決定"}
    />
  )
}