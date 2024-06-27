import { View } from "react-native"
import { Text } from "@rneui/base"
import { PlayerAvatar } from "src/components/playerAvatar"

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
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: "YasashisaGothicBold",
          }}
        >プレイヤー設定</Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "YasashisaGothicBold",
          }}
        >アバターを選んでね</Text>
      </View>
      <View
        style={{
          paddingVertical: 48,
          paddingHorizontal: 48,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <PlayerAvatar
          index={0}
          editable
        />
        <Text
          style={{
            fontFamily: "TsunagiGothic",
            fontSize: 32,
          }}
        >VS</Text>
        <PlayerAvatar
          index={1}
          editable
        />
      </View>
    </View>
  )
}