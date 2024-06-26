import { Button, Text } from "@rneui/base"
import { useCurrentStep, usePlayers, useRestChairs } from "globalStates/gameState"
import { useMode } from "src/contexts/mode"

export const OkButton = () => {
  const [ restChairs ] = useRestChairs()
  const [ players ] = usePlayers()
  const [ , setCurrentStep ] = useCurrentStep()
  const [ , setMode ] = useMode()

  const isFinished = () => {
    return restChairs.length === 0 || players.filter(player=>player.score>=40).length !== 0 || players.filter(player=>player.damage >= 3).length !== 0
  }

  return (
    <Button
      onPress={() => {
        !isFinished() ? setCurrentStep(1) : setMode(2)
      }}
      containerStyle={{
        position: "absolute",
        bottom: 40,
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
      >わかりました</Text>
    </Button>
  )
}