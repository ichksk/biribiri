import { Text } from "@rneui/base"
import { TouchableOpacity } from "react-native"
import { useSelectedChair } from "../context"
import * as Haptics from "expo-haptics"

export type ChairProps = {
  index: number,
  x: number,
  y: number,
  visible?: boolean,
}

export const Chair = (props:ChairProps) => {
  const [ selectedChair, setSelectedChair ] = useSelectedChair()

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
        backgroundColor: selectedChair === props.index ? "#FFCC33" : "white",
        borderColor: "black",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setSelectedChair(props.index)
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