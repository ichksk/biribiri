import { Text } from "@rneui/base"
import { SafeAreaView } from "react-native-safe-area-context"

export const TitleLabel = () => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "20%",
      }}
    >
      <Text
        style={{
          fontFamily: "KaijuFont",
          fontSize: 60,
          color: "#FFCC33",
          textAlign: "center",
        }}
      >デンキイス{"\n"}ゲーム</Text>
    </SafeAreaView>
  )
}