import { View } from "react-native"
import { Button, Text } from "@rneui/base"
import { useCurrentStep, useCurrentTurn } from "globalStates/gameState"
import { PlayerAvatar } from "src/components/playerAvatar"

export const Step2 = () => {
  const [ , setCurrentStep ] = useCurrentStep()
  const [ currentTurn ] = useCurrentTurn()


  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <PlayerAvatar
          index={(currentTurn-1) % 2}
        />
        <Text style={{
          fontFamily: "TsunagiGothic",
          fontSize: 36,
        }}>→</Text>
        <PlayerAvatar
          index={1 - (currentTurn-1) % 2}
        />
      </View>
      <Text style={{
          fontFamily: "TsunagiGothic",
          fontSize: 36,
      }}>相手にスマホを渡してください</Text>
      <Button
        onPress={() => {
          setCurrentStep(prev=>prev+1)
        }}
        containerStyle={{
          position: "absolute",
          bottom: 100,
          borderRadius: 8,
        }}
        buttonStyle={{
          paddingHorizontal: 24,
          paddingVertical: 16,
          backgroundColor: "#FF9933",
        }}
        activeOpacity={0.6}
      >
        <Text
          style={{
            fontFamily: "TsunagiGothic",
            fontSize: 24,
            color: "white",
          }}
        >はい</Text>
      </Button>
    </View>
  )
}