import { Text } from "@rneui/base"
import { SafeAreaView } from "react-native-safe-area-context"
import { Winner } from "./winner"
import { ReplayButton } from "./replayButton"
import { View } from "react-native"

export const Result = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fffbcf",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40
          }}
        >勝者：</Text>
        <Winner/>
      </View>
      <ReplayButton/>
    </SafeAreaView>
  )
}