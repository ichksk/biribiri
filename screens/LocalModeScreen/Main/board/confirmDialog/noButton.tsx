import { useDialogVisible } from "../context"
import { StyledButton } from "./styledButton"

export const NoButton = () => {
  const [ , setDialogVisible] = useDialogVisible()
  return (
    <StyledButton
      title="キャンセル"
      titleStyle={{
        color: "gray",
        fontSize: 16
      }}

      containerStyle={{
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "gray",
      }}

      buttonStyle={{
        backgroundColor:"transparent",
      }}

      onPress={() => {
        setDialogVisible(false)
      }}
    />
  )
}