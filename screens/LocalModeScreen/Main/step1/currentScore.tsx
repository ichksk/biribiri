import { Icon, Text } from "@rneui/base"
import { useHeartConfig, usePlayers } from "globalStates/gameState"
import { View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"

export const CurrentScore = () => {
  const [ players ] = usePlayers()
  const [ heartConfig ] = useHeartConfig()

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
          {Array.from({length: heartConfig}, (v, k)=>heartConfig-k).map(i => (
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