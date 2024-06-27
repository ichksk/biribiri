import { Text } from "@rneui/base"
import { useAnsweredChair, useCurrentTurn, useSelectedChair } from "globalStates/gameState"
import { StyleSheet, View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"


const PlayerMessages = [
  [
    "余裕だぜ",
    "読み切ってました",
    "お見通し！",

  ],
  [
    "感電した！",
    "イタイ！",
    "ひいいい！"
  ]
] as const

const getRandomMessage = (index: number) => PlayerMessages[index][Math.floor(Math.random()*PlayerMessages[index].length)];

export const PlayerMessage = () => {
  const [ answeredChair ] = useAnsweredChair()
  const [ selectedChair ] = useSelectedChair()
  const [ currentTurn ] = useCurrentTurn()

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        position: "absolute",
      }}
    >
      <PlayerAvatar index={currentTurn%2}/>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "YasashisaGothicBold",
            fontSize: 20,
            textAlign: "center",
          }}
        >{answeredChair === selectedChair ? getRandomMessage(1) : getRandomMessage(0)}</Text>
        <View style={styles.triangle}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 'auto',
    marginHorizontal: 'auto',
    padding: 24,
    backgroundColor: '#dcc6b9',
    height: 100,
    width: 160,
    justifyContent: 'center',
    borderRadius: 16,
  },
  triangle: {
    position: 'absolute',
    top: '50%',
    // right: '100%',
    transform: [{
      translateX: -20,
    }, {
      translateY: -20,
    }],
    width: 0,
    height: 0,
    borderTopWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 40,
    borderTopColor: "transparent",
    borderRightColor: "#dcc6b9",
    borderBottomColor: 'transparent',
  }
});