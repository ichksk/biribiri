import { Button } from "@rneui/base"
import { useScreenState } from "globalStates/screenState"
import { StyledButton } from "./styledButton"

export const MultiModeButton = () => {
  //マルチモードの画面に遷移
  const [, setScreenState] = useScreenState()

  return (
    <StyledButton
      containerStyle={{
        position: 'absolute',
        top: "75%",
        left: "auto",
      }}
      onPress={() => setScreenState("Multi")}
    >ふたつのスマホで遊ぶ</StyledButton>
  )
}