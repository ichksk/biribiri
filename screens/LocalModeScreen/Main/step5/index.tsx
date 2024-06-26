import { Text } from "@rneui/base"
import { View } from "react-native"
import { CurrentScore } from "./currentScore"
import { OkButton } from "./okButton"

export const Step5 = () => {
  //現在の得点を表示させる
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>現在の得点</Text>
      <CurrentScore/>
      <OkButton/>
    </View>
  )
}