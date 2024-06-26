import { BoardWithAvatar } from "../board"
import { SafeAreaView } from "react-native"
import { DestinyButton } from "./destinyButton"

export const Step4 = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BoardWithAvatar/>
      <DestinyButton/>
    </SafeAreaView>
  )
}