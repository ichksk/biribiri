import { Button, Text } from "@rneui/base"
import { useMode } from "src/contexts/mode"

export type GoNextButtonProps = {
  lastIndex: number,
  label: string,
  lastLabel: string,
  onLastClicked: Function,
}

export const GoNextButton = (props: GoNextButtonProps) => {
  const [ modeState, setModeState ] = useMode()

  return (
    <Button
      onPress={() => {
        if (modeState === props.lastIndex) {
          props.onLastClicked()
        } else {
          setModeState(prev => prev + 1)
        }
      }}
      containerStyle={{
        position: "absolute",
        bottom: 100,
        borderRadius: 8,
      }}
      buttonStyle={{
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: "#FF9933",
      }}
      activeOpacity={0.6}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 24,
          color: "white",
        }}
      >{modeState !== props.lastIndex ? props.label : props.lastLabel}</Text>
    </Button>
  )
}