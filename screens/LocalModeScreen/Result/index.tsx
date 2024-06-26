import { Text } from "@rneui/base"
import { SafeAreaView } from "react-native-safe-area-context"

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
      <Text
        style={{
          fontSize: 40
        }}
      >リザルト画面</Text>
    </SafeAreaView>
  )
}