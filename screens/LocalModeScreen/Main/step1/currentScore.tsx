import { Icon, Text } from "@rneui/base"
import { useCurrentTurn, usePlayers } from "globalStates/gameState"
import { View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"

export const CurrentScore = () => {
  const [ players ] = usePlayers()

  return (
    <View
      style={{
        gap: 16,
      }}
    >

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
              fontSize: 32,
              textAlign: "right",
              width: 80
            }}
          >{player.score}</Text>
          {[2,1,0].map(i => (
            <Icon
              key={i}
              name={player.damage>i ? "heart-outline" : "heart"}
              type="ionicon"
              color="#ff3333"
            />
          ))}
        </View>
      ))}
    </View>
  )
}