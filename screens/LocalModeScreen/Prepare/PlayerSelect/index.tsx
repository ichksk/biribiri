import { View } from "react-native"
import { Text } from "@rneui/base"
import { PlayerView } from "./playerView"

export const PlayerSelect = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 240,
          padding: 16,
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: "YasashisaGothicBold",
          }}
        >プレイヤー設定</Text>
      </View>
      <View
        style={{
          paddingVertical: 48,
          paddingHorizontal: 48,
          marginTop: 18,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <PlayerView index={0}/>
        <Text
          style={{
            fontFamily: "TsunagiGothic",
            fontSize: 32,
            marginTop: 40
          }}
        >VS</Text>
        <PlayerView index={1}/>
      </View>
    </View>
  )
}