import { View } from "react-native"
import { BoardWithAvatar } from "../board"

export const Step4 = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BoardWithAvatar/>
    </View>
  )
}