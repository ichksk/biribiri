import { Button } from "@rneui/base"
import { useScreenState } from "globalStates/screenState"

export const MultiModeButton = () => {
  //マルチモードの画面に遷移
  const [, setScreenState] = useScreenState()

  return (
    <Button
      titleStyle={{
        fontFamily: "TsunagiGothic",
        fontSize: 24,
      }}
      containerStyle={{
        position: 'absolute',
        top: "75%",
        left: "auto",
        borderRadius: 16,
      }}
      buttonStyle={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#94D1B9",
      }}
      activeOpacity={0.6}

      onPress={() => {
        setScreenState("Multi")
      }}
    >ふたつのスマホで遊ぶ</Button>
  )
}