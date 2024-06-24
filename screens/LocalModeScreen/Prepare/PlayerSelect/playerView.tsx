import { Text } from "@rneui/base"
import { View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"

export const PlayerView = ({index} : {index: number}) => {
  return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "TsunagiGothic",
            fontSize: 24,
          }}
        >プレイヤー{index+1}</Text>
        <PlayerAvatar
          index={index}
          editable
        />

      </View>
  )
}