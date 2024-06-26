import { Button, Text } from "@rneui/base"
import { useDialogVisible } from "../../context"
import { useCheckResult } from "../context"

export const CloseButton = () => {
  const [ , setDialogVisible ] = useDialogVisible()
  const [ , setCheckResult ] = useCheckResult()

  return (
    <Button
      onPress={() => {
        setDialogVisible(false)
        setCheckResult(true)
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
      >閉じる</Text>
    </Button>
  )
}