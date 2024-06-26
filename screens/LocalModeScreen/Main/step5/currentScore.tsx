import { Text } from "@rneui/base"
import { usePlayers } from "globalStates/gameState"
import { View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"

export const CurrentScore = () => {
  const [ players ] = usePlayers()

  return (
    <View>
      {players.map((player, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 16
          }}
        >
          <PlayerAvatar index={index}/>
          <Text
            style={{
              fontFamily: "TsunagiGothic",
              fontSize: 32
            }}
          >{player.score}、{player.damage}</Text>
        </View>
      ))}
    </View>
  )
}