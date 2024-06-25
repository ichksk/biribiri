import { Text } from "@rneui/base"
import { TouchableOpacity } from "react-native"
import { useCurrentChair } from "../context"
import * as Haptics from "expo-haptics"

export type ChairProps = {
  index: number,
  x: number,
  y: number,
  visible?: boolean,
  pressable?: boolean,
}

export const Chair = (props:ChairProps) => {
  const [ currentChair, setCurrentChair ] = useCurrentChair()

  return (
    <TouchableOpacity
      style={{
        display: props.visible ? "flex" : "none",
        width: 48,
        height: 48,
        position: "absolute",
        top: props.y,
        left: props.x,
        borderRadius: 24,
        backgroundColor: currentChair === props.index ? "#FFCC33" : "white",
        borderColor: "black",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={async () => {
        if(!props.pressable) {
          return
        }
        
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setCurrentChair(props.index)
      }}
      activeOpacity={1}
    >
      <Text
        style={{
          fontFamily: "YasashisaGothicBold",
          fontSize: 16
        }}
      >{props.index}</Text>
    </TouchableOpacity>
  )
}