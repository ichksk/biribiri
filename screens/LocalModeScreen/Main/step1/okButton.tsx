import { Button, Text } from "@rneui/base"
import { useDialogVisible, useCurrentChair } from "../context"

export const OkButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ currentChair ] = useCurrentChair()
  return (
    <Button
      onPress={() => {
        setDialogVisible(true)
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
      disabled={currentChair == -1}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 24,
          color: "white",
        }}
      >決定</Text>
    </Button>
  )
}