import { Button, Text } from "@rneui/base"
import { useCurrentStep } from "globalStates/gameState"

export const NextButton = () => {
  const [ , setCurrentStep ] = useCurrentStep()
  return (
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
      >渡しました</Text>
    </Button>
  )
}