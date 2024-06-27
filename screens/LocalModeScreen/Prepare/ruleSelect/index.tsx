import { Text } from "@rneui/base"
import { View } from "react-native"
import { HeartConfig } from "./heartConfig"
import { ChairConfig } from "./chairConfig"

export const RuleSelect = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontFamily: "YasashisaGothicBold",
        }}
      >モード設定</Text>
      <View>
        <HeartConfig/>
        <ChairConfig/>
      </View>
    </View>
  )
}