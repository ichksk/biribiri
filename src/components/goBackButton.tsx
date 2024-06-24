import { Button, Text } from "@rneui/base"
import { useScreenState } from "globalStates/screenState"
import { useMode } from "src/contexts/mode"

export type GoBackButtonProps = {
  label?: string,
}

export const GoBackButton = (props: GoBackButtonProps) => {
  const [ , setScreenState] = useScreenState()
  const [ modeState, setModeState ] = useMode()

  return (
    <Button
      onPress={() => {
        if(modeState === 0) {
          setScreenState("Title")
        } else {
          setModeState(prev => prev-1)
        }
      }}
      type="outline"
      containerStyle={{
        position: "absolute",
        top: "10%",
        left: 16,
      }}
      buttonStyle={{
        borderWidth: 0,
      }}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 24,
          color: "black",
        }}
      >{props.label || "＜戻る"}</Text>
    </Button>
  )
}