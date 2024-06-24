import { Text } from "@rneui/base"
import { TouchableOpacity } from "react-native"

export type ChairProps = {
  index: number,
  x: number,
  y: number,
  visible?: boolean,
}

export const Chair = (props:ChairProps) => {
  return (
    <TouchableOpacity
      style={{
        display: props.visible ? "flex" : "none",
        width: 48,
        height: 48,
        position: "absolute",
        top: props.y,
        left: props.x,
        borderRadius: 30,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 16
        }}
      >{props.index}</Text>
    </TouchableOpacity>
  )
}