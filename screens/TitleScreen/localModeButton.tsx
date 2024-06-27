import { useScreenState } from "globalStates/screenState"
import { StyledButton } from "./styledButton"

export const LocalModeButton = () => {
  const [, setScreenState] = useScreenState()

  return (
    <StyledButton
      containerStyle={{
        position: 'absolute',
        top: "60%",
        left: "auto",
      }}
      onPress={() => setScreenState("Local")}
      title={"ひとつのスマホで遊ぶ"}
    />
  )
}