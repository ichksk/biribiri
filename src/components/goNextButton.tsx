import { useMode } from "src/contexts/mode"
import { OrangeButton } from "./orangeButton"

export type GoNextButtonProps = {
  lastIndex: number,
  label: string,
  lastLabel: string,
  onLastClicked: Function,
}

export const GoNextButton = (props: GoNextButtonProps) => {
  const [ modeState, setModeState ] = useMode()

  return (
    <OrangeButton
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

      title={modeState !== props.lastIndex ? props.label : props.lastLabel}
    />

  )
}